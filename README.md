# demo-rpg-frontend

**Branching Tales** — the public web front-end for the Revisium demo RPG.

SSR React app talking to the federated GraphQL router
(`https://demo-rpg-router.dev.revisium.io/graphql`).

## Stack

| Concern        | Choice                                                 |
| -------------- | ------------------------------------------------------ |
| Framework      | React Router v7 (SSR mode)                             |
| UI runtime     | React 19                                               |
| State          | MobX 6 + mobx-react-lite (MVVM)                        |
| GraphQL client | `graphql-request` 7                                    |
| Codegen        | `@graphql-codegen/cli` + `typescript-graphql-request`  |
| Bundler        | Vite 7 (`vite-plugin-checker`, `vite-plugin-svgr`)     |
| Linters        | ESLint 9 (flat), Prettier 3, Steiger (FSD), `tsc`      |
| Layout         | Feature-Sliced Design (`app/`, `pages/`, `shared/`, …) |

## Commands

```bash
nvm use                       # node 22
npm install
npm run gql:codegen:download  # writes src/__generated__/schema.graphql
npm run gql:codegen           # writes src/__generated__/graphql-request.ts
npm run dev                   # react-router dev
npm run build && npm start    # production SSR

npm run ts:check
npm run lint:ci
npm run fsd:check
```

## Layout (FSD)

```text
src/
  app/routes/         # react-router v7 route modules (thin shells)
  pages/<Page>/       # page-level MVVM bundle
    api/*.graphql     # GraphQL documents — codegen source of truth
    model/*ViewModel  # MobX store, DI-registered as transient
    ui/*Page.tsx      # observer view, consumes ViewModel via useViewModel
  shared/
    config/           # IViewModel, public types
    lib/              # DIContainer, ObservableRequest, useViewModel, helpers
    model/            # ApiService, EnvironmentService (singleton in DI)
  __generated__/      # codegen output — do not edit
  root.tsx routes.ts  # react-router entry
```

Architectural boundaries are enforced by Steiger
(`steiger.config.ts` — recommended FSD ruleset).

## MVVM contract

Every page ships a `ViewModel` implementing `IViewModel`:

```ts
interface IViewModel {
  setup(...args): void | Promise<void>;  // sync, runs on SSR and client
  mount(...args): void | Promise<void>;  // client only (useEffect)
  unmount(): void;                       // client cleanup
}
```

`useViewModel(Token, ...args)` resolves a transient instance from the
DI container and drives the lifecycle. Views are plain `observer`
functions that read MobX-observable fields off the ViewModel.

## Env

Effective precedence (highest wins) is
`.env/.env.<mode>.local` > `.env/.env.<mode>` > `.env/.env.local` > `.env/.env`,
matching Vite's env-mode rules. Only keys prefixed with `REACT_APP_` reach
the client bundle. See `.env/.env.example`.

## Docker

```bash
docker build -f docker/Dockerfile -t demo-rpg-frontend .
docker run --rm -p 8080:8080 demo-rpg-frontend
```

The multi-stage build (`docker/Dockerfile`) compiles the React Router
SSR bundle in a Node 22 Alpine builder, then ships a minimal runtime
stage that installs only production deps and serves `build/server/index.js`
with `react-router-serve` on port `8080`.

## CI / CD

Workflows live under `.github/workflows/`. `build.yml`, `deploy.yml`, and
`release-train.yml` delegate to reusable workflows in
`revisium/revisium-actions`; `ci.yml` runs locally on every PR.

- `ci.yml` — `lint:ci`, `ts:check`, `fsd:check`, `build` on every PR
- `build.yml` — Docker image build + push to Docker Hub on `master` / tags
- `deploy.yml` — Kubernetes deploy on successful Build (or manual dispatch)
- `release-train.yml` — version bumps and tags

The Vite production build inlines `REACT_APP_*` from
`.env/.env.production`. Per-env images are built by overriding the
relevant env files before `npm run build` runs.
