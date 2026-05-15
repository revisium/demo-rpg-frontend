# Design System And Layout

Branching Tales uses fantasy content, but the UI is a precise DevRel product
surface. The visual language should feel like a serious developer tool showing
a rich dataset, not a game landing page or decorative RPG interface.

## Visual Direction

The product direction is **Dark Tactical Atlas**.

The UI should feel like a modern tactical database and world atlas for a fantasy
RPG. It uses a dark, legible DevRel surface with a restrained game atmosphere:
region art, climate icons, maps, and source evidence carry the setting, while
navigation, controls, filters, tables, and widgets stay precise and quiet.

Core rules:

- Use a deep midnight navy base, not pure black.
- Add a subtle star-map or atlas-map layer behind page content when it helps the
  world feel less flat.
- Keep the star-map layer low contrast: tiny muted stars, faint constellation
  lines, and quiet grid marks only.
- Use cyan as the primary product accent for active navigation, focus, selected
  filters, and clickable proof states.
- Use teal and emerald as secondary accents for data-positive states.
- Do not use gold/yellow as a system color. It may appear only as a tiny
  content-specific rarity or illustration detail.
- Avoid beige, parchment, ornate frames, filigree, decorative fantasy borders,
  purple-blue gradient blobs, and one-note color themes.
- Icons are minimal one-tone or two-tone glyphs. Prefer simple line or filled
  silhouettes over detailed illustrations for UI chrome.

## Design Principles

- Dense but readable: prioritize scanning, comparison, and evidence.
- Restrained fantasy: names, art, climate icons, and maps carry the theme;
  chrome stays quiet.
- Every surface has a job: avoid decorative sections that do not help evaluation.
- Code and data examples are first-class UI, not afterthoughts.
- Accessibility and responsive behaviour are required, not polish.

## Layout System

| Area              | Requirement                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| App shell         | Sticky top nav, brand link, route groups, locale switcher, footer chip.                                         |
| Page header       | Title, one-sentence purpose, capability chips, optional primary CTA.                                            |
| Main content      | Catalog grid/table or detail content.                                                                           |
| Explainer control | Required on data pages; compact floating trigger with an overlay panel that does not reserve page layout space. |
| Footer            | Architecture chip and source links.                                                                             |

The top nav uses the primary destinations from the site map: Home, Data,
Search, Branching, About, and News. Secondary dictionary routes are reachable
from page content or stubs, not from the top nav.
The top nav remains pinned to the top edge while pages scroll so route changes
and primary navigation stay available on long catalog/detail pages.
The page keeps native scrolling and browser scrollbar affordance. Internal code
and JSON panels may expose their own scroll affordance when needed.
The app shell uses a dark translucent surface over the page atlas background.
Active navigation uses a cyan underline or outlined pill, with no layout shift
between active and inactive states.

## Breakpoints

| Breakpoint     | Rule                                                                             |
| -------------- | -------------------------------------------------------------------------------- |
| `<= 480px`     | Single column, floating widget trigger, filter bottom sheet, 16px page gutters.  |
| `481px-1023px` | Main content column with floating widget trigger, 24px gutters.                  |
| `>= 1024px`    | Main content, floating widget trigger, max content width `1440px`, 32px gutters. |

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

| Token                    | Default     | Usage                                             |
| ------------------------ | ----------- | ------------------------------------------------- |
| `--color-bg`             | `#0b1118`   | Page background.                                  |
| `--color-bg-deep`        | `#070b10`   | Deep shell areas and page edges.                  |
| `--color-bg-atlas`       | `#101923`   | Star-map/atlas overlay base.                      |
| `--color-surface`        | `#121820`   | Cards, panels, popovers.                          |
| `--color-surface-raised` | `#17212b`   | Hovered cards, active controls, elevated panels.  |
| `--color-surface-muted`  | `#0f151d`   | Secondary panels, table rows, inactive tabs.      |
| `--color-text`           | `#f4f7f8`   | Primary text.                                     |
| `--color-text-muted`     | `#9aa7b1`   | Secondary text.                                   |
| `--color-text-subtle`    | `#6f7f8b`   | Metadata, helper text, inactive nav.              |
| `--color-border`         | `#2a3038`   | Borders and dividers.                             |
| `--color-border-strong`  | `#3a4652`   | Active panels and table headers.                  |
| `--color-accent`         | `#22d3ee`   | Primary actions, active state, selected filters.  |
| `--color-accent-strong`  | `#67e8f9`   | Hover/pressed accent and focus rings.             |
| `--color-accent-muted`   | `#0e7490`   | Filled accent surfaces and quiet badges.          |
| `--color-positive`       | `#34d399`   | Success, available, loaded, data-positive states. |
| `--color-data`           | `#38bdf8`   | `data` subgraph chip.                             |
| `--color-cms`            | `#2dd4bf`   | `cms` subgraph chip.                              |
| `--color-backend`        | `#a78bfa`   | `backend` subgraph chip.                          |
| `--color-danger`         | `#fb7185`   | Error states.                                     |
| `--color-arid`           | `#f97316`   | Arid climate content accent only.                 |
| `--color-alpine`         | `#93c5fd`   | Alpine climate content accent.                    |
| `--color-forest`         | `#4ade80`   | Forest climate content accent.                    |
| `--color-coastal`        | `#22d3ee`   | Coastal climate content accent.                   |
| `--color-marsh`          | `#14b8a6`   | Marsh climate content accent.                     |
| `--radius-sm`            | `4px`       | Inputs, chips.                                    |
| `--radius-md`            | `8px`       | Cards, panels.                                    |
| `--space-1..8`           | `4px` steps | Spacing scale.                                    |

Do not let the UI collapse into one dominant hue. The palette combines neutral
surfaces, cyan actions, blue/teal/purple subgraph chips, climate accents, and
red errors. Yellow/gold is not part of the system palette.

## Backgrounds

The default page background is a dark atlas field:

- Base fill uses `--color-bg`.
- A subtle star-map layer may add tiny points, faint constellation lines, and
  low-opacity map/grid marks.
- The atlas layer must never reduce text contrast or compete with data panels.
- Avoid large glowing orbs, bokeh blobs, strong gradients, and decorative SVG
  scenery.
- Cards and panels sit on solid or lightly translucent slate surfaces so text
  remains stable over the atlas.

The star-map treatment is atmospheric, not illustrative. It should make the
world feel present while the product UI remains the first read.

## Typography

- Use system UI fonts for app chrome and content.
- Use a monospace font for GraphQL, JSON, REST, MCP, and code panels.
- Do not scale font size with viewport width.
- Letter spacing stays `0`.
- Compact surfaces use compact headings; reserve large type for page-level heroes only.

## Components

| Component        | Requirement                                                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Buttons          | Text for clear commands; icon buttons only with accessible labels/tooltips.                                                                                       |
| Links            | Underline or clear affordance in prose; route cards may use block links.                                                                                          |
| Cards            | Max radius `8px`; no card-inside-card layouts.                                                                                                                    |
| Catalog cards    | Use restrained hover lift, cyan border shift, and media scale to clarify clickability without changing layout dimensions.                                         |
| Tables           | Sticky header only when useful; preserve keyboard readability.                                                                                                    |
| Chips            | Short labels for capabilities, subgraphs, statuses, and enums.                                                                                                    |
| Tabs             | Used for GraphQL/REST/MCP surfaces and dense view switches.                                                                                                       |
| Code panels      | Scroll internally, copy action, language label, accessible focus.                                                                                                 |
| Bottom sheets    | Mobile filters only; must be dismissible by button and Escape.                                                                                                    |
| Explainer Widget | Uses a compact floating source-reference trigger; expanded panel has tinted surface, strong Revisium header, close control, and explicit cloud/source link block. |

### Icons And Logo

- App and UI icons are minimal one-tone or two-tone glyphs.
- Use line icons or simple filled silhouettes for navigation, filters, climate,
  settings, and source actions.
- Avoid ornate fantasy symbols, detailed crest art, and multi-color icons in
  app chrome.
- The logo may use a compact square mark plus text. The mark should work in
  one color and in a two-tone cyan/slate variant.
- Content art can be rich, but controls and metadata icons stay quiet.

## Data Visual Treatment

- Catalogs use cards when imagery or summaries matter; tables when comparison matters.
- Region catalogs use atlas cards: landscape image first, data block second,
  climate glyph and source chip visible without opening the detail page.
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
