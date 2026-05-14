# Region Detail

| Field | Value |
|---|---|
| Route | `/regions/[id]` |
| Status | In delivery |
| Pattern | Federated detail |
| Primary capability | Revisium-owned fields plus backend-owned fields on one GraphQL entity |

## Purpose

Demonstrate the region detail shell from Revisium-owned data first, then Apollo
Federation once backend enrichment fields are present in the composed schema.

## Context And Entry

- Entry from `/regions` cards.
- Links back to `/regions`.
- Links to related heroes, locations, factions, or monsters if reverse relations are available.

## Functional Blocks

| Block | Requirement |
|---|---|
| Breadcrumb | Prominent back button to regions catalog. |
| Region header | Name, climate, description, source chips, and generated climate landscape hero. |
| Backend stats | Shows an unavailable state until likes, view count, comments, or approved equivalents exist. |
| Related data | Optional related locations/heroes once query supports them. |
| Federation explanation | Visible field attribution chips on rendered fields. |
| Explainer Widget | Required with federation disclosure and SDL excerpt. |

## Primary Actions

| Action | Result |
|---|---|
| Back to catalog | Navigate to `/regions` from a visible back-arrow button. |
| Open cloud row | Opens the matching region row in `demo-rpg-data`. |
| View federation source | Opens backend source/SDL link once available. |

## States

| State | Requirement |
|---|---|
| Loading | Stable detail skeleton. |
| Loaded | Shows Revisium-owned data fields and the backend-unavailable block. |
| Not found | Region id does not exist or GraphQL returns an id error; link back to catalog. |
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
| `backend.RegionsNode` | Blocked until `likes`, `viewCount`, `comments` or approved equivalents appear in the composed schema. |

## Explainer Widget

- Summary: "This page shows a Revisium-owned region detail and where backend-owned federation fields will attach."
- Surfaces: GraphQL required; REST/MCP if equivalents exist.
- Variables: GraphQL region id; locale remains visible through rendered field
  state and fallback notes.
- Field attribution: `name`, `description`, `climate` -> `data`; stats/comments -> `backend` once available.
- Federation: unavailable note until backend `extend type RegionsNode` is present.
- Deep links: matching cloud region row.
- Subgraphs: `data`; add `backend` once backend fields are present.

## Responsive Rules

- Phone: stats stack below header; widget accordion remains above long related lists.
- Tablet/Desktop: detail content left and widget right; backend stats visible above fold.
- Generated climate landscape hero adds orientation, but the climate text badge remains
  the source of meaning.

## Architecture Notes

- Backend enrichment remains blocked until fields are present in the composed schema.
- ViewModel must handle route id, locale, missing row errors, and backend-unavailable state.

## Acceptance Criteria

- [x] Renders Revisium-owned region fields from GraphQL.
- [x] Field ownership is visible in the page UI and widget for data-owned fields.
- [x] Backend-unavailable state is visible while federation fields are absent.
- [ ] Renders at least one backend-owned field in the same GraphQL result.
- [ ] Widget shows federation SDL excerpt and source link.
- [ ] Partial backend failure is handled once GraphQL exposes partial backend fields.

## Open Questions

- Confirm exact backend fields: `likes`, `viewCount`, `comments`, or alternatives.
- Confirm backend source link target for SDL excerpt.
