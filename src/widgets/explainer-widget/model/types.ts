export type ExplainerSubgraph = 'backend' | 'cms' | 'data';
export type ExplainerLocale = 'en' | 'ru' | 'zh';

export interface ExplainerGraphQLSurface {
  readonly operationName: string;
  readonly request: string;
}

export interface ExplainerDescriptor {
  readonly summary: string;
  readonly surfaces: {
    readonly graphql: ExplainerGraphQLSurface;
  };
  readonly variables: Record<string, unknown>;
  readonly responseSample: Record<string, unknown> | null;
  readonly subgraphsInUse: readonly ExplainerSubgraph[];
  readonly deepLinks: {
    readonly cloudTable: string;
    readonly cloudSchema: string;
  };
  readonly localeFallbacks?: readonly {
    readonly path: string;
    readonly requestedLocale: ExplainerLocale;
    readonly renderedLocale: ExplainerLocale;
  }[];
  readonly footerNote: string;
}
