# Design System And Layout

Branching Tales uses fantasy content, but the UI is a precise DevRel product
surface. The visual language should feel like a serious developer tool showing
a rich dataset, not a game landing page or decorative RPG interface.

## Design Principles

- Dense but readable: prioritize scanning, comparison, and evidence.
- Restrained fantasy: names, portraits, icons, and maps carry the theme; chrome stays quiet.
- Every surface has a job: avoid decorative sections that do not help evaluation.
- Code and data examples are first-class UI, not afterthoughts.
- Accessibility and responsive behaviour are required, not polish.

## Layout System

| Area | Requirement |
|---|---|
| App shell | Sticky top nav, brand link, route groups, locale switcher, footer chip. |
| Page header | Title, one-sentence purpose, capability chips, optional primary CTA. |
| Main content | Catalog grid/table or detail content. |
| Explainer control | Required on data pages; compact floating trigger with an overlay panel that does not reserve page layout space. |
| Footer | Architecture chip and source links. |

The top nav uses the primary destinations from the site map: Home, Data,
Search, Branching, About, and News. Secondary dictionary routes are reachable
from page content or stubs, not from the top nav.
The top nav remains pinned to the top edge while pages scroll so route changes
and primary navigation stay available on long catalog/detail pages.
The page keeps native scrolling and browser scrollbar affordance. Internal code
and JSON panels may expose their own scroll affordance when needed.

## Breakpoints

| Breakpoint | Rule |
|---|---|
| `<= 480px` | Single column, floating widget trigger, filter bottom sheet, 16px page gutters. |
| `481px-1023px` | Main content column with floating widget trigger, 24px gutters. |
| `>= 1024px` | Main content, floating widget trigger, max content width `1440px`, 32px gutters. |

No page-level horizontal scroll. Fixed-format widgets use stable dimensions via
grid tracks, min/max widths, or aspect ratios.

## Chakra UI

Implementation uses Chakra UI components and responsive style props for layout,
spacing, semantic states, and controls. Do not add route-level CSS files for
page layout; page slices should compose Chakra primitives and only introduce a
local CSS file when a browser feature cannot be expressed through Chakra props.

## Tokens

Use Chakra theme tokens or raw values that map to the semantic palette below.
Exact values may evolve, but the semantic intent stays stable once implemented.

| Token | Default | Usage |
|---|---|---|
| `--color-bg` | `#f7f7f4` | Page background. |
| `--color-surface` | `#ffffff` | Cards, panels, popovers. |
| `--color-surface-muted` | `#eef1ed` | Secondary panels and inactive tabs. |
| `--color-text` | `#17201b` | Primary text. |
| `--color-text-muted` | `#5f6b63` | Secondary text. |
| `--color-border` | `#d8ddd7` | Borders and dividers. |
| `--color-accent` | `#246b54` | Primary actions, active state. |
| `--color-accent-strong` | `#154b3a` | Hover/pressed accent. |
| `--color-data` | `#2f6fbb` | `data` subgraph chip. |
| `--color-cms` | `#8a5a16` | `cms` subgraph chip. |
| `--color-backend` | `#7a4fb0` | `backend` subgraph chip. |
| `--color-danger` | `#b42318` | Error states. |
| `--radius-sm` | `4px` | Inputs, chips. |
| `--radius-md` | `8px` | Cards, panels. |
| `--space-1..8` | `4px` steps | Spacing scale. |

Do not let the UI collapse into one dominant hue. The palette combines neutral
surfaces, green actions, blue/copper/purple subgraph chips, and red errors.

## Typography

- Use system UI fonts for app chrome and content.
- Use a monospace font for GraphQL, JSON, REST, MCP, and code panels.
- Do not scale font size with viewport width.
- Letter spacing stays `0`.
- Compact surfaces use compact headings; reserve large type for page-level heroes only.

## Components

| Component | Requirement |
|---|---|
| Buttons | Text for clear commands; icon buttons only with accessible labels/tooltips. |
| Links | Underline or clear affordance in prose; route cards may use block links. |
| Cards | Max radius `8px`; no card-inside-card layouts. |
| Catalog cards | Use restrained hover lift, border-color shift, and media scale to clarify clickability without changing layout dimensions. |
| Tables | Sticky header only when useful; preserve keyboard readability. |
| Chips | Short labels for capabilities, subgraphs, statuses, and enums. |
| Tabs | Used for GraphQL/REST/MCP surfaces and dense view switches. |
| Code panels | Scroll internally, copy action, language label, accessible focus. |
| Bottom sheets | Mobile filters only; must be dismissible by button and Escape. |
| Explainer Widget | Uses a compact floating source-reference trigger; expanded panel has tinted surface, strong Revisium header, close control, and explicit cloud/source link block. |

## Data Visual Treatment

- Catalogs use cards when imagery or summaries matter; tables when comparison matters.
- Detail pages group fields by meaning: identity, schema fields, computed fields, related rows, files.
- File previews reserve stable aspect ratios before images load.
- Formula fields are visually labelled as computed.
- Federated fields show visible subgraph attribution on reference pages.

## Accessibility Baseline

- WCAG 2.2 AA target.
- All interactive controls have visible focus states.
- Touch targets are at least `44px` on mobile.
- Color is never the only state indicator.
- Respect `prefers-reduced-motion`.
- Modals, sheets, accordions, and tabs use correct ARIA patterns.
- Error messages identify the problem and recovery action.
