# AGENTS.md — demo-rpg-frontend

Operational notes for AI coding agents working in this repo. See `README.md`
for the human-facing overview.

## Ground rules

- **Docs first for page work.** `docs/` is the frontend implementation
  source of truth. Before changing a route, page, shared UI pattern,
  layout, or review rule, update the matching document first:
  `docs/product/pages/...`, `docs/product/page-patterns.md`,
  `docs/design-system/README.md`, or `docs/architecture/frontend.md`.
  Code that contradicts the docs is treated as a bug unless the same PR
  updates the docs and explains the change.
- **For handoff work, start at `docs/handoff/README.md`.** It links the
  product route specs, feature map, design system, art direction, architecture,
  playbooks, roadmap, and review checklist in the intended implementation order.
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

0. Read `docs/README.md`, the matching `docs/product/pages/<page>/README.md`,
   and `docs/playbooks/add-page.md`. If the page spec is missing or stale,
   update the spec before writing code.
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
