# Regions Catalog

| Field | Value |
|---|---|
| Route | `/regions` |
| Status | Ready |
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
| Climate filter | Optional filter by `climate` enum once backend query supports it. |
| Region list | Cards with name, description, climate, and detail link. |
| Pagination | Load more when `pageInfo.hasNextPage` is available. |
| Explainer Widget | Required; shows `Regions` operation, variables, response sample, cloud links. |

## Primary Actions

| Action | Result |
|---|---|
| Change locale | Re-query with selected localized sub-fields or update selection according to query design. |
| Filter climate | Updates filter payload preview, then list result. |
| Load more | Fetches next cursor and updates widget variables. |
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
| Loaded | Filter change | JSON preview updates |
| Preview updated | Apply/debounce | Refreshing list |
| Loaded | Load more | Appended results |

## Data Contract

| Source | Fields |
|---|---|
| `data.regions` | `id`, `data.name.{locale}`, `data.description.{locale}`, `data.climate`, `createdAt`, `publishedAt`, `totalCount`, `pageInfo`. |

## Explainer Widget

- Summary: "Regions show how a nested localized JSON Schema becomes a typed GraphQL catalog with enum fields and total count."
- Surfaces: GraphQL required; REST/MCP once backend exposes equivalents.
- Variables: locale, climate filter, cursor, page size.
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

- [ ] Shows region name, description, and climate from GraphQL.
- [ ] Shows total count when available.
- [ ] Handles loading, loaded, empty, and error states.
- [ ] Explainer Widget shows query, variables, response sample, and cloud links.
- [ ] Layout passes phone/tablet/desktop audit.

## Open Questions

- Update the current `Regions.graphql` operation to request `pageInfo` and pass the `Demo_rpg_dataGetRegionsesInput` variable object.
- Climate filtering uses the generated `data` JSON filter rather than a dedicated top-level `climate` filter; confirm the exact JSON path payload during implementation.
