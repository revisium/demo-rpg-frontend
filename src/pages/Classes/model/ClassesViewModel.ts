import { makeAutoObservable } from 'mobx';

import type { IViewModel } from 'src/shared/config';
import { container } from 'src/shared/lib';
import type { ExplainerDescriptor } from 'src/widgets/explainer-widget';
import { ClassesDataSource, type ClassNode } from '../api/ClassesDataSource';
import { ClassItemViewModel, type ClassLocale } from './ClassItemViewModel';

const CLASSES_QUERY = `query Classes($data: Demo_rpg_dataGetClassesesInput) {
  classeses(data: $data) {
    edges {
      cursor
      node {
        id
        versionId
        createdAt
        publishedAt
        data {
          base_hp
          hp_per_level
          mp_per_level
          primary_stat
          name { en ru zh }
          description { en ru zh }
        }
      }
    }
    pageInfo { endCursor hasNextPage }
    totalCount
  }
}`;

export class ClassesViewModel implements IViewModel {
  public locale: ClassLocale = 'en';
  private readonly itemCache = new Map<string, ClassItemViewModel>();
  private readonly loadedItems: ClassNode[] = [];

  constructor(public readonly dataSource: ClassesDataSource) {
    makeAutoObservable<this, 'itemCache' | 'loadedItems'>(this, {
      itemCache: false,
      loadedItems: false,
    }, { autoBind: true });
  }

  public setup(): void {
    // Classes has no route params yet.
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

  public get items(): readonly ClassItemViewModel[] {
    return this.loadedItems.map((node) => this.getItemViewModel(node));
  }

  public get totalCount(): number {
    return this.dataSource.request.data?.totalCount ?? this.loadedItems.length;
  }

  public get visibleCount(): number {
    return this.loadedItems.length;
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
    return this.dataSource.request.isLoaded && this.loadedItems.length === 0 && !this.showError;
  }

  public get showList(): boolean {
    return this.loadedItems.length > 0;
  }

  public get explainer(): ExplainerDescriptor {
    return {
      summary:
        'Classes show a small Revisium reference table used as a foreign-key target by heroes.',
      surfaces: {
        graphql: {
          operationName: 'Classes',
          request: CLASSES_QUERY,
        },
      },
      variables: {
        data: null,
        locale: this.locale,
        pageInfo: this.dataSource.request.data?.pageInfo ?? null,
      },
      responseSample: this.responseSample,
      subgraphsInUse: ['data'],
      deepLinks: {
        cloudTable: 'https://cloud.revisium.io',
        cloudSchema: 'https://cloud.revisium.io',
      },
      localeFallbacks: this.localeFallbacks,
      footerNote:
        'This page reads the generated GraphQL connection and shows a small FK target table used by heroes.',
    };
  }

  public setLocale(locale: ClassLocale): void {
    this.locale = locale;
  }

  public async retry(): Promise<void> {
    await this.loadInitial();
  }

  private async loadInitial(): Promise<void> {
    this.loadedItems.length = 0;
    this.itemCache.clear();
    const result = await this.dataSource.request.fetch();
    if (result.ok) {
      this.loadedItems.push(...result.value.items);
    }
  }

  private getItemViewModel(node: ClassNode): ClassItemViewModel {
    const cached = this.itemCache.get(node.id);
    if (cached) return cached;

    const item = new ClassItemViewModel(node, () => this.locale);
    this.itemCache.set(node.id, item);
    return item;
  }

  private get responseSample(): Record<string, unknown> | null {
    if (!this.dataSource.request.data) return null;
    return {
      totalCount: this.totalCount,
      pageInfo: this.dataSource.request.data.pageInfo,
      edges: this.loadedItems.slice(0, 3).map((node) => ({
        id: node.id,
        primaryStat: node.data.primary_stat,
        name: node.data.name[this.locale],
      })),
    };
  }

  private get localeFallbacks(): ExplainerDescriptor['localeFallbacks'] {
    return this.loadedItems.flatMap((node) => {
      const fallbacks: {
        readonly path: string;
        readonly requestedLocale: ClassLocale;
        readonly renderedLocale: ClassLocale;
      }[] = [];
      if (!node.data.name[this.locale]) {
        fallbacks.push({
          path: `classes.${node.id}.data.name`,
          requestedLocale: this.locale,
          renderedLocale: 'en',
        });
      }
      if (!node.data.description[this.locale]) {
        fallbacks.push({
          path: `classes.${node.id}.data.description`,
          requestedLocale: this.locale,
          renderedLocale: 'en',
        });
      }
      return fallbacks;
    });
  }
}

container.register(
  ClassesViewModel,
  () => new ClassesViewModel(container.get(ClassesDataSource)),
  { scope: 'transient' },
);
