# Shared Page Patterns

These patterns define the default UX contract for pages. Per-page specs may add
requirements, but should not silently weaken these patterns.

## App Shell

- Persistent top navigation with brand link to `/`.
- Primary navigation exposes capability families, not every route.
- Footer chip appears on every page except full-screen error pages.
- Footer chip links to `/about` and shows subgraph composition in compact text.
- Global locale switcher is visible in the shell once localization is implemented.
- Shell must be SSR-rendered and usable before hydration.

## Catalog Page Pattern

Used by `/regions`, `/heroes`, `/items`, `/monsters`, `/quests`, `/parties`,
`/factions`, `/npcs`, `/locations`, `/classes`, `/abilities`, `/blog`, `/news`.

Functional blocks:

- page header with title, short purpose, capability chips;
- optional filter/sort panel;
- result summary with visible count and active filters;
- result grid or table;
- pagination / load-more control when supported by the API;
- Explainer Widget side panel or mobile accordion;
- empty state with reset action;
- service-aware error state.

Rules:

- Catalog cards link to detail pages when a detail route exists.
- Filtering UI must update a JSON payload preview before the request fires.
- Sorting controls must map to explicit `orderBy` JSON.
- Pagination must expose the active cursor in the Explainer Widget variables.
- Total count is shown when the GraphQL connection exposes `totalCount`.

## Detail Page Pattern

Used by entity detail routes.

Functional blocks:

- breadcrumb back to catalog;
- entity hero/header with name, type/category, and key badges;
- primary data panel;
- related entities panel for FKs and reverse joins;
- computed/formula panel when formulas exist;
- file preview panel when the entity owns files;
- Explainer Widget;
- not-found state for missing rows.

Rules:

- Every rendered field must come from the query or a documented derived display helper.
- FK fields link to the referenced row in the app when a route exists and to
  `cloud.revisium.io` from the Explainer Widget.
- Formula fields are labelled as computed output, not as hand-authored values.
- File previews show useful metadata when it helps explain Revisium file fields.

## Explainer Widget Pattern

The widget is required on every catalog, detail, search, branching, blog, and
news page. See [Explainer Widget](./explainer-widget.md) for the full contract.

Minimum descriptor per page:

- summary sentence;
- GraphQL operation name and query body;
- variables payload;
- response sample from the latest successful request;
- subgraphs in use;
- source links to cloud table/schema and row when relevant;
- REST and MCP equivalents when available;
- field attribution when more than one subgraph contributes to the rendered data.

## JSON Filter And Sort Panel

Used first on `/regions`, then expanded on `/items` and `/heroes`.

Functional blocks:

- form controls for human input;
- live JSON preview of `where`, `orderBy`, and pagination variables;
- apply/reset controls;
- validation messages for invalid ranges or unsupported filters;
- mobile bottom-sheet behaviour.

Rules:

- The JSON preview updates synchronously as the user edits fields.
- Requests are debounced or explicitly applied; avoid firing on every keystroke
  unless the backend cost is known to be acceptable.
- Empty result state must show the active filter payload and a reset action.
- The Explainer Widget variables panel must use the same payload as the filter panel.

## Locale Pattern

The app supports `en`, `ru`, and `zh` for Revisium `LocalizedString` content.

Rules:

- Locale selection is global.
- Switching locale re-issues queries with locale-specific field selection where
  the GraphQL schema requires explicit sub-fields.
- Missing active-locale content falls back to `en`.
- The UI must mark fallback content in the Explainer Widget.
- UI chrome translations live in frontend i18n, not in Revisium content rows.

## State Pattern

Every data page defines these states:

| State | Requirement |
|---|---|
| Initial SSR | Render meaningful shell, heading, and widget summary if possible. |
| Loading | Keep layout stable; do not blank the whole page during refresh. |
| Loaded | Render data, actions, and Explainer Widget response sample. |
| Empty | Explain no rows matched and provide a reset or back action. |
| Error | Name the failed service when possible; no raw stack trace by default. |
| Not found | Detail pages show a route-specific missing-row message. |

## Responsive Pattern

| Breakpoint | Layout |
|---|---|
| Phone `<= 480px` | Single column, widget accordion header above the fold, filters as bottom sheet, cards full-width. |
| Tablet `481px-1023px` | Two-column layout where content and widget are both visible. |
| Desktop `>= 1024px` | Content grid/table with sticky right-side widget up to `420px` wide. |

No horizontal page scroll is allowed. Code panels and JSON panels may scroll
inside their own containers.
