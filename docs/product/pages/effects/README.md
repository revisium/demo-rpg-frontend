# Effects Catalog

| Field              | Value                                     |
| ------------------ | ----------------------------------------- |
| Route              | `/effects`                                |
| Status             | Draft                                     |
| Pattern            | Small reference catalog                   |
| Primary capability | Reusable stat or combat effect references |

## Purpose

List effect rows that can be attached to items, abilities, monsters, quests, or
future combat-oriented content.

## Context And Entry

- Entry from the Items section subnav and related entity sections.
- Links to items, abilities, or monsters once reverse relationships are resolved.

## Functional Blocks

| Block            | Requirement                                      |
| ---------------- | ------------------------------------------------ |
| Header           | Explain effects as reusable gameplay modifiers.  |
| Effect list      | Name, description, type, and stack/target hints. |
| Related entities | Optional game-facing sections by consumer type.  |
| Explainer Widget | Required.                                        |

## Primary Actions

| Action              | Result                                                    |
| ------------------- | --------------------------------------------------------- |
| Open related entity | Navigate to the implemented related route when available. |
| Open source row     | Available from the Explainer Widget, not page chrome.     |

## States

| State   | Requirement                |
| ------- | -------------------------- |
| Loading | Stable reference skeleton. |
| Loaded  | Effect rows render.        |
| Empty   | Explain missing seed data. |
| Error   | Retry.                     |

## Data Contract

| Source         | Fields                                                        |
| -------------- | ------------------------------------------------------------- |
| `data.effects` | `id`, localized `name`/`description`, category, target, value |

## Explainer Widget

- Summary: "Effects show reusable modifier rows that other game entities can reference."
- Variables: locale.
- Deep links: effects table/schema.
- Subgraphs: `data`.
