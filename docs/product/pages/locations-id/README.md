# Location Detail

| Field | Value |
|---|---|
| Route | `/locations/[id]` |
| Status | Draft |
| Pattern | Detail |
| Primary capability | Large map file and dimensions metadata |

## Purpose

Show a location detail with large image metadata and a region FK.

## Context And Entry

- Entry from `/locations`, region detail, NPC/quest pages, and search results.
- Links to the region row, related content, and the location cloud row.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Location name and region. |
| Map | Large map image with dimensions metadata. |
| Description | Localized description. |
| Related content | Optional quests/NPCs in this location. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Back to locations | Navigate to `/locations`. |
| Open region | Navigate to `/regions/[id]`. |
| Open cloud row | Open location row. |

## States

| State | Requirement |
|---|---|
| Loading | Stable map area. |
| Loaded | Map and metadata render. |
| Not found | Back link. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Locations catalog | Open location | Detail loading |
| Detail loaded | Open region | `/regions/[id]` |
| Detail loaded | Back action | `/locations` |

## Data Contract

| Source | Fields |
|---|---|
| `data.locations` | id, name, description, region_id, map file object including width/height/url/hash. |
| `data.regions` | region label and link. |

## Explainer Widget

- Summary: "Location detail shows how Revisium stores image dimensions and file metadata for a map asset."
- Variables: location id and locale.
- Deep links: location row/schema and region row.
- Subgraphs: `data`.

## Responsive Rules

- Phone: map scroll/zoom is avoided in v1; image fits container width.
- Desktop: map can be large but not block widget visibility.

## Architecture Notes

- Use file dimensions to reserve aspect ratio.

## Acceptance Criteria

- [ ] Map renders without layout shift.
- [ ] File metadata is visible in widget.

## Open Questions

- Confirm route inclusion with upstream inventory.
