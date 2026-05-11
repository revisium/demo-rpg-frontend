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

```
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

Variables are loaded from `.env/.env`, `.env/.env.<mode>`,
`.env/.env.<mode>.local` (in that order). Only keys prefixed with
`REACT_APP_` reach the client bundle. See `.env/.env.example`.
