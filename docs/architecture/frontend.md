# Frontend Architecture

This repo uses React Router v7 SSR, MobX MVVM, `graphql-request`, GraphQL
codegen, and Feature-Sliced Design.

## Hard Rules

- Do not add Apollo Client.
- Do not call `graphql-request` directly from React components.
- Do not create service singletons outside DI.
- Do not edit generated files under `src/__generated__/`.
- Do not silence Steiger boundary errors.
- Do not move page-specific behaviour into `shared`.
- Do not ship a page without a matching page spec.

## FSD Layers

```text
src/
  app/       route modules, app-level providers, shell wiring
  pages/     route-level page slices
  widgets/   reusable cross-page UI, e.g. ExplainerWidget
  features/  reusable user actions when they emerge
  entities/  domain entity UI/model helpers when reuse is real
  shared/    DI, request primitives, services, config, low-level UI
```

Dependency direction is top-down only:

`app -> pages -> widgets/features/entities -> shared`

## Page Slice Contract

Each page slice follows this shape:

```text
src/pages/<Page>/
  api/<Page>.graphql
  model/<Page>ViewModel.ts
  ui/<Page>Page.tsx
  index.ts
```

Route modules under `src/app/routes/*.tsx` are thin shells that render the page.
Route modules should not contain business logic, request logic, or formatting
logic.

## MVVM Contract

ViewModels own:

- request lifecycle;
- route params converted into state;
- filters, sort, cursor, locale-dependent query variables;
- derived display data;
- page actions;
- ExplainerDescriptor construction;
- cleanup.

Views own:

- semantic markup;
- rendering observable state;
- forwarding user events to the ViewModel;
- layout composition;
- accessible labels and landmarks.

React components do not own business state with `useState` or fetch data with
`useEffect` directly. The `useViewModel` hook drives setup/mount/unmount.

## Data Fetching

- GraphQL documents live in `src/pages/<Page>/api/*.graphql`.
- Run `npm run gql:codegen` after adding or changing operations.
- Use the generated SDK from `ApiService`.
- Wrap page requests with `ObservableRequest` or an equivalent MobX-owned request model.
- Abort in-flight requests on unmount or route changes when supported.
- Keep previous successful data visible during refresh when possible.

## SSR Requirements

- Route content must render valid shell and headings during SSR.
- Data pages should be designed so their Explainer Widget text can be present in
  initial HTML once loader-backed SSR data is added.
- Avoid client-only layout decisions that change page structure after hydration.
- `isClient` checks are allowed only for browser APIs.

## Explainer Descriptor Ownership

Each page ViewModel exposes:

```ts
public get explainer(): ExplainerDescriptor
```

The descriptor is computed from current request state and page state. The
widget consumes it and renders. The widget never fetches, never reads route
params, and never reaches into DI.

## Error Handling

Map low-level errors into page states:

- Apollo Router unreachable;
- specific subgraph unavailable when detectable;
- schema/query mismatch;
- unsupported filter/sort combination.

Empty result sets and missing rows are normal page states, not transport or
request errors. Model them separately as `Empty` and `Not found`.

Raw error details may be available behind a disclosure, but the default page
state must be readable by a visitor.

## Testing Expectations

Minimum per implemented page:

- ViewModel unit coverage for variables, states, and descriptor construction
  when logic is non-trivial.
- Rendering coverage for loaded, loading, error, and empty states.
- Accessibility smoke checks for keyboard-reachable controls.
- Responsive manual screenshot/audit notes for phone, tablet, desktop until
  automated visual checks exist.

## Quality Commands

Run before PR handoff:

```bash
npm run ts:check
npm run lint:ci
npm run fsd:check
npm run build
```
