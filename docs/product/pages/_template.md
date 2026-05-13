# Page Name

| Field | Value |
|---|---|
| Route | `/route` |
| Status | Draft |
| Pattern | Catalog / Detail / Narrative / Search / Branching / CMS |
| Primary capability | Capability from `docs/product/page-inventory.md` |

## Purpose

Describe why the page exists and what a visitor should learn.

## Context And Entry

- Where the visitor comes from.
- What links into the page.
- What the page links to next.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Title, purpose, capability chips. |
| Content | Main data or narrative surface. |
| Explainer Widget | Required unless the page has no Revisium request. |
| Footer/navigation | Links to related routes and source. |

## Primary Actions

| Action | Result |
|---|---|
| Example | Expected state transition. |

## States

| State | Requirement |
|---|---|
| Loading | Stable skeleton or previous content. |
| Loaded | Primary content visible. |
| Empty | Recovery action. |
| Error | Visitor-readable failure. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Initial | Data resolves | Loaded |

## Data Contract

| Source | Fields |
|---|---|
| `data.table` | Required fields. |

## Explainer Widget

- Summary:
- Surfaces:
- Variables:
- Response sample:
- Deep links:
- Subgraphs:

## Responsive Rules

- Phone:
- Tablet:
- Desktop:

## Architecture Notes

- Page slice:
- ViewModel:
- GraphQL document:
- Route module:

## Acceptance Criteria

- [ ] Criteria.

## Open Questions

- None.
