# Region Detail

| Field | Value |
|---|---|
| Route | `/regions/[id]` |
| Status | Blocked |
| Pattern | Federated detail |
| Primary capability | Revisium-owned fields plus backend-owned fields on one GraphQL entity |

## Purpose

Demonstrate Apollo Federation by rendering Revisium data fields and backend
enrichment fields on the same region detail page.

## Context And Entry

- Entry from `/regions` cards.
- Links back to `/regions`.
- Links to related heroes, locations, factions, or monsters if reverse relations are available.

## Functional Blocks

| Block | Requirement |
|---|---|
| Breadcrumb | Back to regions catalog. |
| Region header | Name, climate, description, source chips. |
| Backend stats | Likes, view count, comments or equivalent backend-owned fields. |
| Related data | Optional related locations/heroes once query supports them. |
| Federation explanation | Visible field attribution chips on rendered fields. |
| Explainer Widget | Required with federation disclosure and SDL excerpt. |

## Primary Actions

| Action | Result |
|---|---|
| Back to catalog | Navigate to `/regions`. |
| Open cloud row | Opens the region row in `demo-rpg-data`. |
| View federation source | Opens backend source/SDL link. |

## States

| State | Requirement |
|---|---|
| Loading | Stable detail skeleton. |
| Loaded | Shows data and backend fields with chips. |
| Not found | Region id does not exist; link back to catalog. |
| Partial backend error | Revisium fields remain visible; backend block shows unavailable state if GraphQL supports partial data. |
| Error | Visitor-readable error. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Catalog | Card click | Detail loading |
| Detail loaded | Back click | Catalog |

## Data Contract

| Source | Fields |
|---|---|
| `data.regions` | `id`, `data.name`, `data.description`, `data.climate`. |
| `backend.RegionsNode` | `likes`, `viewCount`, `comments` or approved equivalents. |

## Explainer Widget

- Summary: "This page shows one federated GraphQL entity with fields owned by Revisium and the backend."
- Surfaces: GraphQL required; REST/MCP if equivalents exist.
- Variables: region id and locale.
- Field attribution: `name`, `description`, `climate` -> `data`; stats/comments -> `backend`.
- Federation: SDL excerpt for backend `extend type RegionsNode`.
- Deep links: cloud region row, schema, backend federation source.
- Subgraphs: `data`, `backend`.

## Responsive Rules

- Phone: stats stack below header; widget accordion remains above long related lists.
- Tablet/Desktop: detail content left and widget right; backend stats visible above fold.

## Architecture Notes

- Blocked until backend enrichment fields are present in the composed schema.
- ViewModel must handle route id, locale, partial data, and not-found.

## Acceptance Criteria

- [ ] Renders at least one Revisium-owned and one backend-owned field in the same GraphQL result.
- [ ] Field ownership is visible in the page UI and widget.
- [ ] Widget shows federation SDL excerpt and source link.
- [ ] Not-found and partial backend failure are handled.

## Open Questions

- Confirm exact backend fields: `likes`, `viewCount`, `comments`, or alternatives.
- Confirm backend source link target for SDL excerpt.
