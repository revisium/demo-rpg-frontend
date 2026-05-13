# Locations Catalog

| Field | Value |
|---|---|
| Route | `/locations` |
| Status | Draft |
| Pattern | Catalog |
| Primary capability | Region FK and map preview |

## Purpose

Show location rows that belong to regions and preview map file fields.

## Context And Entry

- Entry from home, regions, NPCs, quests, search results, and dictionary navigation.
- Location cards link to `/locations/[id]`.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Locations purpose and capability chips. |
| Filters | Region and name. |
| Location list | Name, region, map thumbnail, short description. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Filter region | Updates FK equality payload. |
| Open location | Navigate to `/locations/[id]`. |
| Open region | Navigate to `/regions/[id]` when available. |

## States

| State | Requirement |
|---|---|
| Loading | Map thumbnail placeholders. |
| Loaded | Cards render locations. |
| Empty | Reset filters. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Loaded catalog | Filter region | Refreshing catalog |
| Loaded catalog | Open location | `/locations/[id]` |
| Empty | Reset filters | Default catalog |

## Data Contract

| Source | Fields |
|---|---|
| `data.locations` | id, localized name/description, `region_id`, `map`. |
| `data.regions` | region labels. |

## Explainer Widget

- Summary: "Locations show a region foreign key and large map file metadata."
- Variables: region filter, locale, cursor.
- Deep links: locations table/schema.
- Subgraphs: `data`.

## Responsive Rules

- Phone: map thumbnails keep fixed aspect ratio.
- Desktop: grid with region grouping if useful.

## Architecture Notes

- Reuse file preview rules from items/factions.

## Acceptance Criteria

- [ ] Region labels are query-driven.
- [ ] Map thumbnails do not cause layout shift.

## Open Questions

- Confirm if map file exists on catalog rows or detail only.
