# Monster Detail

| Field | Value |
|---|---|
| Route | `/monsters/[id]` |
| Status | Draft |
| Pattern | Detail |
| Primary capability | Faction FK, ability array FK, embedded drops, formulas, image file |

## Purpose

Show a monster as a complete row with file preview, faction relationship,
ability references, embedded drops, and computed drop metrics.

## Context And Entry

- Entry from `/monsters`, faction detail, quest references, and search results.
- Links to faction, abilities, drop items, and the monster cloud row.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Image, name, faction, threat label. |
| Description | Localized description/lore. |
| Abilities | Resolved `ability_ids[]`. |
| Drops | Embedded `drops[]` with item references and chance values. |
| Formula panel | `avg_drop_chance`, `drop_count`. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Back to monsters | Navigate to `/monsters`. |
| Open faction/ability/item | Navigate or cloud deep-link. |
| Open cloud row | Cloud monster row. |

## States

| State | Requirement |
|---|---|
| Loading | Detail skeleton. |
| Loaded | All panels render. |
| Not found | Back link. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Monsters catalog | Open monster | Detail loading |
| Detail loaded | Open related row | Related route or cloud row |
| Detail loaded | Back action | `/monsters` |

## Data Contract

| Source | Fields |
|---|---|
| `data.monsters` | identity, `image`, `faction_id`, `ability_ids[]`, `drops[]`, formula fields. |
| `data.factions`, `data.abilities`, `data.items` | resolved reference labels. |

## Explainer Widget

- Summary: "Monster detail combines array FKs, embedded drops, formulas over arrays, and a PNG illustration file."
- Variables: monster id and locale.
- Deep links: monster row/schema and referenced tables.
- Subgraphs: `data`.

## Responsive Rules

- Phone: image full-width with stable aspect ratio, panels stacked.
- Desktop: media and summary left, data panels center, widget right.

## Architecture Notes

- Treat item references inside drops as FK-like links if schema exposes them.

## Acceptance Criteria

- [ ] Ability array and drops array are distinguishable.
- [ ] Formula values are explained in the widget.
- [ ] File metadata is visible in the widget.

## Open Questions

- Confirm whether `drops[].item_id` is declared as FK and resolvable in GraphQL.
