import type { ClassesQuery } from 'src/__generated__/graphql-request';
import { container, ObservableRequest } from 'src/shared/lib';
import { ApiService } from 'src/shared/model';

export type ClassNode = ClassesQuery['classeses']['edges'][number]['node'];

export interface ClassesResult {
  readonly items: readonly ClassNode[];
  readonly pageInfo: ClassesQuery['classeses']['pageInfo'];
  readonly totalCount: number;
}

export class ClassesDataSource {
  public readonly request: ObservableRequest<ClassesResult, []>;

  constructor(private readonly api: ApiService) {
    this.request = ObservableRequest.of((signal) => this.fetchClasses(signal));
  }

  public reset(): void {
    this.request.reset();
  }

  private async fetchClasses(signal: AbortSignal): Promise<ClassesResult> {
    const response = await this.api.sdk.Classes(undefined, undefined, signal);
    return this.mapResponse(response);
  }

  private mapResponse(response: ClassesQuery): ClassesResult {
    const connection = response.classeses;
    return {
      items: connection.edges.map(({ node }) => node),
      pageInfo: connection.pageInfo,
      totalCount: connection.totalCount,
    };
  }
}

container.register(
  ClassesDataSource,
  () => new ClassesDataSource(container.get(ApiService)),
  { scope: 'transient' },
);
