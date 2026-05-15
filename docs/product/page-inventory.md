# Page Inventory

Canonical implementation list for `demo-rpg-frontend`.

The broader product inventory lives in `https://github.com/revisium/demo-rpg-docs/blob/master/products/branching-tales/page-inventory.md`.
This file is the frontend implementation contract: routes listed here are the
routes the frontend team is expected to build unless this document changes first.

## Status Legend

| Status | Meaning |
|---|---|
| Draft | Contract exists but still needs refinement before code. |
| Ready | Spec is detailed enough for implementation. |
| Blocked | Spec is meaningful, but a backend/schema/content dependency is missing. |
| In delivery | Implementation is underway. |
| Done | Implemented, tested, and reviewed against docs. |

## Routes

| Route | Spec | Data sources | Primary capability | Status |
|---|---|---|---|---|
| `/` | [home](./pages/home/README.md) | committed fallback copy now; planned `cms.landing_hero`, `cms.landing_features`, `cms.landing_testimonials`, optional `data.news` | CMS-driven landing, 80/20 message, capability navigation | In delivery |
| `/about` | [about](./pages/about/README.md) | messaging docs + static architecture content | Long-form architecture and "what Revisium did vs what we wrote" | Draft |
| `/regions` | [regions](./pages/regions/README.md) | `data.regions` | Reference catalog, localized strings, enum, totalCount, pagination | In delivery |
| `/regions/[id]` | [regions-id](./pages/regions-id/README.md) | `data.regions` + planned backend `RegionsNode` fields | Federation reference detail shell | In delivery |
| `/heroes` | [heroes](./pages/heroes/README.md) | `data.heroes`, `data.classes`, `data.regions`, `data.factions` | FK filters, formula string, portrait file field | Draft |
| `/heroes/[id]` | [heroes-id](./pages/heroes-id/README.md) | `data.heroes` + class/ability/item FKs | Single FK, array FK, embedded equipment, formulas, portrait | Draft |
| `/items` | [items](./pages/items/README.md) | `data.items`, `data.item_types`, `data.stats` | Complex where/orderBy, cursor pagination, SVG icons | Draft |
| `/items/[id]` | [items-id](./pages/items-id/README.md) | `data.items` + type/stat FKs | Formula fields, embedded modifiers, SVG icon | Draft |
| `/monsters` | [monsters](./pages/monsters/README.md) | `data.monsters`, `data.factions` | FK, embedded drops, formula counters, illustration | Draft |
| `/monsters/[id]` | [monsters-id](./pages/monsters-id/README.md) | `data.monsters`, `data.factions`, `data.abilities` | Array FK and drop formulas | Draft |
| `/quests` | [quests](./pages/quests/README.md) | `data.quests`, `data.npcs`, `data.locations` | FK catalog, level filter, repeatable flag | Draft |
| `/quests/[id]` | [quests-id](./pages/quests-id/README.md) | `data.quests`, `data.npcs`, `data.locations`, `data.items` | Two-level embedded arrays and formulas | Draft |
| `/parties` | [parties](./pages/parties/README.md) | `data.parties`, `data.heroes` | Array FK column and formula counters | Draft |
| `/parties/[id]` | [parties-id](./pages/parties-id/README.md) | `data.parties`, `data.heroes` | Array FK resolution, `member_count`, `is_full` | Draft |
| `/factions` | [factions](./pages/factions/README.md) | `data.factions` | Crest file, alignment enum | Draft |
| `/factions/[id]` | [factions-id](./pages/factions-id/README.md) | `data.factions`, related `data.heroes`, `data.monsters` | Reverse-FK aggregation and crest rendering | Draft |
| `/npcs` | [npcs](./pages/npcs/README.md) | `data.npcs`, `data.locations` | Portrait file, computed display label | Draft |
| `/npcs/[id]` | [npcs-id](./pages/npcs-id/README.md) | `data.npcs`, `data.locations` | Portrait file detail and location FK | Draft |
| `/locations` | [locations](./pages/locations/README.md) | `data.locations`, `data.regions` | Region FK and map preview | Draft |
| `/locations/[id]` | [locations-id](./pages/locations-id/README.md) | `data.locations`, `data.regions` | Large map file and dimensions metadata | Draft |
| `/classes` | [classes](./pages/classes/README.md) | `data.classes` | Small enum-like reference table | In delivery |
| `/abilities` | [abilities](./pages/abilities/README.md) | `data.abilities` | SVG icon catalog | Draft |
| `/search` | [search](./pages/search/README.md) | Revisium search across `demo-rpg-data` and `demo-rpg-cms` | Full-text search | Blocked |
| `/balance-patch` | [balance-patch](./pages/balance-patch/README.md) | `data.items` `master:head` vs `master:draft`, revision changes | Branching and revision diff | Blocked |
| `/blog` | [blog](./pages/blog/README.md) | `cms.blog_posts`, `cms.blog_authors` | CMS catalog and markdown content | Draft |
| `/blog/[slug]` | [blog-slug](./pages/blog-slug/README.md) | `cms.blog_posts`, `cms.blog_authors` | Markdown body, hero image, author avatar | Draft |
| `/news` | [news](./pages/news/README.md) | `data.news` or `cms.news` TBD | Pinned priority order, time-window filter, enum category | Blocked |
| `/news/[slug]` | [news-slug](./pages/news-slug/README.md) | `data.news` or `cms.news` TBD + optional backend enrichment | News detail and optional federation | Blocked |

## Update Rule

Every PR that adds, removes, renames, or materially changes a route updates this
file and the matching page spec first. If an implementation discovers that a
page needs a different data source, route name, or interaction model, pause and
change this inventory before continuing.
