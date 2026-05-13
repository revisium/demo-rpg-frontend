# Hero Detail

| Field | Value |
|---|---|
| Route | `/heroes/[id]` |
| Status | Draft |
| Pattern | Detail |
| Primary capability | Single FK, array FKs, embedded equipment, formulas, portrait file |

## Purpose

Show the richest single-row schema example for a character-like entity.

## Context And Entry

- Entry from `/heroes`, parties, factions, and search results.
- Links to class, region, faction, abilities, inventory items, and cloud row.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Portrait, display name, level, veteran badge. |
| Identity panel | Class, region, faction, localized bio. |
| Abilities panel | Resolved `ability_ids[]`. |
| Inventory panel | Resolved `inventory_item_ids[]`. |
| Equipment panel | Embedded `equipment[]` rows. |
| Formula panel | `is_veteran`, `total_equipment_modifier`, `equipped_count`. |
| Explainer Widget | Required with array-FK and embedded-array explanation. |

## Primary Actions

| Action | Result |
|---|---|
| Back to heroes | Navigate to `/heroes`. |
| Open related row | Navigate to app route or cloud row. |
| View schema | Opens heroes schema. |

## States

| State | Requirement |
|---|---|
| Loading | Stable hero profile skeleton. |
| Loaded | All panels render; missing optional arrays render as empty panels. |
| Not found | Missing hero message. |
| Error | Retry and readable failure. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Hero catalog | Open hero | Detail loading |
| Detail loaded | Open related row | Related route or cloud row |
| Detail loaded | Back action | `/heroes` |

## Data Contract

| Source | Fields |
|---|---|
| `data.heroes` | identity fields, `class_id`, `region_id`, `faction_id`, `ability_ids[]`, `inventory_item_ids[]`, `equipment[]`, `portrait`, formula fields. |
| `data.classes`, `data.regions`, `data.factions`, `data.abilities`, `data.items` | resolved FK labels and links. |

## Explainer Widget

- Summary: "Hero detail shows single and array foreign keys, embedded equipment, formulas, and file fields in one Revisium row."
- Variables: hero id and locale.
- Field attribution: all fields `data`.
- Deep links: hero row/schema and related table links.
- Subgraphs: `data`.

## Responsive Rules

- Phone: portrait then identity, formulas, related panels.
- Tablet/Desktop: profile header with portrait left, content middle, widget right.

## Architecture Notes

- Resolve FK data through generated GraphQL where possible; avoid client-side joins from static maps.

## Acceptance Criteria

- [ ] Array FKs are visible and linked.
- [ ] Embedded equipment is clearly separate from referenced inventory items.
- [ ] Formula outputs are not recomputed in UI.

## Open Questions

- Confirm whether ability and inventory array FKs are exposed as nested objects.
