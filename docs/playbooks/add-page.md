# Playbook: Add Or Change A Page

Use this workflow for every route-level change.

## 1. Start With Docs

1. Open `docs/product/page-inventory.md`.
2. Open the matching `docs/product/pages/<page>/README.md`.
3. Confirm the page status is `Ready` or update the spec until it is implementable.
4. Check `docs/product/page-patterns.md` for the page family.
5. Check `docs/design-system/README.md` for layout and component rules.

Do not start coding from an underspecified page.

## 2. Define The Operation

1. Add or update `src/pages/<Page>/api/<Page>.graphql`.
2. Include only fields the UI and Explainer Widget need.
3. Add variables for filters, sort, cursor, locale, row id, or revision where needed.
4. For non-trivial pages, add `src/pages/<Page>/api/<Page>DataSource.ts`.
   The DataSource owns SDK calls, `ObservableRequest`, response extraction,
   pagination shape, abort/reset, and transport-level error mapping.
5. Run:

```bash
npm run gql:codegen
```

Generated files must be produced by the command, not edited manually.

## 3. Build The ViewModel

1. Create `src/pages/<Page>/model/<Page>ViewModel.ts`.
2. Resolve DataSources and services from DI.
3. Own page state: filters, sort, cursor, locale, active tab, selected row, etc.
4. Add computed booleans for implemented states such as `showLoading`,
   `showEmpty`, `showError`, `showList`, and `canLoadMore`. Bootstrap pages may
   expose raw request state briefly, but a page should use computed state
   getters before it is marked `Done`.
5. Add computed data for rendering instead of duplicating mutable state.
6. Add computed `explainer` descriptor.
7. Keep public actions at one abstraction level. Split low-level mapping,
   URL building, variable building, and item construction into private helpers.
8. Register the ViewModel as `transient`.

For catalog pages or repeated cards/rows:

1. Create `src/pages/<Page>/model/<Entity>ItemViewModel.ts`.
2. Wrap each row in an Item ViewModel when the item has display labels, links,
   badges, actions, permissions, or formatting.
3. Cache item ViewModels by stable row id if the list refreshes without
   replacing the whole page.

## 4. Build The View

1. Create `src/pages/<Page>/ui/<Page>Page.tsx`.
2. Wrap the component with `observer`.
3. Use `useViewModel(<Page>ViewModel, params...)`.
4. Render semantic landmarks and headings.
5. Render all states from the page spec.
6. Compose shared widgets instead of duplicating patterns.
7. Keep event handlers as thin calls into the ViewModel.
8. Keep business logic, query variables, sorting, filtering, link building,
   labels, and formatting out of JSX.
9. Use one non-trivial React component per file. Split list, item, empty,
   error, header, filter, and widget-adapter components when they grow.

## 5. Wire The Route

1. Export from `src/pages/<Page>/index.ts`.
2. Add a thin route module under `src/app/routes/`.
3. Register it in `src/routes.ts`.
4. Add navigation only if the page spec requires it.

## 6. Verify

Run:

```bash
npm run verify
```

For visual work, run the dev server and inspect:

- phone `<= 480px`;
- tablet `481px-1023px`;
- desktop `>= 1024px`;
- loading, error, empty, and loaded states;
- keyboard navigation.

## 7. Update Docs

Before handoff:

- set the page status to `In delivery` or `Done`;
- update `docs/product/page-inventory.md` if route/data/status changed;
- add new shared behaviour to `docs/product/page-patterns.md`;
- update architecture or design docs if implementation establishes a new rule.

## 8. Self-Review

Before handoff, check the implementation against [`REVIEW.md`](../../REVIEW.md)
and [`docs/review/frontend-checklist.md`](../review/frontend-checklist.md).

The PR notes must say:

- where data fetching lives;
- which ViewModel owns state and actions;
- whether repeated rows/cards have Item ViewModels;
- which derived values are computed;
- which docs changed;
- which quality commands passed.
