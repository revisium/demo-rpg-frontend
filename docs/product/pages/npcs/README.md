# NPCs Catalog

| Field | Value |
|---|---|
| Route | `/npcs` |
| Status | Draft |
| Pattern | Catalog |
| Primary capability | Portrait file and computed display label |

## Purpose

Show a character/content catalog driven by computed label strings and location
relationships.

## Context And Entry

- Entry from quests, locations, search results, and dictionary navigation.
- NPC cards link to `/npcs/[id]`.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | NPC catalog purpose and capability chips. |
| Filters | Location and name search. |
| NPC list | Portrait, computed display label, title/name, location. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Filter location | Updates FK equality payload. |
| Open NPC | Navigate to `/npcs/[id]`. |

## States

| State | Requirement |
|---|---|
| Loading | Portrait skeletons. |
| Loaded | Cards render labels and portraits. |
| Empty | Reset. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Loaded catalog | Filter location | Refreshing catalog |
| Loaded catalog | Open NPC | `/npcs/[id]` |
| Empty | Reset filters | Default catalog |

## Data Contract

| Source | Fields |
|---|---|
| `data.npcs` | id, title, name, `display_label_en`, portrait, `location_id`. |
| `data.locations` | location labels. |

## Explainer Widget

- Summary: "NPCs show computed display labels, portrait file fields, and location foreign keys."
- Variables: location filter, locale, cursor.
- Deep links: NPCs table/schema.
- Subgraphs: `data`.

## Responsive Rules

- Phone: portrait cards one column.
- Tablet: two-column portrait grid with filters and widget still visible.
- Desktop: compact grid.

## Architecture Notes

- Display label should come from formula output.

## Acceptance Criteria

- [ ] NPC labels show formula-derived display text.
- [ ] Portrait file handling matches hero portrait handling.

## Open Questions

- None for route inclusion; `/npcs/[id]` is part of this frontend inventory.
