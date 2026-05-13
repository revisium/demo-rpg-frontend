# News Detail

| Field | Value |
|---|---|
| Route | `/news/[slug]` |
| Status | Blocked |
| Pattern | News detail |
| Primary capability | News body, cover file, optional federation |

## Purpose

Render a single news or patch-note entry and optionally demonstrate a second
federated entity after region detail.

## Context And Entry

- Entry from `/news`, home latest-news widget, blog/about links, and external posts.
- Links to related proof pages and the news source row.

## Functional Blocks

| Block | Requirement |
|---|---|
| Header | Category, title, `published_at`, pinned marker if relevant. |
| Cover image | Revisium file field. |
| Body | Markdown or structured rich text depending on schema. |
| Optional backend stats | Likes/viewCount/comments if `NewsNode` federation ships. |
| Explainer Widget | Required. |

## Primary Actions

| Action | Result |
|---|---|
| Back to news | Navigate to `/news`. |
| Open related proof page | Navigate to linked route from content. |
| Open cloud row | Open news row. |

## States

| State | Requirement |
|---|---|
| Loading | Article skeleton. |
| Loaded | News body and metadata render. |
| Not found | Back link. |
| Error | Retry. |

## Transitions

| From | Trigger | To |
|---|---|---|
| News catalog | Open post | Detail loading |
| Detail loaded | Back action | `/news` |
| Detail loaded | Capability CTA | Related proof page |

## Data Contract

| Source | Fields |
|---|---|
| `data.news` or `cms.news` TBD | slug, title, body, category, pinned, published_at, cover_image. |
| Optional backend `NewsNode` | likes/viewCount/comments. |

## Explainer Widget

- Summary: "News detail shows the source row for a published post and optional backend-enriched fields."
- Variables: slug and locale.
- Field attribution: source fields -> `data`/`cms`; optional stats -> `backend`.
- Deep links: news row/schema and federation source if used.
- Subgraphs: `data` or `cms`, plus optional `backend`.

## Responsive Rules

- Phone: metadata above body; widget accordion after header.
- Tablet: readable article column with the widget visible beside it.
- Desktop: article readable width with widget side panel.

## Architecture Notes

- Blocked until news schema and route source are confirmed.

## Acceptance Criteria

- [ ] Unknown slug renders not-found state.
- [ ] Cover file metadata appears in widget.
- [ ] Optional backend fields have clear attribution if present.

## Open Questions

- Confirm news body format and backend enrichment scope.
