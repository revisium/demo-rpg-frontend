export interface NavigationItem {
  readonly label: string;
  readonly to: string;
}

export const primaryNavItems: readonly NavigationItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Heroes', to: '/heroes' },
  { label: 'Items', to: '/items' },
  { label: 'Monsters', to: '/monsters' },
  { label: 'World', to: '/regions' },
  { label: 'Quests', to: '/quests' },
  { label: 'Guides', to: '/blog' },
  { label: 'Search', to: '/search' },
] as const;

export const sectionNavItems = {
  heroes: [
    { label: 'Heroes', to: '/heroes' },
    { label: 'Classes', to: '/classes' },
    { label: 'Abilities', to: '/abilities' },
    { label: 'NPCs', to: '/npcs' },
    { label: 'Parties', to: '/parties' },
  ],
  items: [{ label: 'Items', to: '/items' }],
  quests: [{ label: 'Quests', to: '/quests' }],
  world: [
    { label: 'Regions', to: '/regions' },
    { label: 'Locations', to: '/locations' },
    { label: 'Factions', to: '/factions' },
  ],
} satisfies Record<string, readonly NavigationItem[]>;

export type SectionNavKey = keyof typeof sectionNavItems;
