# Frontend Review Checklist

Use this checklist for every PR that touches frontend code or page docs.

## Product And Docs

- [ ] Matching page spec exists under `docs/product/pages/`.
- [ ] Page implementation matches `Route`, `Purpose`, blocks, states, and acceptance criteria.
- [ ] Any code change that affects behavior, UX, navigation, data contracts,
      architecture, design, or review rules updates the matching source-of-truth docs.
- [ ] `docs/product/page-inventory.md` status and route data are current.
- [ ] Shared UX changes are reflected in `docs/product/page-patterns.md`.
- [ ] Design changes are reflected in `docs/design-system/README.md`.

## Architecture

- [ ] No Apollo Client or alternate GraphQL runtime.
- [ ] React components do not fetch directly.
- [ ] React components do not build query variables, filters, sort payloads, links, labels, or business decisions.
- [ ] ViewModels own state, requests, actions, derived data, and ExplainerDescriptor.
- [ ] Derived values read by views are exposed as computed getters on ViewModels or Item ViewModels.
- [ ] Non-trivial API access is isolated in DataSources.
- [ ] DataSources own SDK calls, `ObservableRequest`, response extraction, pagination shape, abort/reset, and transport errors.
- [ ] Catalogs/repeated cards use List ViewModel and Item ViewModel boundaries when rows have formatting, links, actions, permissions, files, or computed labels.
- [ ] Route modules are thin.
- [ ] DI is used for services and page ViewModels.
- [ ] Shared/persisted state uses services or dedicated state ViewModels, not direct component storage calls.
- [ ] FSD dependencies respect `app -> pages -> widgets/features/entities -> shared`.
- [ ] Generated files changed only through codegen.
- [ ] Methods stay at one abstraction level; orchestration, variable building, response mapping, and display formatting are split.
- [ ] One non-trivial React component per file.
- [ ] Page-specific behavior has not been moved to `shared` before there are real cross-page consumers.

## UX

- [ ] Page renders all required functional blocks.
- [ ] Loading state is stable and does not blank usable content during refresh.
- [ ] Empty state explains the result and offers reset/back action.
- [ ] Error state is visitor-readable and avoids raw stack traces by default.
- [ ] Detail pages handle missing rows.
- [ ] Catalog filters/sorts update the visible JSON payload.
- [ ] Pagination exposes cursor/count where supported.
- [ ] Locale switch and fallback behaviour are correct where localized fields exist.

## Explainer Widget

- [ ] Required page families render the widget.
- [ ] GraphQL operation name and query are visible.
- [ ] Variables reflect active page state.
- [ ] Response sample comes from real request data.
- [ ] Cloud table/schema/row links are present where applicable.
- [ ] REST and MCP tabs are present only when equivalents exist.
- [ ] Subgraph attribution appears on federated pages.
- [ ] Widget is present in initial SSR markup as far as current data path supports.

## Design And Accessibility

- [ ] Phone, tablet, and desktop layouts match the design doc.
- [ ] No horizontal page scroll except inside code/JSON panels.
- [ ] Touch targets are at least `44px` on mobile.
- [ ] Focus states are visible.
- [ ] Tabs, accordions, sheets, and dialogs use correct ARIA patterns.
- [ ] Color is not the only state signal.
- [ ] `prefers-reduced-motion` is respected for non-essential animation.

## Verification

Run and paste/summarize results in PR notes:

```bash
npm run verify
```

`npm run verify` includes repo-local skill format validation through
`npm run skills:lint`.

If a command cannot run, document why and what risk remains.

## Author Self-Review Notes

Every implementation PR should include a short note answering:

- Which docs/specs changed?
- Did any code behavior change without docs changing? If yes, why is the
  existing source-of-truth doc still correct?
- Where does data fetching live?
- Which ViewModel owns page state and actions?
- Which Item ViewModels wrap repeated rows/cards?
- Which values are computed rather than duplicated as mutable state?
- Which responsive states were checked?
- Which commands passed?

## Reviewer Rubric

Reviewers should cite [`REVIEW.md`](../../REVIEW.md) or this checklist when
requesting changes. Prefer specific, local fixes over broad rewrites.
