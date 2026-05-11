# AGENTS.md — demo-rpg-frontend

Operational notes for AI coding agents working in this repo. See `README.md`
for the human-facing overview.

## Ground rules

- **Do not introduce Apollo Client.** This repo uses `graphql-request` 7 +
  the codegen'd typed SDK. If you need a hook-style API, write a MobX
  ViewModel around `ObservableRequest`, not a new client.
- **FSD boundaries are enforced.** `npm run fsd:check` must pass. Slices
  may only depend on lower layers (`app → pages → widgets → entities →
  shared`). If Steiger flags a cross-import, refactor — do not silence.
- **MVVM for stateful pages.** New pages get `model/<Page>ViewModel.ts`
  (DI-registered `transient`) + `ui/<Page>Page.tsx` (`observer`). Views
  do not call `graphql-request` directly.
- **No service singletons outside DI.** Long-lived services
  (`ApiService`, `EnvironmentService`) register themselves in the
  container at module load. Page ViewModels resolve them via
  `container.get(...)`.
- **Generated code is not edited.** Anything under `src/__generated__/`
  is rewritten by `npm run gql:codegen`. Add new `*.graphql` documents
  under `src/pages/<Page>/api/` and rerun codegen.

## Adding a page

1. `src/pages/<Page>/api/<Page>.graphql` — query/mutation
2. `npm run gql:codegen` — regenerates `Sdk` with the new operation
3. `src/pages/<Page>/model/<Page>ViewModel.ts` — MobX class implementing
   `IViewModel`; register `transient`
4. `src/pages/<Page>/ui/<Page>Page.tsx` — `observer` view, uses
   `useViewModel(<Page>ViewModel)`
5. `src/pages/<Page>/index.ts` — barrel re-exports the page component
6. `src/app/routes/<page>.tsx` — thin RR v7 route module rendering the
   page
7. `src/routes.ts` — register the route

## Quality gates

Run before opening a PR:

```bash
npm run ts:check
npm run lint:ci
npm run fsd:check
npm run build
```

CI mirrors these. The `vite-plugin-checker` plugin also surfaces tsc
errors during `npm run dev`.

## Env layout

`.env/.env` (committed defaults), `.env/.env.<mode>` (per-mode,
committed), `.env/.env.<mode>.local` (uncommitted overrides). Only
`REACT_APP_*` reaches the client bundle.

## Related repos

- `../demo-rpg-backend` — NestJS subgraph (regions, federation entrypoint)
- `../demo-rpg-docs` — public DevRel docs
- `../../infrastructure` — Argo CD apps and Helm charts for the dev stand
