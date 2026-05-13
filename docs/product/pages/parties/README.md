# Parties Catalog

| Field | Value |
|---|---|
| Route | `/parties` |
| Status | Draft |
| Pattern | Catalog |
| Primary capability | Array FK column and formula counters |

## Purpose

Show group rows where one field references multiple heroes and formulas derive
member counts and capacity state.

## Context And Entry

- Entry from home, hero pages, search results, and dictionary navigation.
- Party cards link to `/parties/[id]`.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Party catalog purpose and capability chips. |
| Filters | Full/not full, member count range, hero membership if query supports it. |
| Party list | Name, member avatars/names, member count, full badge. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Filter full state | Updates formula/boolean filter payload. |
| Open party | Navigate to `/parties/[id]`. |
| Open hero | Navigate to hero detail when linked. |

## States

| State | Requirement |
|---|---|
| Loading | Skeleton party cards. |
| Loaded | Cards show hero array references. |
| Empty | Reset filters. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Loaded catalog | Filter full state | Refreshing catalog |
| Loaded catalog | Open party | `/parties/[id]` |
| Empty | Reset filters | Default catalog |

## Data Contract

| Source | Fields |
|---|---|
| `data.parties` | `id`, localized name, `hero_ids[]`, `member_count`, `is_full`. |
| `data.heroes` | hero labels/portraits for member display. |

## Explainer Widget

- Summary: "Parties show array foreign keys and formulas computed from array length."
- Variables: filters, cursor, locale.
- Deep links: parties table/schema and hero table.
- Subgraphs: `data`.

## Responsive Rules

- Phone: member list wraps within each card.
- Desktop: table with member chips is acceptable.

## Architecture Notes

- Keep array FK display reusable for hero abilities and inventory.

## Acceptance Criteria

- [ ] Member count comes from formula output.
- [ ] Hero IDs are resolved into readable member labels.

## Open Questions

- Confirm whether `hero_ids[]` can be filtered by membership.
