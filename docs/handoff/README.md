# Frontend Developer Handoff

This is the starting point for a frontend developer or coding agent taking over
`demo-rpg-frontend`.

Do not point the developer only at `AGENTS.md`. `AGENTS.md` is the boot file.
The actual work package is this docs tree.

## First Reading Pass

Read in this order:

1. [`AGENTS.md`](../../AGENTS.md) for hard repo rules.
2. [`docs/README.md`](../README.md) for the docs-first contract.
3. [`docs/product/project-brief.md`](../product/project-brief.md) for business context.
4. [`docs/product/page-inventory.md`](../product/page-inventory.md) for all routes and statuses.
5. [`docs/product/site-map.md`](../product/site-map.md) for page transitions and navigation.
6. [`docs/product/feature-map.md`](../product/feature-map.md) for which capability is shown where.
7. [`docs/product/page-patterns.md`](../product/page-patterns.md) for shared UX behaviour.
8. [`docs/design-system/README.md`](../design-system/README.md) for layout and components.
9. [`docs/design-system/art-direction.md`](../design-system/art-direction.md) for world/style/image generation prompts.
10. [`docs/architecture/frontend.md`](../architecture/frontend.md) for FSD/MVVM/codegen rules.
11. [`docs/roadmap/frontend-pages.md`](../roadmap/frontend-pages.md) for implementation order.
12. [`docs/review/frontend-checklist.md`](../review/frontend-checklist.md) for PR exit criteria.

## What To Do First

1. Confirm local setup:

```bash
nvm use
npm install
npm run ts:check
npm run lint:ci
npm run fsd:check
npm run build
```

2. Open [`docs/roadmap/frontend-pages.md`](../roadmap/frontend-pages.md).
3. Start with Milestone 1 unless the product owner assigns a different route.
4. For the selected page, open its spec under [`docs/product/pages/`](../product/pages/README.md).
5. If the spec is not ready, update the spec before changing code.
6. Implement using [`docs/playbooks/add-page.md`](../playbooks/add-page.md).
7. Review with [`docs/review/frontend-checklist.md`](../review/frontend-checklist.md).

## Recommended First Implementation Task

Build `/regions` into the reference catalog:

- app shell basics;
- catalog layout;
- loaded/loading/error/empty states;
- `totalCount`;
- locale-ready data selection;
- Explainer Widget v1;
- cloud table/schema links;
- responsive phone/tablet/desktop layout.

This creates reusable patterns for the rest of the route set.

## Required Handoff Output Per Page

For each page delivered, the developer should provide:

- changed files summary;
- page spec status update;
- screenshot or manual audit note for phone/tablet/desktop;
- command results for `ts:check`, `lint:ci`, `fsd:check`, `build`;
- remaining blockers or open questions.

## Communication Contract

When a spec conflicts with live schema/code:

1. Stop and identify the mismatch.
2. Update the page spec or architecture/design doc.
3. Then update code.
4. Note the mismatch in PR notes.

Do not silently adapt code away from the docs.
