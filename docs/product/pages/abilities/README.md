# Abilities Catalog

| Field | Value |
|---|---|
| Route | `/abilities` |
| Status | Draft |
| Pattern | Small catalog |
| Primary capability | SVG icon file catalog |

## Purpose

Show a compact icon-heavy catalog and serve as a target for hero/monster array
foreign keys.

## Context And Entry

- Entry from hero and monster detail pages, search results, and dictionary navigation.
- Links back to referencing heroes/monsters when reverse usage is available.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Explain abilities as reusable rows. |
| Ability list | Icon, name, category/type, description. |
| Related usage | Optional "used by heroes/monsters" links if available. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Search/filter ability | Updates list where supported. |
| Open cloud row | Opens ability row. |

## States

| State | Requirement |
|---|---|
| Loading | Icon placeholders. |
| Loaded | Icons render with labels. |
| Empty | Explain missing seed data. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Catalog loaded | Filter/search changes | Refreshing list |
| Catalog loaded | Cloud row click | External cloud row |

## Data Contract

| Source | Fields |
|---|---|
| `data.abilities` | id, localized name/description, icon, category/type if present. |

## Explainer Widget

- Summary: "Abilities show SVG icon file fields and rows reused through array foreign keys."
- Variables: locale, optional filters.
- Deep links: abilities table/schema.
- Subgraphs: `data`.

## Responsive Rules

- Phone: compact cards with fixed icon boxes.
- Tablet: two-column icon grid with the widget visible.
- Desktop: dense grid.

## Architecture Notes

- Reuse SVG icon file renderer from items/factions.

## Acceptance Criteria

- [ ] SVG icons render cleanly at multiple sizes.
- [ ] Widget links ability rows to array-FK usage.

## Open Questions

- Decide whether ability detail route is needed; not planned for v1.
