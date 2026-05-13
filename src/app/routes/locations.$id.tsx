import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function LocationDetailRoute() {
  return (
    <PlaceholderPage
      capability="Large map file and dimensions metadata"
      route="/locations/:id"
      source="data.locations, data.regions"
      status="Draft"
      title="Location Detail"
    />
  );
}
