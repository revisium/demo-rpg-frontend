import type { ObservableRequest } from '../ObservableRequest';

export interface CatalogResult<TNode> {
  readonly items: readonly TNode[];
  readonly totalCount: number;
}

export function shouldRequestInitialData(request: ObservableRequest<unknown, []>): boolean {
  return !request.isLoaded && !request.isLoading;
}

export function resetCatalogState<TNode>(
  loadedItems: TNode[],
  itemCache: Map<string, unknown>,
): void {
  loadedItems.length = 0;
  itemCache.clear();
}

export function replaceCatalogItems<TNode>(
  loadedItems: TNode[],
  itemCache: Map<string, unknown>,
  items: readonly TNode[],
): void {
  resetCatalogState(loadedItems, itemCache);
  loadedItems.push(...items);
}

export function totalCatalogCount<TNode>(
  request: ObservableRequest<CatalogResult<TNode>, []>,
  loadedItems: readonly TNode[],
): number {
  return request.data?.totalCount ?? loadedItems.length;
}

export function isInitialLoading(request: ObservableRequest<unknown, []>): boolean {
  return request.isLoading && !request.isLoaded;
}

export function isRefreshing(request: ObservableRequest<unknown, []>): boolean {
  return request.isLoading && request.isLoaded;
}

export function hasRequestError(request: ObservableRequest<unknown, []>): boolean {
  return Boolean(request.error);
}
