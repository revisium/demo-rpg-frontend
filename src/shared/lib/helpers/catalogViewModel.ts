import type { ObservableRequest } from '../ObservableRequest';

export interface CatalogResult<TNode> {
  readonly items: readonly TNode[];
  readonly totalCount: number;
}

export function shouldRequestInitialData<Args extends unknown[]>(
  request: ObservableRequest<unknown, Args>,
): boolean {
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

export function totalCatalogCount<TNode, Args extends unknown[]>(
  request: ObservableRequest<CatalogResult<TNode>, Args>,
  loadedItems: readonly TNode[],
): number {
  return request.data?.totalCount ?? loadedItems.length;
}

export function isInitialLoading<Args extends unknown[]>(
  request: ObservableRequest<unknown, Args>,
): boolean {
  return request.isLoading && !request.isLoaded;
}

export function isRefreshing<Args extends unknown[]>(
  request: ObservableRequest<unknown, Args>,
): boolean {
  return request.isLoading && request.isLoaded;
}

export function hasRequestError<Args extends unknown[]>(
  request: ObservableRequest<unknown, Args>,
): boolean {
  return Boolean(request.error);
}
