# Regions Catalog

| Field | Value |
|---|---|
| Route | `/regions` |
| Status | In delivery |
| Pattern | Reference catalog |
| Primary capability | Nested JSON objects, localized strings, enum, totalCount, pagination |

## Purpose

Serve as the first complete catalog implementation and the reference pattern for
simple Revisium-generated list pages.

## Context And Entry

- Linked from home, app nav, and capability map.
- Region cards link to `/regions/[id]` once the detail route exists.
- The page is the first proof that Revisium JSON Schema becomes typed GraphQL.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Title, short explanation, chips for `data.regions`, enum, localized strings. |
| Result summary | Shows visible count and `totalCount`. |
| Climate filter | Client-side filter over the loaded connection until backend query input is fixed. |
| Region list | Cards with name, description, climate, and detail link. |
| Pagination | Shows connection `pageInfo`; load-more stays disabled while backend input is blocked. |
| Explainer Widget | Required; shows `Regions` operation, variables, response sample, cloud links. |

## Primary Actions

| Action | Result |
|---|---|
| Change locale | Re-query with selected localized sub-fields or update selection according to query design. |
| Filter climate | Updates filter payload preview and filters visible loaded rows client-side. |
| Load more | Fetches next cursor and updates widget variables once backend input works. |
| Open region | Navigate to `/regions/[id]`. |
| View in cloud | Opens `demo-rpg-data` regions table. |

## States

| State | Requirement |
|---|---|
| Loading | Show stable list skeleton and widget skeleton. |
| Loaded | Show cards, count, and widget response. |
| Empty | Show "No regions match this filter" plus reset. |
| Error | Name GraphQL/router failure where possible and keep retry action. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Loaded | Locale change | Refreshing with previous cards preserved |
| Loaded | Filter change | JSON preview updates and visible loaded rows are filtered |
| Preview updated | Apply/debounce | Refreshing list once backend input works |
| Loaded | Load more | Appended results once backend input works |

## Data Contract

| Source | Fields |
|---|---|
| `data.regions` | `id`, `data.name.{locale}`, `data.description.{locale}`, `data.climate`, `createdAt`, `publishedAt`, `totalCount`, `pageInfo`. |

## Explainer Widget

- Summary: "Regions show how a nested localized JSON Schema becomes a typed GraphQL catalog with enum fields and total count."
- Surfaces: GraphQL required; REST/MCP once backend exposes equivalents.
- Variables: locale, climate filter, cursor, page size; marks client-side filter mode while backend input is blocked.
- Response sample: current visible region edges plus `totalCount`.
- Deep links: regions table and schema in `demo-rpg-data`.
- Subgraphs: `data`.

## Responsive Rules

- Phone: widget accordion directly below header; cards single-column.
- Tablet: list left, widget right.
- Desktop: cards in dense grid/table; widget sticky right.

## Architecture Notes

- Existing slice `src/pages/Regions/` should evolve into this contract.
- ViewModel owns locale/filter/cursor and `explainer`.
- Route module stays thin.

## Acceptance Criteria

- [x] Shows region name, description, and climate from GraphQL.
- [x] Shows total count when available.
- [x] Handles loading, loaded, empty, and error states.
- [x] Explainer Widget shows query, variables, response sample, and cloud links.
- [x] Layout passes phone/tablet/desktop audit.
- [ ] Server-side pagination and climate filtering work after `regionses(data: ...)` is fixed upstream.

## Open Questions

- Update the current `Regions.graphql` operation to request `pageInfo` and pass the `Demo_rpg_dataGetRegionsesInput` variable object.
- Current implementation requests `pageInfo` and keeps the optional `data` variable in the operation, but does not pass `data` at runtime because the dev GraphQL endpoint returned a `data` subgraph 500 for `regionses(data: { first: 1 })` on May 13, 2026.
- Climate filtering is client-side over loaded rows until the connection input issue is resolved; server-side filtering should use the generated `data` JSON filter rather than a dedicated top-level `climate` filter.
