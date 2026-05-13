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
- **For review work, start at [`REVIEW.md`](./REVIEW.md).** It is the short
  contract for human reviewers, review bots, and AI agents. The detailed
  checklist lives in [`docs/review/frontend-checklist.md`](./docs/review/frontend-checklist.md).
- **Use repo-local review skills when available.**
  [`frontend-self-review`](./.agents/skills/frontend-self-review/SKILL.md)
  is the pre-handoff self-review workflow. [`frontend-general-checks`](./.agents/skills/frontend-general-checks/SKILL.md)
  is the baseline verification workflow. [`frontend-pr-review-iteration`](./.agents/skills/frontend-pr-review-iteration/SKILL.md)
  is the workflow for GitHub review threads. These skills do not create a new
  source of truth; they enforce `docs/`, `REVIEW.md`, `.coderabbit.yaml`, and
  `cubic.yaml`.
- **Do not introduce Apollo Client.** This repo uses `graphql-request` 7 +
  the codegen'd typed SDK. If you need a hook-style API, write a MobX
  ViewModel around `ObservableRequest`, not a new client.
- **FSD boundaries are enforced.** `npm run fsd:check` must pass. Slices
  may only depend on lower layers: `app -> pages -> widgets/features/entities -> shared`.
  If Steiger flags a cross-import, refactor — do not silence.
- **MVVM for stateful pages.** New pages get `model/<Page>ViewModel.ts`
  (DI-registered `transient`) + `ui/<Page>Page.tsx` (`observer`). Views
  do not call `graphql-request` directly.
- **Keep React thin.** Components render observable model state and forward
  events to ViewModel actions. Business logic, query variables, sorting,
  filtering, links, labels, and ExplainerDescriptor construction belong in
  ViewModels or Item ViewModels.
- **Use DataSource/List/Item boundaries for real pages.** Non-trivial pages
  should isolate API access in `api/*DataSource.ts`, page/list state in
  `model/*ViewModel.ts`, and row/card display state in `model/*ItemViewModel.ts`.
  The current `/regions` bootstrap is intentionally minimal and should be
  refactored into this shape before it is marked `Done`.
- **No service singletons outside DI.** Long-lived services
  (`ApiService`, `EnvironmentService`) register themselves in the
  container at module load. Page ViewModels resolve them via
  `container.get(...)`.
- **Generated code is not edited.** Anything under `src/__generated__/`
  is rewritten by `npm run gql:codegen`. Add new `*.graphql` documents
  under `src/pages/<Page>/api/` and rerun codegen.
- **One non-trivial React component per file.** Split reusable or stateful
  subcomponents into their own files. Tiny private render helpers are allowed
  only when they have no hooks, no model ownership, and no reuse value.

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
npm run verify
```

`npm run verify` runs `ts:check`, `lint:ci`, `fsd:check`, and `build`. CI
mirrors these. The `vite-plugin-checker` plugin also surfaces tsc errors during
`npm run dev`.

Before handoff or PR update, run the repo-local
[`frontend-general-checks`](./.agents/skills/frontend-general-checks/SKILL.md)
and [`frontend-self-review`](./.agents/skills/frontend-self-review/SKILL.md)
workflows and include the result in the response, PR description, or PR comment.

## Reusing this setup elsewhere

For a new frontend repo, use
[`docs/handoff/bootstrap-new-frontend-project.md`](./docs/handoff/bootstrap-new-frontend-project.md)
as the one-prompt bootstrap guide.

## Env layout

`.env/.env` (committed defaults), `.env/.env.<mode>` (per-mode,
committed), `.env/.env.<mode>.local` (uncommitted overrides). Only
`REACT_APP_*` reaches the client bundle.

## Related repos

- `../demo-rpg-backend` — NestJS subgraph (regions, federation entrypoint)
- `../demo-rpg-docs` — public DevRel docs
- `../../infrastructure` — Argo CD apps and Helm charts for the dev stand
