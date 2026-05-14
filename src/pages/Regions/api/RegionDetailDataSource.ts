import type { RegionDetailQuery } from 'src/__generated__/graphql-request';
import { container, ObservableRequest } from 'src/shared/lib';
import { ApiService } from 'src/shared/model';

export type RegionDetailNode = RegionDetailQuery['regions'];

export interface RegionDetailResult {
  readonly item: RegionDetailNode;
}

export class RegionDetailDataSource {
  public readonly request: ObservableRequest<RegionDetailResult, [string]>;

  constructor(private readonly api: ApiService) {
    this.request = ObservableRequest.of((signal, id) => this.fetchRegion(signal, id));
  }

  public reset(): void {
    this.request.reset();
  }

  private async fetchRegion(signal: AbortSignal, id: string): Promise<RegionDetailResult> {
    const response = await this.api.sdk.RegionDetail({ id }, undefined, signal);
    return { item: response.regions };
  }
}

container.register(
  RegionDetailDataSource,
  () => new RegionDetailDataSource(container.get(ApiService)),
  { scope: 'transient' },
);
