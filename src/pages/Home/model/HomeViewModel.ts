import { makeAutoObservable } from 'mobx';

import type { IViewModel } from 'src/shared/config';
import { container } from 'src/shared/lib';

export interface HomeCapability {
  readonly title: string;
  readonly description: string;
  readonly label: string;
  readonly href: string;
  readonly status: 'live' | 'next' | 'blocked';
}

export interface HomeDemoPath {
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

export interface HomeSourceLink {
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

const capabilities: readonly HomeCapability[] = [
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

const demoPaths: readonly HomeDemoPath[] = [
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

const sourceLinks: readonly HomeSourceLink[] = [
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
    title: 'Docs repository',
    description: 'Product messaging, page inventory, and implementation notes.',
    href: 'https://github.com/revisium/demo-rpg-docs',
  },
];

export class HomeViewModel implements IViewModel {
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

  public get capabilities(): readonly HomeCapability[] {
    return capabilities;
  }

  public get demoPaths(): readonly HomeDemoPath[] {
    return demoPaths;
  }

  public get sourceLinks(): readonly HomeSourceLink[] {
    return sourceLinks;
  }
}

container.register(HomeViewModel, () => new HomeViewModel(), { scope: 'transient' });
