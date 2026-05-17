# Dialogs Catalog

| Field              | Value                                        |
| ------------------ | -------------------------------------------- |
| Route              | `/dialogs`                                   |
| Status             | Draft                                        |
| Pattern            | Small reference catalog                      |
| Primary capability | Quest dialog branches and speaker references |

## Purpose

List dialog rows used by quests, NPC interactions, and branching conversation
content.

## Context And Entry

- Entry from the Quests section subnav and quest detail dialog sections.
- Links to `/quests` and `/npcs` when the dialog row resolves those references.

## Functional Blocks

| Block            | Requirement                                        |
| ---------------- | -------------------------------------------------- |
| Header           | Explain dialogs as quest-facing conversation data. |
| Dialog list      | Quest, speaker, prompt text, and branch summary.   |
| Related quests   | Link to quest detail when implemented.             |
| Explainer Widget | Required.                                          |

## Primary Actions

| Action          | Result                                                |
| --------------- | ----------------------------------------------------- |
| Open quest      | Navigate to `/quests/[id]` when the route exists.     |
| Open source row | Available from the Explainer Widget, not page chrome. |

## States

| State   | Requirement                |
| ------- | -------------------------- |
| Loading | Stable reference skeleton. |
| Loaded  | Dialog rows render.        |
| Empty   | Explain missing seed data. |
| Error   | Retry.                     |

## Data Contract

| Source         | Fields                                                                 |
| -------------- | ---------------------------------------------------------------------- |
| `data.dialogs` | `id`, quest FK, speaker NPC FK, localized prompt/body, branch metadata |

## Explainer Widget

- Summary: "Dialogs show quest conversation rows with speaker and quest references."
- Variables: locale, optional quest filter.
- Deep links: dialogs table/schema.
- Subgraphs: `data`.
