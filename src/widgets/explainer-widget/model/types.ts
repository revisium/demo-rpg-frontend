export type ExplainerSubgraph = 'backend' | 'cms' | 'data';
export type ExplainerLocale = 'en' | 'ru' | 'zh';

export interface ExplainerGraphQLSurface {
  readonly operationName: string;
  readonly request: string;
}

export interface ExplainerRestSurface {
  readonly method: string;
  readonly path: string;
  readonly request?: string;
}

export interface ExplainerMcpSurface {
  readonly toolName: string;
  readonly request: string;
}

export interface ExplainerDescriptor {
  readonly summary: string;
  readonly surfaces: {
    readonly graphql: ExplainerGraphQLSurface;
    readonly rest?: ExplainerRestSurface;
    readonly mcp?: ExplainerMcpSurface;
  };
  readonly variables: Record<string, unknown>;
  readonly responseSample: NonNullable<unknown> | null;
  readonly subgraphsInUse: readonly ExplainerSubgraph[];
  readonly fieldAttribution?: readonly {
    readonly path: string;
    readonly owningSubgraph: ExplainerSubgraph;
  }[];
  readonly deepLinks: {
    readonly cloudTable: string;
    readonly cloudSchema?: string;
    readonly cloudRow?: string;
    readonly openApi?: string;
    readonly mcpTool?: string;
    readonly federationSdlSource?: string;
  };
  readonly localeFallbacks?: readonly {
    readonly path: string;
    readonly requestedLocale: ExplainerLocale;
    readonly renderedLocale: ExplainerLocale;
  }[];
  readonly federation?: {
    readonly sdlExcerpt: string;
    readonly summary: string;
  };
  readonly footerNote: string;
}
