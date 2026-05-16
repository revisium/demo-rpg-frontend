# Quest Detail

| Field | Value |
|---|---|
| Route | `/quests/[id]` |
| Status | Draft |
| Pattern | Detail |
| Primary capability | Two-level embedded arrays, step images, and formulas |

## Purpose

Demonstrate the deepest JSON Schema shape in the demo: quest steps containing
required image file fields and nested reward arrays, with formulas reducing
across both levels.

## Context And Entry

- Entry from `/quests`, search results, NPC/location pages, and item references.
- Links to NPC, location, reward items, and the quest cloud row.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Quest title, level, repeatable flag. |
| Context | NPC giver and location. |
| Steps timeline | Ordered `steps[]` with required `steps[].image`. |
| Rewards | Nested `steps[].rewards[]` with item/XP details. |
| Formula panel | `total_xp`, `total_loot_xp`, `step_count`. |
| Explainer Widget | Required with nested-array explanation. |

## Primary Actions

| Action | Result |
|---|---|
| Back to quests | Navigate to `/quests`. |
| Open NPC/location/item | Navigate or cloud deep-link. |
| View schema | Open quest schema. |

## States

| State | Requirement |
|---|---|
| Loading | Timeline skeleton. |
| Loaded | Steps and rewards render in order. |
| Empty | Quest row exists but has no authored steps or rewards; keep the header and explain the missing content. |
| Not found | Back link. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Quests catalog | Open quest | Detail loading |
| Detail loaded | Open related row | Related route or cloud row |
| Detail loaded | Back action | `/quests` |

## Data Contract

| Source | Fields |
|---|---|
| `data.quests` | localized title/summary, `npc_id`, `location_id`, `steps[]`, `steps[].image.{fileId,url,hash,fileName,mimeType,width,height}`, `steps[].rewards[]`, formula fields. |
| `data.npcs`, `data.locations`, `data.items` | resolved labels and links. |

## Explainer Widget

- Summary: "Quest detail shows required file fields inside object arrays, nested embedded arrays, and formulas that reduce across one and two levels."
- Variables: quest id and locale.
- Response sample: quest with steps and a capped reward list.
- Deep links: quest row/schema.
- Subgraphs: `data`.

## Responsive Rules

- Phone: timeline stacked; rewards nested with clear indentation.
- Tablet: timeline and formula summary use two columns with the widget visible.
- Desktop: timeline center and formula summary side panel before widget.

## Architecture Notes

- Use semantic lists for steps and rewards.
- Avoid flattening nested arrays in a way that hides the schema shape.

## Acceptance Criteria

- [ ] Steps and nested rewards are visually distinct.
- [ ] Every step renders its required image file field.
- [ ] Formula panel maps each formula to visible source fields.
- [ ] Widget shows nested array JSON shape.

## Open Questions

- Confirm reward item reference shape and resolution.
