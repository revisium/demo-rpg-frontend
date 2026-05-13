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
4. Run:

```bash
npm run gql:codegen
```

Generated files must be produced by the command, not edited manually.

## 3. Build The ViewModel

1. Create `src/pages/<Page>/model/<Page>ViewModel.ts`.
2. Resolve services from DI.
3. Own request lifecycle through `ObservableRequest` or a page-specific request model.
4. Add observable page state: filters, sort, cursor, locale, active tab, etc.
5. Add computed data for rendering.
6. Add computed `explainer` descriptor.
7. Register the ViewModel as `transient`.

## 4. Build The View

1. Create `src/pages/<Page>/ui/<Page>Page.tsx`.
2. Wrap the component with `observer`.
3. Use `useViewModel(<Page>ViewModel, params...)`.
4. Render semantic landmarks and headings.
5. Render all states from the page spec.
6. Compose shared widgets instead of duplicating patterns.
7. Keep event handlers as thin calls into the ViewModel.

## 5. Wire The Route

1. Export from `src/pages/<Page>/index.ts`.
2. Add a thin route module under `src/app/routes/`.
3. Register it in `src/routes.ts`.
4. Add navigation only if the page spec requires it.

## 6. Verify

Run:

```bash
npm run ts:check
npm run lint:ci
npm run fsd:check
npm run build
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
