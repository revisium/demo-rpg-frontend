import { makeAutoObservable } from 'mobx';

import type { IViewModel } from 'src/shared/config';
import { container } from 'src/shared/lib';
import { HomeCapabilityItemViewModel, type HomeCapabilityStatus } from './HomeCapabilityItemViewModel';
import { HomeDemoPathItemViewModel } from './HomeDemoPathItemViewModel';
import { HomeProofItemViewModel } from './HomeProofItemViewModel';
import { HomeSourceLinkItemViewModel } from './HomeSourceLinkItemViewModel';

interface HomeCta {
  readonly label: string;
  readonly href: string;
}

interface HomeHeroBadge {
  readonly label: string;
  readonly palette: 'blue' | 'green' | 'purple';
}

interface HomeHeroContent {
  readonly badges: readonly HomeHeroBadge[];
  readonly title: string;
  readonly subtitle: string;
  readonly primaryCta: HomeCta;
  readonly secondaryCta: HomeCta;
  readonly fallbackNote: string;
  readonly fallbackLink: HomeCta;
}

interface HomeSectionContent {
  readonly title: string;
  readonly description?: string;
}

type CapabilityRow = readonly [title: string, description: string, label: string, href: string, status: HomeCapabilityStatus];
type DemoPathRow = readonly [title: string, description: string, href: string];
type ProofRow = readonly [label: string, value: string, bg: string, border: string, color: string];
type SourceLinkRow = readonly [title: string, description: string, href: string];

const heroContent: HomeHeroContent = {
  badges: [
    { label: 'data', palette: 'blue' },
    { label: 'cms ready', palette: 'purple' },
    { label: 'GraphQL', palette: 'green' },
  ],
  title: 'Branching Tales',
  subtitle:
    'A focused Revisium evaluation demo: prove schema-first content, generated GraphQL contracts, branching data, and federation without turning the frontend into a glue-code layer.',
  primaryCta: { label: 'Browse regions', href: '/regions' },
  secondaryCta: { label: 'How this works', href: '/about' },
  fallbackNote:
    'CMS-backed landing copy is not connected yet, so this page renders committed fallback copy and keeps navigation available.',
  fallbackLink: { label: 'Start with the live catalog.', href: '/regions' },
};

const capabilitySection: HomeSectionContent = {
  title: 'Capability map',
  description:
    'Each card points to the fastest page for proving one product claim. Live routes are usable now; next and blocked routes keep their implementation status visible.',
};

const demoPathsSection: HomeSectionContent = {
  title: 'Demo paths',
  description: 'Use these routes as a short evaluation path through the current product surface.',
};

const sourceLinksSection: HomeSectionContent = {
  title: 'Source links',
};

const demoPathsCta: HomeCta = {
  label: 'Start with regions',
  href: '/regions',
};

const capabilityRows: readonly CapabilityRow[] = [
  ['Schema-first content', 'Browse typed RPG data from Revisium rows through the GraphQL router.', 'data.regions', '/regions', 'live'],
  [
    'Reference catalogs',
    'Inspect compact enum-like tables before larger catalogs are implemented.',
    'data.classes',
    '/classes',
    'live',
  ],
  [
    'Federation proof',
    'Follow the region detail shell where backend-owned fields will attach.',
    'data + backend',
    '/regions/ashen-wastes',
    'next',
  ],
  [
    'Branching revisions',
    'Compare master and draft values once revision diff data is exposed.',
    'branching',
    '/balance-patch',
    'blocked',
  ],
  [
    'Three API surfaces',
    'Use the source widget pattern to compare GraphQL, REST, and MCP paths.',
    'GraphQL first',
    '/about',
    'next',
  ],
  [
    'No glue-code catalogs',
    'Move from rows to product pages with generated types and thin ViewModels.',
    'MVVM',
    '/heroes',
    'next',
  ],
];

const demoPathRows: readonly DemoPathRow[] = [
  ['Browse live data', 'Start with localized regions and typed classes.', '/regions'],
  ['Inspect entity details', 'Open a region row and see field ownership in context.', '/regions/ironcrest-mountains'],
  ['Compare revisions', 'Reserved for balance and branch proof once the API is ready.', '/balance-patch'],
  ['Read architecture', 'See what Revisium owns and what the frontend owns.', '/about'],
];

const proofRows: readonly ProofRow[] = [
  ['Rows', 'demo-rpg-data', 'blue.50', 'blue.200', 'blue.800'],
  ['Schema', 'GraphQL types', 'green.50', 'green.200', 'green.800'],
  ['Pages', 'MVVM slices', 'purple.50', 'purple.200', 'purple.800'],
  ['Sources', 'Explainer widget', 'orange.50', 'orange.200', 'orange.800'],
];

const sourceLinkRows: readonly SourceLinkRow[] = [
  ['Cloud data project', 'Open the Revisium data rows used by the live catalogs.', 'https://cloud.revisium.io/app/revisium/demo-rpg-data/master/draft/regions'],
  ['Frontend repository', 'React Router, Chakra UI, MobX ViewModels, and generated GraphQL types.', 'https://github.com/revisium/demo-rpg-frontend'],
  ['Backend repository', 'Federation and backend-owned enrichment fields planned for detail pages.', 'https://github.com/revisium/demo-rpg-backend'],
  ['Docs repository', 'Product messaging, page inventory, and implementation notes.', 'https://github.com/revisium/demo-rpg-docs'],
];

export class HomeViewModel implements IViewModel {
  private readonly capabilityItems = capabilityRows.map(
    ([title, description, label, href, status]) =>
      new HomeCapabilityItemViewModel({ title, description, label, href, status }),
  );
  private readonly demoPathItems = demoPathRows.map(
    ([title, description, href], index) => new HomeDemoPathItemViewModel({ title, description, href, index }),
  );
  private readonly proofItems = proofRows.map(
    ([label, value, bg, border, color], index) => new HomeProofItemViewModel({ label, value, bg, border, color, index }),
  );
  private readonly sourceLinkItems = sourceLinkRows.map(
    ([title, description, href]) => new HomeSourceLinkItemViewModel({ title, description, href }),
  );

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public setup(): void {
    // Home currently renders committed fallback copy while CMS tables are pending.
  }

  public mount(): void {
    // No live CMS request yet.
  }

  public unmount(): void {
    // No subscriptions to dispose.
  }

  public get hero(): HomeHeroContent {
    return heroContent;
  }

  public get capabilitySection(): HomeSectionContent {
    return capabilitySection;
  }

  public get demoPathsSection(): HomeSectionContent {
    return demoPathsSection;
  }

  public get sourceLinksSection(): HomeSectionContent {
    return sourceLinksSection;
  }

  public get demoPathsCta(): HomeCta {
    return demoPathsCta;
  }

  public get capabilities(): readonly HomeCapabilityItemViewModel[] {
    return this.capabilityItems;
  }

  public get demoPaths(): readonly HomeDemoPathItemViewModel[] {
    return this.demoPathItems;
  }

  public get proofNodes(): readonly HomeProofItemViewModel[] {
    return this.proofItems;
  }

  public get sourceLinks(): readonly HomeSourceLinkItemViewModel[] {
    return this.sourceLinkItems;
  }
}

container.register(HomeViewModel, () => new HomeViewModel(), { scope: 'transient' });
