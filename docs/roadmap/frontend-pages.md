# Frontend Page Roadmap

This roadmap orders frontend work so each milestone creates reusable patterns
for the next one.

## Milestone 0: Documentation Contract

Goal: make the repo implementable by a frontend agent.

- Docs hub.
- Project brief.
- Page inventory.
- Site map and transitions.
- Feature map.
- Page specs.
- Shared page patterns.
- Design system and layout rules.
- Art direction and image prompts.
- Frontend architecture guide.
- Add-page playbook.
- Developer handoff guide.
- Review checklist.

Exit: an agent can start `/regions` implementation from docs without asking for
product decisions.

## Milestone 1: App Shell And Reference Catalog

Routes:

- `/`
- `/regions`

Build:

- app shell;
- footer chip;
- locale shell placeholder;
- catalog layout;
- Explainer Widget v1;
- loading/error/empty states;
- total count and pagination pattern.

Exit: `/regions` is the reference implementation for simple generated catalog pages.

## Milestone 2: Federation Reference

Route:

- `/regions/[id]`

Dependencies:

- backend exposes `RegionsNode` enrichment fields (`likes`, `viewCount`, comments or equivalent);
- GraphQL schema includes federation fields.

Build:

- federated detail layout;
- field attribution chips;
- federation disclosure in Explainer Widget;
- backend source links.

Exit: demo proves one GraphQL type carrying Revisium-owned and backend-owned fields.

## Milestone 3: Complex Catalogs

Routes:

- `/items`
- `/heroes`

Build:

- JSON filter/sort panel;
- FK dropdown filters;
- numeric range filters;
- multi-key orderBy;
- file thumbnails;
- formulas in catalog cards.

Exit: evaluator can inspect filtering, sorting, pagination, FK filters, files, and formulas.

## Milestone 4: Rich Detail Pages

Routes:

- `/items/[id]`
- `/heroes/[id]`
- `/quests/[id]`
- `/parties/[id]`
- `/monsters/[id]`

Build:

- FK and array-FK resolution;
- embedded arrays;
- one-level and two-level formula panels;
- file previews;
- related entity links.

Exit: all schema modelling and formula rows in the coverage matrix have visible detail pages.

## Milestone 5: Remaining Dictionary Coverage

Routes:

- `/monsters`
- `/quests`
- `/parties`
- `/factions`
- `/factions/[id]`
- `/npcs`
- `/npcs/[id]`
- `/locations`
- `/locations/[id]`
- `/classes`
- `/abilities`

Build:

- complete dictionary navigation;
- crest, portrait, map, and icon file examples;
- reverse-FK and small-reference-table patterns.

Exit: dictionary coverage is complete.

## Milestone 6: Search And Branching

Routes:

- `/search`
- `/balance-patch`

Dependencies:

- search API path agreed;
- draft/head data difference exists;
- revision diff API shape confirmed.

Build:

- grouped full-text results;
- revision toggle;
- diff panel;
- Explainer Widget REST/MCP surfaces where available.

Exit: full-text search and branching/revisions are visible without docs.

## Milestone 7: CMS And Messaging

Routes:

- `/about`
- `/blog`
- `/blog/[slug]`
- `/news`
- `/news/[slug]`

Dependencies:

- CMS seed content;
- `news` table location decision;
- pinned launch post content.

Build:

- CMS landing sections;
- long-form about page;
- blog and news catalogs/details;
- markdown rendering;
- hero/OG image rendering.

Exit: public narrative is consistent across landing, about, news, blog, footer, and README.
