# Quests Catalog

| Field | Value |
|---|---|
| Route | `/quests` |
| Status | Draft |
| Pattern | Catalog |
| Primary capability | FK columns, level filter, repeatable flag |

## Purpose

Show quest rows as content records with NPC/location relationships, level
filtering, and repeatable boolean display.

## Context And Entry

- Entry from home, dictionary navigation, NPC/location detail pages, and search.
- Quest rows link to `/quests/[id]`.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Quest catalog purpose and capability chips. |
| Filters | Level range, repeatable toggle, NPC, location. |
| Quest list | Title, giver NPC, location, level, repeatable flag, step count. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Filter level/repeatable | Updates query payload. |
| Open quest | Navigate to `/quests/[id]`. |
| Reset | Clears filters. |

## States

| State | Requirement |
|---|---|
| Loading | Skeleton rows. |
| Loaded | Quest list with FK labels. |
| Empty | Reset. |
| Error | Retry and readable message. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Loaded catalog | Filter changes | Refreshing catalog |
| Loaded catalog | Open quest | `/quests/[id]` |
| Empty | Reset filters | Default catalog |

## Data Contract

| Source | Fields |
|---|---|
| `data.quests` | `id`, localized title/summary, `npc_id`, `location_id`, `level`, `repeatable`, `step_count`, pagination. |
| `data.npcs`, `data.locations` | labels for filters and display. |

## Explainer Widget

- Summary: "Quests show FK-backed catalog columns and filters plus computed step count."
- Variables: level range, repeatable, FK filters, locale, cursor.
- Deep links: quests table/schema.
- Subgraphs: `data`.

## Responsive Rules

- Phone: rows become cards; filters bottom sheet.
- Tablet/Desktop: table is acceptable for dense quest comparison.

## Architecture Notes

- Quest catalog may become the reference for boolean filters.

## Acceptance Criteria

- [ ] Repeatable flag is readable and filterable.
- [ ] NPC/location labels come from data, not hardcoded strings.

## Open Questions

- Confirm exact quest level field name.
