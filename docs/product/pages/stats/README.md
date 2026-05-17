# Stats Catalog

| Field              | Value                         |
| ------------------ | ----------------------------- |
| Route              | `/stats`                      |
| Status             | Draft                         |
| Pattern            | Small reference catalog       |
| Primary capability | Stat taxonomy reference table |

## Purpose

List stat rows that explain modifiers shown on items, heroes, effects, and
combat-related entities.

## Context And Entry

- Entry from the Items section subnav and item modifier rows.
- Links back to `/items` when a stat-specific item filter exists.

## Functional Blocks

| Block            | Requirement                                        |
| ---------------- | -------------------------------------------------- |
| Header           | Explain stats as shared item/combat vocabulary.    |
| Stat list        | Name, abbreviation, description, and value format. |
| Related items    | Optional list or link to items using the stat.     |
| Explainer Widget | Required.                                          |

## Primary Actions

| Action               | Result                                                |
| -------------------- | ----------------------------------------------------- |
| Filter items by stat | Navigate to `/items` with stat filter once supported. |
| Open source row      | Available from the Explainer Widget, not page chrome. |

## States

| State   | Requirement                |
| ------- | -------------------------- |
| Loading | Stable reference skeleton. |
| Loaded  | Stat rows render.          |
| Empty   | Explain missing seed data. |
| Error   | Retry.                     |

## Data Contract

| Source       | Fields                                                   |
| ------------ | -------------------------------------------------------- |
| `data.stats` | `id`, localized `name`/`description`, code, display unit |

## Explainer Widget

- Summary: "Stats show a reusable reference table behind item modifiers."
- Variables: locale.
- Deep links: stats table/schema.
- Subgraphs: `data`.
