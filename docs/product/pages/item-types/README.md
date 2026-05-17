# Item Types Catalog

| Field              | Value                         |
| ------------------ | ----------------------------- |
| Route              | `/item-types`                 |
| Status             | Draft                         |
| Pattern            | Small reference catalog       |
| Primary capability | Item taxonomy reference table |

## Purpose

List item type rows that group weapons, gear, consumables, quest items, and
other inventory entities in the item database.

## Context And Entry

- Entry from the Items section subnav and item detail type links.
- Links back to `/items` once item filters support type deep links.

## Functional Blocks

| Block            | Requirement                                      |
| ---------------- | ------------------------------------------------ |
| Header           | Explain item types as a game-facing taxonomy.    |
| Type list        | Name, description, and item count when resolved. |
| Related items    | Optional link to `/items` filtered by type.      |
| Explainer Widget | Required.                                        |

## Primary Actions

| Action               | Result                                                |
| -------------------- | ----------------------------------------------------- |
| Filter items by type | Navigate to `/items` with type filter once supported. |
| Open source row      | Available from the Explainer Widget, not page chrome. |

## States

| State   | Requirement                |
| ------- | -------------------------- |
| Loading | Stable reference skeleton. |
| Loaded  | Type rows render.          |
| Empty   | Explain missing seed data. |
| Error   | Retry.                     |

## Data Contract

| Source            | Fields                                              |
| ----------------- | --------------------------------------------------- |
| `data.item_types` | `id`, localized `name`/`description`, optional icon |

## Explainer Widget

- Summary: "Item Types show the taxonomy used by item cards and detail pages."
- Variables: locale.
- Deep links: item types table/schema.
- Subgraphs: `data`.
