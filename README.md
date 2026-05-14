# demo-rpg-frontend

**Branching Tales** — the public web front-end for the Revisium demo RPG.

SSR React app talking to the federated GraphQL router. In production
the router is co-located at `/graphql` under the app's own hostname
(so the browser only ever makes same-origin calls). Locally the browser also
uses `/graphql`; Vite proxies that path to
`https://demo-rpg.dev.revisium.io/graphql`, which is also the default schema
source for `npm run gql:codegen`.

## Stack

| Concern        | Choice                                                 |
| -------------- | ------------------------------------------------------ |
| Framework      | React Router v7 (SSR mode)                             |
| UI runtime     | React 19                                               |
| State          | MobX 6 + mobx-react-lite (MVVM)                        |
| UI components  | Chakra UI 3                                            |
| GraphQL client | `graphql-request` 7                                    |
| Codegen        | `@graphql-codegen/cli` + `typescript-graphql-request`  |
| Bundler        | Vite 7 (`vite-plugin-checker`, `vite-plugin-svgr`)     |
| Linters        | ESLint 9 (flat), Prettier 3, Steiger (FSD), `tsc`      |
| Layout         | Feature-Sliced Design (`app/`, `pages/`, `shared/`, …) |

## Frontend Docs

Frontend implementation is docs-first. Before changing routes, page UX,
layout, shared UI patterns, or review rules, update the matching document under
[`docs/`](./docs/README.md).

Start here:

- [`docs/product/page-inventory.md`](./docs/product/page-inventory.md) — route list and status.
- [`docs/product/project-brief.md`](./docs/product/project-brief.md) — business context and scope.
- [`docs/product/site-map.md`](./docs/product/site-map.md) — page map and transitions.
- [`docs/product/feature-map.md`](./docs/product/feature-map.md) — feature-to-route coverage.
- [`docs/product/pages/`](./docs/product/pages/README.md) — per-page implementation contracts.
- [`docs/design-system/README.md`](./docs/design-system/README.md) — layout, tokens, and accessibility.
- [`docs/design-system/art-direction.md`](./docs/design-system/art-direction.md) — world, style, and image prompts.
- [`docs/architecture/frontend.md`](./docs/architecture/frontend.md) — MVVM, FSD, DI, SSR, codegen.
- [`docs/playbooks/add-page.md`](./docs/playbooks/add-page.md) — page implementation workflow.
- [`docs/handoff/README.md`](./docs/handoff/README.md) — developer handoff reading order.
- [`docs/handoff/bootstrap-new-frontend-project.md`](./docs/handoff/bootstrap-new-frontend-project.md) — prompt for reusing this setup in another frontend.
- [`REVIEW.md`](./REVIEW.md) — review-bot and human reviewer entry point.
- [`docs/review/frontend-checklist.md`](./docs/review/frontend-checklist.md) — PR review gate.
- [`.coderabbit.yaml`](./.coderabbit.yaml) and [`cubic.yaml`](./cubic.yaml) — AI review bot configuration.
- [`.agents`](./.agents/README.md) — repo-local agent review workflows and rules.

## Local Development

Use Node from [`.nvmrc`](./.nvmrc), install dependencies, verify the baseline,
then start the dev server:

```bash
nvm use                       # node 24
npm install
npm run verify                # markdown:lint, skills:lint, ui:lint, ts:check, lint:ci, fsd:check, build
npm run dev                   # react-router dev
```

The dev server uses the env files under [`.env/`](./.env). For local overrides,
create `.env/.env.local` or `.env/.env.<mode>.local`; these files are ignored by
git.

Fresh clones should work without a local env file: `REACT_APP_GRAPHQL_SERVER_URL`
is `/graphql` in development, and `GRAPHQL_PROXY_TARGET` points the Vite dev
proxy at `https://demo-rpg.dev.revisium.io/graphql`. If the dev stand moves,
update `GRAPHQL_PROXY_TARGET`; keep the browser URL same-origin.

## Common Commands

```bash
npm run gql:codegen:download  # writes src/__generated__/schema.graphql
npm run gql:codegen           # writes src/__generated__/graphql-request.ts
npm run build && npm start    # production SSR

npm run verify                # full local PR gate
npm run markdown:lint
npm run skills:lint
npm run ui:lint
npm run ts:check
npm run lint:ci
npm run fsd:check
npm run build
```

`fsd:check` enables Chokidar polling inside the npm script because Steiger can
hit `EMFILE` watcher limits under Node 24 in local and containerized runs. The
check is short-lived, so the polling overhead is bounded to this command.

## Agent Automation

Repo-local agent workflows live in [`.agents`](./.agents/README.md):

- `frontend-general-checks` — run baseline verification and report evidence.
- `frontend-self-review` — review docs/source-of-truth, architecture, UX, and
  verification before handoff or PR update.
- `frontend-pr-review-iteration` — fetch review threads and PR checks, triage,
  fix, reply, and resolve only after verification.
- `frontend-pr-publish` — create or reuse a conventional branch from fresh
  `master`, verify, commit, push, and create a PR with an empty description.

These workflows are helpers only. The canonical sources remain
[`docs/`](./docs/README.md) and [`REVIEW.md`](./REVIEW.md).

## Layout (FSD)

```text
src/
  app/routes/         # react-router v7 route modules (thin shells)
  pages/<Page>/       # page-level MVVM bundle
    api/*.graphql     # GraphQL documents — codegen source of truth
    model/*ViewModel  # MobX store, DI-registered as transient
    ui/*Page/*Page.tsx # observer view, consumes ViewModel via useViewModel
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
  setup(...args): void | Promise<void>; // sync, runs on SSR and client
  mount(...args): void | Promise<void>; // client only (useEffect)
  unmount(): void; // client cleanup
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
SSR bundle in a Node 24 Alpine builder, then ships a minimal runtime
stage that installs only production deps and serves `build/server/index.js`
with `react-router-serve` on port `8080`.

## CI / CD

Workflows live under `.github/workflows/`. `build.yml`, `deploy.yml`, and
`release-train.yml` delegate to reusable workflows in
`revisium/revisium-actions`; `ci.yml` runs locally on every PR.

- `ci.yml` — `npm run verify` on every PR
- `build.yml` — Docker image build + push to Docker Hub on `master` / tags
- `deploy.yml` — Kubernetes deploy on successful Build (or manual dispatch)
- `release-train.yml` — version bumps and tags

The Vite production build inlines `REACT_APP_*` from
`.env/.env.production`. Per-env images are built by overriding the
relevant env files before `npm run build` runs.
