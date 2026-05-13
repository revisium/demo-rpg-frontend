# Feature Map

This map answers "which feature is demonstrated where?" It is the planning and
QA bridge between the product coverage matrix and frontend implementation.

## Revisium Capabilities

| Capability | Primary route | Supporting routes | Required proof in UI |
|---|---|---|---|
| JSON Schema to GraphQL types | `/regions` | all data pages | GraphQL query and typed response in Explainer Widget. |
| Nested JSON objects | `/regions` | `/items`, `/quests/[id]` | Nested `data.name`, `data.description`, or nested arrays visible. |
| Localized strings | `/regions` | all localized pages | Locale switch updates visible content and widget query/variables. |
| Enum fields | `/regions` | `/items`, `/factions`, `/news` | Enum chip/filter and schema explanation. |
| Single FK | `/items/[id]` | `/heroes/[id]`, `/monsters/[id]`, `/locations` | Referenced row label/link and cloud deep link. |
| Array FK | `/parties/[id]` | `/heroes/[id]`, `/monsters/[id]` | Array of resolved referenced rows. |
| Embedded array | `/heroes/[id]` | `/items/[id]`, `/monsters/[id]` | Inline array rendered without separate table. |
| Two-level embedded array | `/quests/[id]` | none | `steps[].rewards[]` visible and explained. |
| Scalar formula | `/items/[id]` | `/items` | Formula output labelled as computed. |
| Boolean formula | `/heroes/[id]` | `/parties/[id]` | Badge driven by API formula field. |
| Count formula | `/parties/[id]` | `/quests/[id]`, `/monsters/[id]` | Count shown with expression in widget. |
| Sum/avg formula | `/quests/[id]` | `/heroes/[id]`, `/monsters/[id]` | Formula panel maps output to source arrays. |
| File field: SVG icon | `/items` | `/abilities`, `/factions` | Icon/crest rendered and file metadata shown. |
| File field: PNG portrait | `/heroes/[id]` | `/npcs/[id]` | Portrait and file metadata shown. |
| File field: map/image | `/locations/[id]` | `/monsters/[id]` | Image dimensions reserve layout. |
| `where` filters | `/items` | `/heroes`, `/quests`, `/news` | Live JSON filter payload. |
| Multi-key `orderBy` | `/items` | `/news` | Visible `orderBy` array and sorted result. |
| Cursor pagination | `/regions` | all catalogs | `pageInfo`/cursor visible in widget. |
| `totalCount` | `/regions` | other supported catalogs | "Showing N of total" visible. |
| Full-text search | `/search` | global shell | Results grouped by table/project. |
| Branch `head` vs `draft` | `/balance-patch` | optional `/items` banner | Revision URI toggle and data delta. |
| Revision diff | `/balance-patch` | none | `get_revision_changes` summary visible. |
| Public read access | every data page | footer | Widget note and copyable public request. |

## Federation And API Surface

| Capability | Primary route | Required proof in UI |
|---|---|---|
| Revisium + backend fields on one entity | `/regions/[id]` | One card shows `data` fields and `backend` fields with visible subgraph chips. |
| Backend-owned list field | `/regions/[id]` | Comments or equivalent list labelled as backend-owned. |
| `@requires` candidate | `/items/[id]` | Only implement after backend schema supports it. |
| Auto-generated SDL | footer or `/about` | Link to composed SDL or source explanation. |
| GraphQL operation | every page | Query body in widget. |
| REST equivalent | catalog/detail pages | REST tab or link when backend exposes equivalent. |
| MCP equivalent | catalog/detail pages | MCP tool name and arguments when available. |
| Same-origin `/graphql` | every page | Widget/footer note. |

## Messaging And CMS

| Surface | Route | Requirement |
|---|---|---|
| Landing hero | `/` | Uses canonical 80/20 copy. |
| Capability cards | `/` | One card per message point. |
| Architecture story | `/about` | What Revisium did vs what we wrote. |
| Blog welcome essay | `/blog/[slug]` | Long-form CMS markdown. |
| Pinned launch post | `/news/[slug]` | News row with pinned-first ordering. |
| Footer chip | every page | Stack composition and link to `/about`. |

## Delivery Rule

A capability is not done when a field merely renders. It is done only when:

- the relevant route is implemented;
- the page spec status is `Done`;
- the Explainer Widget names the capability;
- the request, variables, response sample, and cloud/source links are visible;
- the review checklist is satisfied.
