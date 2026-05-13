# NPC Detail

| Field | Value |
|---|---|
| Route | `/npcs/[id]` |
| Status | Draft |
| Pattern | Detail |
| Primary capability | Portrait file detail and location FK |

## Purpose

Show NPC portrait metadata, computed label, and location relationship in a
single-row detail page.

## Context And Entry

- Entry from `/npcs`, quest detail pages, location detail pages, and search.
- Links to location detail and the NPC cloud row.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Portrait, display label, title/name. |
| Location | Resolved location card/link. |
| Description | Localized description. |
| File panel | Portrait metadata. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Back to NPCs | Navigate to `/npcs`. |
| Open location | Navigate to `/locations/[id]`. |
| Open cloud row | Open NPC row. |

## States

| State | Requirement |
|---|---|
| Loading | Skeleton. |
| Loaded | Profile and location render. |
| Not found | Back link. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| NPC catalog | Open NPC | Detail loading |
| Detail loaded | Open location | `/locations/[id]` |
| Detail loaded | Back action | `/npcs` |

## Data Contract

| Source | Fields |
|---|---|
| `data.npcs` | id, title, name, display label, description, portrait, location_id. |
| `data.locations` | location label and link target. |

## Explainer Widget

- Summary: "NPC detail shows a portrait file, computed display label, and a single foreign key."
- Variables: npc id and locale.
- Deep links: NPC row/schema and location row.
- Subgraphs: `data`.

## Responsive Rules

- Phone: portrait and header stack.
- Tablet: portrait/profile and location panels use two columns with the widget visible.
- Desktop: profile left, details center, widget right.

## Architecture Notes

- This frontend doc is the canonical implementation contract for `/npcs/[id]`;
  keep `page-inventory.md` and `site-map.md` in sync if the route changes.

## Acceptance Criteria

- [ ] Portrait metadata appears in widget.
- [ ] Location FK is readable and linked.

## Open Questions

- None for route inclusion; `/npcs/[id]` is part of this frontend inventory.
