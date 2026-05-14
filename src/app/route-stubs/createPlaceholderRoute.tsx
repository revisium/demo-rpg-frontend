import { PlaceholderPage } from './PlaceholderPage/PlaceholderPage';
import { placeholderRoutes, type PlaceholderRouteKey } from './placeholderRoutes';

export function createPlaceholderRoute(key: PlaceholderRouteKey) {
  const route = placeholderRoutes[key];

  return function PlaceholderRoute() {
    return <PlaceholderPage {...route} />;
  };
}
