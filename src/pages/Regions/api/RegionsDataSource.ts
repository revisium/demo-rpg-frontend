import {
  type Demo_Rpg_DataGetRegionsesInput,
  type RegionsQuery,
} from 'src/__generated__/graphql-request';
import { container, ObservableRequest } from 'src/shared/lib';
import { ApiService } from 'src/shared/model';

export type RegionNode = RegionsQuery['regionses']['edges'][number]['node'];
export type RegionsRequestData = Demo_Rpg_DataGetRegionsesInput;

export interface RegionsResult {
  readonly items: readonly RegionNode[];
  readonly pageInfo: RegionsQuery['regionses']['pageInfo'];
  readonly totalCount: number;
}

export class RegionsDataSource {
  public readonly request: ObservableRequest<RegionsResult, [RegionsRequestData]>;

  constructor(private readonly api: ApiService) {
    this.request = ObservableRequest.of((signal, data) => this.fetchRegions(signal, data));
  }

  public reset(): void {
    this.request.reset();
  }

  private async fetchRegions(
    signal: AbortSignal,
    data: RegionsRequestData,
  ): Promise<RegionsResult> {
    const response = await this.api.sdk.Regions({ data }, undefined, signal);
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
