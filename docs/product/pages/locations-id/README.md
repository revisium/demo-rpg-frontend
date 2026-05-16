# Location Detail

| Field              | Value                                                  |
| ------------------ | ------------------------------------------------------ |
| Route              | `/locations/[id]`                                      |
| Status             | Draft                                                  |
| Pattern            | Detail                                                 |
| Primary capability | Large map file, dimensions metadata, and gallery array |

## Purpose

Show a location detail with large map metadata, a required gallery file array,
and a region FK.

## Context And Entry

- Entry from `/locations`, region detail, NPC/quest pages, and search results.
- Links to the region row, related content, and the location cloud row.

## Functional Blocks

| Block            | Requirement                                                           |
| ---------------- | --------------------------------------------------------------------- |
| Header           | Location name and region.                                             |
| Map              | Large map image with dimensions metadata.                             |
| Gallery          | Required `gallery[]` images with stable thumbnails and file metadata. |
| Description      | Localized description.                                                |
| Related content  | Optional quests/NPCs in this location.                                |
| Explainer Widget | Required.                                                             |

## Primary Actions

| Action            | Result                       |
| ----------------- | ---------------------------- |
| Back to locations | Navigate to `/locations`.    |
| Open region       | Navigate to `/regions/[id]`. |
| Open cloud row    | Open location row.           |

## States

| State     | Requirement              |
| --------- | ------------------------ |
| Loading   | Stable map area.         |
| Loaded    | Map and metadata render. |
| Not found | Back link.               |
| Error     | Retry.                   |

## Transitions

| From              | Trigger       | To              |
| ----------------- | ------------- | --------------- |
| Locations catalog | Open location | Detail loading  |
| Detail loaded     | Open region   | `/regions/[id]` |
| Detail loaded     | Back action   | `/locations`    |

## Data Contract

| Source           | Fields                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data.locations` | id, name, description, region_id, `map.{fileId,url,hash,fileName,mimeType,width,height}`, `gallery[].{fileId,url,hash,fileName,mimeType,width,height}` |
| `data.regions`   | region label and link.                                                                                                                                 |

## Explainer Widget

- Summary: "Location detail shows image dimensions, file metadata, and file arrays for location art."
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
- [ ] Gallery images render from `gallery[]` without layout shift.

## Open Questions

- Confirm route inclusion with upstream inventory.
