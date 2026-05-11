import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('app/routes/_index.tsx'),
  route('regions', 'app/routes/regions.tsx'),
] satisfies RouteConfig;
