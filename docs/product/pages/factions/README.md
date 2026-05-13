# Factions Catalog

| Field | Value |
|---|---|
| Route | `/factions` |
| Status | Draft |
| Pattern | Catalog |
| Primary capability | SVG crest file and alignment enum |

## Purpose

Show a compact reference catalog with enum fields and SVG crest files.

## Context And Entry

- Entry from home, monster/hero pages, search results, and dictionary navigation.
- Faction cards link to `/factions/[id]`.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Faction catalog purpose and capability chips. |
| Alignment filter | Enum filter when supported. |
| Faction list | Crest, name, alignment, short description. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Filter alignment | Updates enum filter. |
| Open faction | Navigate to `/factions/[id]`. |

## States

| State | Requirement |
|---|---|
| Loading | Stable crest placeholders. |
| Loaded | Cards render crests. |
| Empty | Reset filter. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Loaded catalog | Filter alignment | Refreshing catalog |
| Loaded catalog | Open faction | `/factions/[id]` |
| Empty | Reset filter | Default catalog |

## Data Contract

| Source | Fields |
|---|---|
| `data.factions` | `id`, localized name/description, `alignment`, `crest`. |

## Explainer Widget

- Summary: "Factions show enum filtering and SVG crest files from Revisium."
- Variables: alignment filter, locale.
- Deep links: factions table/schema.
- Subgraphs: `data`.

## Responsive Rules

- Phone: one-column faction cards.
- Tablet: two-column faction grid with filters and widget visible.
- Desktop: compact grid with fixed crest size.

## Architecture Notes

- Crest rendering should reuse the same file-preview primitive as abilities/items.

## Acceptance Criteria

- [ ] Crest SVGs render without layout shift.
- [ ] Alignment enum is visible and filterable when supported.

## Open Questions

- Confirm exact alignment enum values.
