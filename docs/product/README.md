# Product And UX Overview

`demo-rpg-frontend` is not a game UI first. It is a public DevRel evaluation
surface for Revisium, wrapped in the Branching Tales fantasy domain.

The frontend must let a developer answer "can Revisium do this?" by clicking
through working pages, inspecting the real request, seeing a real response, and
opening the underlying Revisium table or row.

## Product Rules

- The app is read-only and unauthenticated.
- The UI demonstrates Revisium capabilities; it does not simulate combat,
  progression, inventory management, or other game runtime mechanics.
- Every page has a specific capability job. Decorative pages are not added.
- The Explainer Widget is part of the product, not a debug panel.
- Fantasy content provides context; chrome stays precise, calm, and developer-focused.

## Canonical Documents

| Document | Purpose |
|---|---|
| [Project Brief](./project-brief.md) | Business context, audience, positioning, success metrics, and v1 scope. |
| [Page Inventory](./page-inventory.md) | All routes, data sources, page specs, capability coverage, status. |
| [Site Map And Transitions](./site-map.md) | Navigation graph and allowed user transitions. |
| [Feature Map](./feature-map.md) | Capability-to-route map for planning and QA coverage. |
| [Page Patterns](./page-patterns.md) | Shared UX contracts across page families. |
| [Explainer Widget](./explainer-widget.md) | Frontend-owned implementation contract for the cross-page widget. |
| [Page Specs](./pages/) | Per-route behaviour and acceptance criteria. |

## Page Families

| Family | Routes | Product job |
|---|---|---|
| Landing and narrative | `/`, `/about` | Explain the 80/20 story, link into capability pages, show architecture. |
| Catalogs | `/regions`, `/heroes`, `/items`, `/monsters`, `/quests`, `/parties`, `/factions`, `/npcs`, `/locations`, `/classes`, `/abilities` | Show schema-generated list APIs, filtering, sorting, pagination, files, formulas, and FKs. |
| Details | `/regions/[id]`, `/heroes/[id]`, `/items/[id]`, `/monsters/[id]`, `/quests/[id]`, `/parties/[id]`, `/factions/[id]`, `/npcs/[id]`, `/locations/[id]` | Show rich schema shapes, formula outputs, file fields, FK resolution, and federation. |
| Discovery | `/search` | Show Revisium full-text search across projects/tables. |
| Revision story | `/balance-patch` | Show `head` vs `draft` data views and revision diff. |
| CMS surfaces | `/blog`, `/blog/[slug]`, `/news`, `/news/[slug]` | Show Revisium as a CMS and news/patch-note source. |

## Implementation Readiness Rule

A page may move from spec to code only when its document defines:

- data source and GraphQL operation shape;
- visible page blocks;
- all user actions;
- loading, error, empty, and loaded states;
- desktop, tablet, and phone layout;
- Explainer Widget descriptor requirements;
- acceptance criteria;
- known blockers.

If any of these are missing, finish the page spec before implementation.
