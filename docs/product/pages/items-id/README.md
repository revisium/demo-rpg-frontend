# Item Detail

| Field | Value |
|---|---|
| Route | `/items/[id]` |
| Status | Draft |
| Pattern | Detail |
| Primary capability | Single FK, embedded modifiers, formulas, SVG file |

## Purpose

Show how one item row combines a file field, a type FK, embedded modifier
arrays, and formula outputs.

## Context And Entry

- Entry from `/items`, hero inventory, quest rewards, and monster drops.
- Links back to `/items` and related type/stat rows where routes exist.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Icon, name, rarity tag, type. |
| Core fields | Description, base value, rarity, type FK. |
| Formula panel | `market_value`, `rarity_tag` with formula explanation. |
| Modifiers panel | Embedded `modifiers[]` list with stat references and values. |
| File panel | SVG icon preview and metadata. |
| Explainer Widget | Required with formula and file deep links. |

## Primary Actions

| Action | Result |
|---|---|
| Back to items | Navigate to `/items`. |
| Open cloud row | Open item row in cloud. |
| Open type/stat reference | Navigate or deep-link to referenced row. |

## States

| State | Requirement |
|---|---|
| Loading | Stable detail skeleton. |
| Loaded | All panels render. |
| Not found | Missing item message and back link. |
| Error | Retry and readable failure. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Items catalog | Open item | Detail loading |
| Detail loaded | Open related type/stat | Related route or cloud row |
| Detail loaded | Back action | `/items` |

## Data Contract

| Source | Fields |
|---|---|
| `data.items` | `id`, `data.name`, `data.description`, `data.icon`, `data.rarity`, `data.type_id`, `data.modifiers[]`, `base_value`, `rarity_multiplier`, `market_value`, `rarity_tag`. |
| `data.item_types` | type name and description. |
| `data.stats` | stat names for modifier rows. |

## Explainer Widget

- Summary: "This item detail shows file fields, embedded arrays, foreign keys, and formula output from one Revisium row."
- Variables: item id and locale.
- Response sample: full item row plus resolved references.
- Deep links: item row/schema, type/stat rows if available.
- Subgraphs: `data`.

## Responsive Rules

- Phone: icon above title; formula and modifiers stack.
- Tablet/Desktop: header and file preview side by side, widget right.

## Architecture Notes

- Avoid computing formula values in frontend. Render values from API and show expressions only in explanation.

## Acceptance Criteria

- [ ] SVG file preview renders and metadata is available in widget.
- [ ] Formula values are labelled as computed.
- [ ] Embedded modifiers are visible as inline row data.

## Open Questions

- Confirm whether `stats` are resolved as FK objects or require separate query.
