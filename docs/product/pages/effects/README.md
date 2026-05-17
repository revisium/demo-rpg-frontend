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

| State       | Requirement                                             |
| ----------- | ------------------------------------------------------- |
| Initial SSR | Render shell, heading, status, and subnav without data. |
| Loading     | Stable reference skeleton.                              |
| Loaded      | Effect rows render.                                     |
| Empty       | Explain missing seed data and link back to `/items`.    |
| Error       | Show readable failure and retry.                        |

## Transitions

| From           | Trigger             | To                                 |
| -------------- | ------------------- | ---------------------------------- |
| Catalog loaded | Open related entity | Implemented related route          |
| Catalog loaded | Source row action   | Explainer Widget external row link |

## Data Contract

| Source         | Fields                                                        |
| -------------- | ------------------------------------------------------------- |
| `data.effects` | `id`, localized `name`/`description`, category, target, value |

## Explainer Widget

- Summary: "Effects show reusable modifier rows that other game entities can reference."
- Variables: locale.
- GraphQL operation shape: list `data.effects` rows ordered by display name.
- Response sample: visible effect rows.
- Deep links: effects table/schema and selected effect row when a row action is
  present.
- Subgraphs: `data`.

## Responsive Rules

- Phone: one-column list with compact category badges.
- Tablet: two-column reference list.
- Desktop: compact table or dense cards with the widget floating.

## Architecture Notes

- Implement as a small catalog page before moving status beyond `Draft`.
- ViewModel owns locale, response mapping, related-entity grouping, and widget descriptor.
- DataSource owns the generated GraphQL SDK call once the operation is added.

## Acceptance Criteria

- [ ] Effect rows render with name, description, category, target, and value.
- [ ] Empty state links visitors back to `/items`.
- [ ] Widget links to the table/schema and selected row where relevant.

## Open Questions

- Confirm effect category and target enum values before implementation.
