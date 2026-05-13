# Frontend Review Checklist

Use this checklist for every PR that touches frontend code or page docs.

## Product And Docs

- [ ] Matching page spec exists under `docs/product/pages/`.
- [ ] Page implementation matches `Route`, `Purpose`, blocks, states, and acceptance criteria.
- [ ] `docs/product/page-inventory.md` status and route data are current.
- [ ] Shared UX changes are reflected in `docs/product/page-patterns.md`.
- [ ] Design changes are reflected in `docs/design-system/README.md`.

## Architecture

- [ ] No Apollo Client or alternate GraphQL runtime.
- [ ] React components do not fetch directly.
- [ ] ViewModels own state, requests, actions, derived data, and ExplainerDescriptor.
- [ ] Route modules are thin.
- [ ] DI is used for services and page ViewModels.
- [ ] FSD dependencies respect `app -> pages -> widgets/features/entities -> shared`.
- [ ] Generated files changed only through codegen.

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
npm run ts:check
npm run lint:ci
npm run fsd:check
npm run build
```

If a command cannot run, document why and what risk remains.
