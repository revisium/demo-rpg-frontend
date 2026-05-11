import { makeAutoObservable } from 'mobx';

import { container, ObservableRequest } from 'src/shared/lib';
import { ApiService } from 'src/shared/model';
import type { IViewModel } from 'src/shared/config';
import type { RegionsQuery } from '../../../__generated__/graphql-request';

export class RegionsViewModel implements IViewModel {
  public readonly request: ObservableRequest<RegionsQuery, []>;

  constructor(private readonly api: ApiService) {
    this.request = ObservableRequest.of(() => this.api.sdk.Regions());
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public setup(): void {
    // intentionally empty — RegionsPage has no per-route setup state
  }

  public async mount(): Promise<void> {
    if (this.request.isLoaded) return;
    await this.request.fetch();
  }

  public unmount(): void {
    this.request.reset();
  }
}

container.register(
  RegionsViewModel,
  () => new RegionsViewModel(container.get(ApiService)),
  { scope: 'transient' },
);
