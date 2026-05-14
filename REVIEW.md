# Frontend Review Contract

This file is the review entry point for human reviewers, CodeRabbit, Cubic, and
AI coding agents. Treat it as the short review source of truth and follow links
for detail.

Canonical review expectations start here. If an enforceable review rule changes,
update `.coderabbit.yaml`, `cubic.yaml`, and repo-local `.agents` rules in the
same PR.

## Required Reading

Before reviewing a PR that touches frontend code or page docs, read:

1. [`docs/review/frontend-checklist.md`](./docs/review/frontend-checklist.md)
2. [`docs/architecture/frontend.md`](./docs/architecture/frontend.md)
3. [`docs/product/page-patterns.md`](./docs/product/page-patterns.md)
4. The affected page spec under [`docs/product/pages/`](./docs/product/pages/README.md)
5. [`docs/design-system/README.md`](./docs/design-system/README.md) for UI changes

## Bot Configuration

The repo contains explicit AI-review configuration:

- [`.coderabbit.yaml`](./.coderabbit.yaml) configures CodeRabbit review
  profile, path instructions, code guideline files, and a frontend architecture
  pre-merge warning.
- [`cubic.yaml`](./cubic.yaml) configures Cubic review sensitivity, custom
  instructions, and custom rules for thin React views, MVVM/DataSource
  ownership, List/Item ViewModel boundaries, and docs-first changes.

Keep these files aligned with this review contract whenever architecture or
review expectations change.

## Docs Source Of Truth

`docs/` is the frontend implementation source of truth. A PR is incomplete when
code changes user-visible behavior, route structure, page composition, data
contracts, copy, navigation, responsive behavior, accessibility expectations,
architecture, design language, or review rules without updating the matching
canonical docs in the same change.

Reviewers should block drift in either direction:

- If implementation diverges from the docs, require a code fix or a docs update.
- If the docs become stale or less specific, require the docs to be restored
  before implementation continues.
- If review expectations change, keep `REVIEW.md`, `.coderabbit.yaml`,
  `cubic.yaml`, and repo-local `.agents` rules aligned.

## Review Priorities

Block a PR when any of these are true:

- Code contradicts the page spec, design system, architecture doc, or this file.
- A code change affects behavior, UX, navigation, data contracts, architecture,
  design, or review policy without updating the matching source-of-truth docs.
- React components fetch data, build query payloads, own business state, or
  contain business decisions that belong in a ViewModel.
- A ViewModel mixes unrelated abstraction levels in the same method, for
  example request orchestration, GraphQL response parsing, URL building, and JSX
  display decisions in one block.
- Derived display state is recomputed imperatively instead of exposed as MobX
  computed getters where the value is read by the view.
- API access for a non-trivial page bypasses a DataSource and talks directly to
  low-level clients from a component or large page ViewModel method. Small
  bootstrap pages may call `ApiService` directly while their spec is not `Done`,
  but the page must move API access into a DataSource before it is marked `Done`.
- List/card/detail rendering does not use explicit List ViewModel and Item
  ViewModel boundaries when rows need links, formatting, permissions, or actions.
- Shared or persisted state is implemented with ad hoc module variables or
  direct browser storage calls in React components instead of DI services or
  dedicated state ViewModels.
- A file exports multiple non-trivial React components. Use one component per
  file, with small private render helpers only when they have no hooks, no
  state, and no reuse value.
- A non-test component file under `src/**/ui/` is not placed in a same-named
  folder, or a component folder contains a barrel file such as `index.ts`.
  Example: `ui/RegionCard/RegionCard.tsx` is valid; `ui/RegionCard.tsx` and
  `ui/RegionCard/index.ts` are invalid.
- Generated files under `src/__generated__/` are hand-edited.
- Steiger, TypeScript, lint, skills:lint, or build failures are ignored.
- Failed or pending required GitHub Actions, Sonar, or quality-gate checks are
  ignored during PR update or review-thread cleanup.

## Architecture Rules To Enforce

- Keep FSD dependencies one-way: `app -> pages -> widgets/features/entities -> shared`.
- Route modules stay thin and only render page components or route wrappers.
- Page ViewModels own request lifecycle, filters, cursor, locale, state
  transitions, actions, derived values, and ExplainerDescriptor construction.
- DataSources own GraphQL SDK calls, request cancellation/reset, response extraction,
  pagination shape, and transport-level error mapping.
- Item ViewModels wrap individual rows and expose stable display getters, links,
  badges, labels, and item-level actions.
- React views are `observer` components that render model state and forward
  events to model actions.
- Services live in `src/shared/model` only when they are cross-page concerns:
  environment, API, router, permissions, files, storage, persisted UI state.
- Page-local behavior stays in the page slice. Do not move code to `shared`
  until at least two real consumers need it.
- Prefer small methods with one abstraction level. Public actions orchestrate;
  private helpers transform data, build variables, build item models, or map
  state, but not all at once.
- Favor computed getters for read models. Avoid keeping duplicate mutable state
  when it can be derived from request data, filters, route params, or services.

## Self-Review Expected From Authors

Every implementation PR should include:

- changed files summary;
- affected docs/spec updates;
- confirmation that the page spec still matches behavior;
- confirmation that docs and code did not drift, or a clear explanation of the
  docs updated to make the new behavior canonical;
- manual phone/tablet/desktop audit or screenshots for UI work;
- command results for:

```bash
npm run verify
```

If a check cannot run, the PR must explain why and name the remaining risk.

## Reviewer Output Format

Review comments should be concrete and actionable:

- cite the file and line;
- name the violated rule from this file or linked docs;
- explain the user-visible, maintainability, or architecture risk;
- propose the smallest fix that keeps the docs and code aligned.

Do not request broad rewrites when a local extraction or documentation update
would resolve the issue.
