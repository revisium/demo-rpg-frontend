import { makeAutoObservable } from 'mobx';

import { container } from 'src/shared/lib';
import type { IViewModel } from 'src/shared/config';
import type { ExplainerDescriptor } from 'src/widgets/explainer-widget';
import { RegionsDataSource, type RegionNode } from '../api/RegionsDataSource';
import { RegionItemViewModel, type RegionLocale } from './RegionItemViewModel';

const REGIONS_QUERY = `query Regions($data: Demo_rpg_dataGetRegionsesInput) {
  regionses(data: $data) {
    edges {
      cursor
      node {
        id
        versionId
        createdAt
        publishedAt
        data {
          climate
          name { en ru zh }
          description { en ru zh }
        }
      }
    }
    pageInfo { endCursor hasNextPage }
    totalCount
  }
}`;

export class RegionsViewModel implements IViewModel {
  public readonly canLoadMore = false;
  public locale: RegionLocale = 'en';
  public activeClimate: string | null = null;
  private readonly itemCache = new Map<string, RegionItemViewModel>();
  private readonly loadedItems: RegionNode[] = [];

  constructor(public readonly dataSource: RegionsDataSource) {
    makeAutoObservable<this, 'itemCache' | 'loadedItems'>(this, {
      itemCache: false,
      loadedItems: false,
    }, { autoBind: true });
  }

  public setup(): void {
    // intentionally empty — RegionsPage has no per-route setup state
  }

  public async mount(): Promise<void> {
    if (this.dataSource.request.isLoaded || this.dataSource.request.isLoading) return;
    await this.loadInitial();
  }

  public unmount(): void {
    this.dataSource.reset();
    this.loadedItems.length = 0;
    this.itemCache.clear();
  }

  public get items(): readonly RegionItemViewModel[] {
    return this.visibleNodes.map((node) => this.getItemViewModel(node));
  }

  public get totalCount(): number {
    return this.dataSource.request.data?.totalCount ?? this.loadedItems.length;
  }

  public get visibleCount(): number {
    return this.visibleNodes.length;
  }

  public get hasNextPage(): boolean {
    return this.dataSource.request.data?.pageInfo.hasNextPage ?? false;
  }

  public get showLoading(): boolean {
    return this.dataSource.request.isLoading && !this.dataSource.request.isLoaded;
  }

  public get showRefreshing(): boolean {
    return this.dataSource.request.isLoading && this.dataSource.request.isLoaded;
  }

  public get showError(): boolean {
    return Boolean(this.dataSource.request.error);
  }

  public get showEmpty(): boolean {
    return this.dataSource.request.isLoaded && this.visibleNodes.length === 0 && !this.showError;
  }

  public get showList(): boolean {
    return this.visibleNodes.length > 0;
  }

  public get climates(): readonly string[] {
    return [...new Set(this.loadedItems.map((item) => item.data.climate))].sort((left, right) =>
      left.localeCompare(right),
    );
  }

  public get activeFilterLabel(): string {
    return this.activeClimate ?? 'All climates';
  }

  public get hasActiveFilter(): boolean {
    return this.activeClimate !== null;
  }

  public get explainer(): ExplainerDescriptor {
    return {
      summary:
        'Regions show how localized JSON fields become a typed GraphQL catalog with enum-like climate values and connection metadata.',
      surfaces: {
        graphql: {
          operationName: 'Regions',
          request: REGIONS_QUERY,
        },
      },
      variables: this.currentVariables,
      responseSample: this.responseSample,
      subgraphsInUse: ['data'],
      deepLinks: {
        cloudTable: 'https://cloud.revisium.io',
        cloudSchema: 'https://cloud.revisium.io',
      },
      localeFallbacks: this.localeFallbacks,
      footerNote:
        'The browser calls the same-origin /graphql endpoint; Vite proxies it to the federated router during local development.',
    };
  }

  public setLocale(locale: RegionLocale): void {
    this.locale = locale;
  }

  public setClimate(climate: string | null): void {
    this.activeClimate = climate;
  }

  public resetFilters(): void {
    this.activeClimate = null;
  }

  public async retry(): Promise<void> {
    await this.loadInitial();
  }

  public async loadMore(): Promise<void> {
    if (!this.canLoadMore) return;
    const result = await this.dataSource.request.fetch();
    if (result.ok) {
      this.loadedItems.push(...result.value.items);
    }
  }

  private async loadInitial(): Promise<void> {
    this.loadedItems.length = 0;
    this.itemCache.clear();
    const result = await this.dataSource.request.fetch();
    if (result.ok) {
      this.loadedItems.push(...result.value.items);
    }
  }

  private getItemViewModel(node: RegionNode): RegionItemViewModel {
    const cached = this.itemCache.get(node.id);
    if (cached) return cached;

    const item = new RegionItemViewModel(node, () => this.locale);
    this.itemCache.set(node.id, item);
    return item;
  }

  private get visibleNodes(): readonly RegionNode[] {
    if (this.activeClimate === null) return this.loadedItems;
    return this.loadedItems.filter((node) => node.data.climate === this.activeClimate);
  }

  private get currentVariables(): Record<string, unknown> {
    return {
      data: null,
      locale: this.locale,
      climateFilter: this.activeClimate,
      filterMode: 'client-side until regionses(data) is available',
      pageInfo: this.dataSource.request.data?.pageInfo ?? null,
    };
  }

  private get responseSample(): Record<string, unknown> | null {
    if (!this.dataSource.request.data) return null;
    return {
      totalCount: this.totalCount,
      visibleCount: this.visibleCount,
      pageInfo: this.dataSource.request.data.pageInfo,
      edges: this.visibleNodes.slice(0, 3).map((node) => ({
        id: node.id,
        climate: node.data.climate,
        name: node.data.name[this.locale],
      })),
    };
  }

  private get localeFallbacks(): ExplainerDescriptor['localeFallbacks'] {
    return this.visibleNodes.flatMap((node) => {
      const fallbacks: {
        readonly path: string;
        readonly requestedLocale: RegionLocale;
        readonly renderedLocale: RegionLocale;
      }[] = [];
      if (!node.data.name[this.locale]) {
        fallbacks.push({
          path: `regions.${node.id}.data.name`,
          requestedLocale: this.locale,
          renderedLocale: 'en',
        });
      }
      if (!node.data.description[this.locale]) {
        fallbacks.push({
          path: `regions.${node.id}.data.description`,
          requestedLocale: this.locale,
          renderedLocale: 'en',
        });
      }
      return fallbacks;
    });
  }
}

container.register(
  RegionsViewModel,
  () => new RegionsViewModel(container.get(RegionsDataSource)),
  { scope: 'transient' },
);
