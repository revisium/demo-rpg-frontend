# Faction Detail

| Field | Value |
|---|---|
| Route | `/factions/[id]` |
| Status | Draft |
| Pattern | Detail |
| Primary capability | Crest file rendering and reverse-FK aggregation |

## Purpose

Show a faction row with its crest file and related heroes/monsters that point
back to the faction.

## Context And Entry

- Entry from `/factions`, hero detail pages, monster detail pages, and search.
- Links to related hero/monster rows and the faction cloud row.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Crest, name, alignment. |
| Description | Localized faction description. |
| Related heroes | Heroes with `faction_id` matching this row. |
| Related monsters | Monsters with `faction_id` matching this row. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Back to factions | Navigate to `/factions`. |
| Open related row | Navigate to hero/monster detail. |
| Open cloud row | Open faction row. |

## States

| State | Requirement |
|---|---|
| Loading | Skeleton. |
| Loaded | Faction and related rows render. |
| No related rows | Show empty related section, not page empty. |
| Not found | Back link. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Factions catalog | Open faction | Detail loading |
| Detail loaded | Open related row | Related route |
| Detail loaded | Back action | `/factions` |

## Data Contract

| Source | Fields |
|---|---|
| `data.factions` | id, name, description, alignment, crest. |
| `data.heroes`, `data.monsters` | rows filtered by `faction_id`. |

## Explainer Widget

- Summary: "Faction detail shows a file field plus reverse lookup patterns over rows that reference this faction."
- Variables: faction id and locale.
- Deep links: faction row/schema and related tables.
- Subgraphs: `data`.

## Responsive Rules

- Phone: crest and summary first, related sections stacked.
- Desktop: related heroes/monsters in side-by-side sections if space allows.

## Architecture Notes

- Reverse joins may be implemented as separate queries if generated GraphQL does not expose nested reverse relations.

## Acceptance Criteria

- [ ] Crest is visible and metadata appears in widget.
- [ ] Related rows are query-driven, not hardcoded.

## Open Questions

- Confirm whether reverse relation is available in GraphQL or needs separate filtered requests.
