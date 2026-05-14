import { type Demo_Rpg_DataPageInfo, type RegionsQuery } from 'src/__generated__/graphql-request';
import { container, ObservableRequest } from 'src/shared/lib';
import { ApiService } from 'src/shared/model';

export type RegionNode = RegionsQuery['regionses']['edges'][number]['node'];

export interface RegionsResult {
  readonly items: readonly RegionNode[];
  readonly pageInfo: Pick<Demo_Rpg_DataPageInfo, 'endCursor' | 'hasNextPage'>;
  readonly totalCount: number;
}

export class RegionsDataSource {
  public readonly request: ObservableRequest<RegionsResult, []>;

  constructor(private readonly api: ApiService) {
    this.request = ObservableRequest.of((signal) => this.fetchRegions(signal));
  }

  public reset(): void {
    this.request.reset();
  }

  private async fetchRegions(signal: AbortSignal): Promise<RegionsResult> {
    const response = await this.api.sdk.Regions(undefined, undefined, signal);
    return this.mapResponse(response);
  }

  private mapResponse(response: RegionsQuery): RegionsResult {
    const connection = response.regionses;
    return {
      items: connection.edges.map(({ node }) => node),
      pageInfo: connection.pageInfo,
      totalCount: connection.totalCount,
    };
  }
}

container.register(
  RegionsDataSource,
  () => new RegionsDataSource(container.get(ApiService)),
  { scope: 'transient' },
);
