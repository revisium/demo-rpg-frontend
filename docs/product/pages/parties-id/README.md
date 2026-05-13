# Party Detail

| Field | Value |
|---|---|
| Route | `/parties/[id]` |
| Status | Draft |
| Pattern | Detail |
| Primary capability | Array FK resolution, `member_count`, `is_full` |

## Purpose

Show the simplest array-FK detail page and formula outputs based on array length.

## Context And Entry

- Entry from `/parties`, hero detail pages, and search results.
- Links to member hero detail pages and the party cloud row.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Party name, member count, full badge. |
| Members | Resolved hero cards from `hero_ids[]`. |
| Formula panel | `member_count`, `is_full`, party capacity constant. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Back to parties | Navigate to `/parties`. |
| Open hero | Navigate to `/heroes/[id]`. |
| Open cloud row | Open party row. |

## States

| State | Requirement |
|---|---|
| Loading | Skeleton. |
| Loaded | Members and formulas render. |
| Empty members | Show empty party state, not page empty state. |
| Not found | Back link. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Parties catalog | Open party | Detail loading |
| Detail loaded | Open hero | `/heroes/[id]` |
| Detail loaded | Back action | `/parties` |

## Data Contract

| Source | Fields |
|---|---|
| `data.parties` | `id`, name, `hero_ids[]`, `member_count`, `is_full`. |
| `data.heroes` | hero name, class, portrait. |

## Explainer Widget

- Summary: "Party detail shows an array foreign key and formulas computed from that array."
- Variables: party id and locale.
- Deep links: party row/schema and heroes table.
- Subgraphs: `data`.

## Responsive Rules

- Phone: member cards single-column.
- Desktop: member grid plus formula summary before widget.

## Architecture Notes

- Do not infer `is_full` in the frontend; render computed field.

## Acceptance Criteria

- [ ] `member_count` and `is_full` are visibly computed.
- [ ] Every member links to hero detail or cloud row.

## Open Questions

- Confirm party capacity constant source.
