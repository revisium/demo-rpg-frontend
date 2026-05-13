# Items Catalog

| Field | Value |
|---|---|
| Route | `/items` |
| Status | Draft |
| Pattern | Complex catalog |
| Primary capability | Complex `where`, multi-field `orderBy`, pagination, SVG icon files |

## Purpose

Demonstrate the strongest catalog pattern: rich filters, visible JSON payload,
multi-key sorting, cursor pagination, and file icons.

## Context And Entry

- Linked from home capability map, nav, hero detail inventory, quest rewards, and monster drops.
- Cards link to `/items/[id]`.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Title, capability chips for filters, sorting, files, formulas. |
| Filter/sort panel | Name contains, rarity enum, type FK, market value range, multi-key sort. |
| JSON payload preview | Live `where`, `orderBy`, cursor, page size. |
| Item results | Icon, name, type, rarity, market value, short description. |
| Pagination | Cursor-based load more. |
| Explainer Widget | Required; mirrors filter payload and response. |

## Primary Actions

| Action | Result |
|---|---|
| Edit filter | JSON preview updates immediately. |
| Apply filter | Fetches filtered items. |
| Reset filters | Clears payload and re-fetches default list. |
| Sort | Updates multi-key order array. |
| Load more | Fetches next page. |
| Open item | Navigate to detail. |

## States

| State | Requirement |
|---|---|
| Loading | Preserve filter panel and show result skeletons. |
| Loaded | Cards/table with icons and formula values. |
| Empty | Show active JSON filter and reset action. |
| Error | Show failed request with retry and widget error sample. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Loaded catalog | Edit filters | Payload preview updated |
| Payload preview | Apply/debounce | Refreshing catalog |
| Loaded catalog | Open item | `/items/[id]` |
| Empty | Reset filters | Default catalog |

## Data Contract

| Source | Fields |
|---|---|
| `data.items` | `id`, `data.name`, `data.rarity`, `data.type_id`, `data.icon`, `market_value`, `rarity_tag`, pagination fields. |
| `data.item_types` | id/name for filter dropdown and display. |
| `data.stats` | stats labels if modifiers are previewed. |

## Explainer Widget

- Summary: "Items show Revisium query payloads for complex filters, multi-key sorting, cursor pagination, formulas, and SVG file fields."
- Surfaces: GraphQL and REST when available.
- Variables: `where`, `orderBy`, cursor, locale.
- Response sample: visible item rows.
- Deep links: items table/schema and selected row where applicable.
- Subgraphs: `data`.

## Responsive Rules

- Phone: filter panel as bottom sheet; result cards one column; JSON preview scrolls internally.
- Tablet/Desktop: filters left or top, results center, widget right.

## Architecture Notes

- This page should establish reusable filter/sort model helpers if duplication appears.
- Keep JSON payload construction in ViewModel.

## Acceptance Criteria

- [ ] Filter form and JSON preview stay in sync.
- [ ] Multi-key `orderBy` is visible and used by the request.
- [ ] Item SVG icons render with stable dimensions.
- [ ] Empty state includes reset.

## Open Questions

- Confirm exact generated GraphQL input names for `where` and `orderBy`.
- Confirm whether item type FK can be nested in the same list query.
