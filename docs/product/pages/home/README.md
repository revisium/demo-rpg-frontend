# Home Page

| Field | Value |
|---|---|
| Route | `/` |
| Status | Draft |
| Pattern | Narrative + CMS landing |
| Primary capability | CMS-driven landing, 80/20 messaging, capability navigation |

## Purpose

Introduce Branching Tales as a Revisium evaluation demo and route visitors to
the fastest proof page for each major capability.

## Context And Entry

- Entry point from DevRel posts, README links, and direct demo URL.
- Links to `/regions`, `/items`, `/heroes`, `/balance-patch`, `/search`, `/about`, `/blog`, and `/news`.
- Uses the messaging source from `https://github.com/revisium/demo-rpg-docs/blob/master/products/branching-tales/messaging.md`.

## Functional Blocks

| Block | Requirement |
|---|---|
| Hero | Brand name, 80/20 subtitle, primary CTA to `/regions`, secondary CTA to `/about`. |
| Capability map | Cards for schema-first content, federation, branching, three APIs, no glue code. |
| Demo paths | Short route groups: browse data, inspect formulas/files, compare revisions, read architecture. |
| Latest news | Shows pinned/latest news once `news` data source exists. |
| Source links | Links to frontend, backend, docs, and cloud projects. |
| Optional Explainer Widget | Required beside live CMS/data sections once they fetch from Revisium. |

## Primary Actions

| Action | Result |
|---|---|
| Browse regions | Navigate to `/regions`. |
| How this works | Navigate to `/about`. |
| Open a capability card | Navigate to the canonical page for that capability. |
| Open source link | Open GitHub or cloud source in a new tab. |

## States

| State | Requirement |
|---|---|
| CMS loading | Render hero shell and stable card placeholders. |
| CMS loaded | Render CMS text/images and route cards. |
| CMS empty | Fall back to committed brand copy and show no broken sections. |
| CMS error | Show the page with fallback copy and a small status note; do not block navigation. |

## Transitions

| From | Trigger | To |
|---|---|---|
| Initial | CMS data resolves | Loaded landing |
| Loaded | Capability card click | Target route |
| Loaded | Latest news click | `/news/[slug]` |

## Data Contract

| Source | Fields |
|---|---|
| `cms.landing_hero` | `title`, `subtitle`, `cta`, `secondary_cta`, optional `bg_image`. |
| `cms.landing_features` | ordered feature cards for the five message points. |
| `cms.landing_testimonials` | optional composite quotes. |
| `data.news` or CMS news TBD | pinned/latest launch post. |

## Explainer Widget

- Required only for sections backed by live Revisium CMS/data.
- Summary: "This landing page is assembled from Revisium CMS rows and links to every capability proof page."
- Surfaces: GraphQL; REST/MCP only if CMS equivalents exist.
- Deep links: CMS landing tables and news row.
- Subgraphs: `cms`; include `data` if latest news uses `data.news`.

## Responsive Rules

- Phone: hero, CTA group, and first capability links visible without horizontal scroll.
- Tablet: hero plus capability cards in two columns.
- Desktop: constrained hero, dense capability grid, source links visible below first viewport hint.

## Architecture Notes

- Page slice: `src/pages/Home/` when home leaves the route module.
- The current `_index.tsx` shell is temporary and should be replaced by MVVM once CMS data is fetched.
- Do not hardcode CMS-managed feature copy after CMS tables are ready.

## Acceptance Criteria

- [ ] Visitor can reach a proof page for every headline capability from the home page.
- [ ] Landing copy matches the messaging source.
- [ ] CMS failure does not prevent route navigation.
- [ ] Page works on phone, tablet, and desktop.

## Open Questions

- Confirm whether latest news is `data.news` or a CMS table.
