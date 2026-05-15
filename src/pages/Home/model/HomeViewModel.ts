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

interface HomeCapabilityParams {
  readonly title: string;
  readonly description: string;
  readonly label: string;
  readonly href: string;
  readonly status: HomeCapabilityStatus;
}

interface HomeDemoPathParams {
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

interface HomeProofParams {
  readonly label: string;
  readonly value: string;
  readonly bg: string;
  readonly border: string;
  readonly color: string;
}

interface HomeSourceLinkParams {
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

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

const capabilityParams: readonly HomeCapabilityParams[] = [
  {
    title: 'Schema-first content',
    description: 'Browse typed RPG data from Revisium rows through the GraphQL router.',
    label: 'data.regions',
    href: '/regions',
    status: 'live',
  },
  {
    title: 'Reference catalogs',
    description: 'Inspect compact enum-like tables before larger catalogs are implemented.',
    label: 'data.classes',
    href: '/classes',
    status: 'live',
  },
  {
    title: 'Federation proof',
    description: 'Follow the region detail shell where backend-owned fields will attach.',
    label: 'data + backend',
    href: '/regions/ashen-wastes',
    status: 'next',
  },
  {
    title: 'Branching revisions',
    description: 'Compare master and draft values once revision diff data is exposed.',
    label: 'branching',
    href: '/balance-patch',
    status: 'blocked',
  },
  {
    title: 'Three API surfaces',
    description: 'Use the source widget pattern to compare GraphQL, REST, and MCP paths.',
    label: 'GraphQL first',
    href: '/about',
    status: 'next',
  },
  {
    title: 'No glue-code catalogs',
    description: 'Move from rows to product pages with generated types and thin ViewModels.',
    label: 'MVVM',
    href: '/heroes',
    status: 'next',
  },
];

const demoPathParams: readonly HomeDemoPathParams[] = [
  {
    title: 'Browse live data',
    description: 'Start with localized regions and typed classes.',
    href: '/regions',
  },
  {
    title: 'Inspect entity details',
    description: 'Open a region row and see field ownership in context.',
    href: '/regions/ironcrest-mountains',
  },
  {
    title: 'Compare revisions',
    description: 'Reserved for balance and branch proof once the API is ready.',
    href: '/balance-patch',
  },
  {
    title: 'Read architecture',
    description: 'See what Revisium owns and what the frontend owns.',
    href: '/about',
  },
];

const proofParams: readonly HomeProofParams[] = [
  { label: 'Rows', value: 'demo-rpg-data', bg: 'blue.50', border: 'blue.200', color: 'blue.800' },
  { label: 'Schema', value: 'GraphQL types', bg: 'green.50', border: 'green.200', color: 'green.800' },
  { label: 'Pages', value: 'MVVM slices', bg: 'purple.50', border: 'purple.200', color: 'purple.800' },
  { label: 'Sources', value: 'Explainer widget', bg: 'orange.50', border: 'orange.200', color: 'orange.800' },
];

const sourceLinkParams: readonly HomeSourceLinkParams[] = [
  {
    title: 'Cloud data project',
    description: 'Open the Revisium data rows used by the live catalogs.',
    href: 'https://cloud.revisium.io/app/revisium/demo-rpg-data/master/draft/regions',
  },
  {
    title: 'Frontend repository',
    description: 'React Router, Chakra UI, MobX ViewModels, and generated GraphQL types.',
    href: 'https://github.com/revisium/demo-rpg-frontend',
  },
  {
    title: 'Backend repository',
    description: 'Federation and backend-owned enrichment fields planned for detail pages.',
    href: 'https://github.com/revisium/demo-rpg-backend',
  },
  {
    title: 'Docs repository',
    description: 'Product messaging, page inventory, and implementation notes.',
    href: 'https://github.com/revisium/demo-rpg-docs',
  },
];

export class HomeViewModel implements IViewModel {
  private readonly capabilityItems = capabilityParams.map((params) => new HomeCapabilityItemViewModel(params));
  private readonly demoPathItems = demoPathParams.map(
    (params, index) => new HomeDemoPathItemViewModel({ ...params, index }),
  );
  private readonly proofItems = proofParams.map((params, index) => new HomeProofItemViewModel({ ...params, index }));
  private readonly sourceLinkItems = sourceLinkParams.map((params) => new HomeSourceLinkItemViewModel(params));

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
