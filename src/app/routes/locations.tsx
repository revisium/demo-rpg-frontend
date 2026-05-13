import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function LocationsRoute() {
  return (
    <PlaceholderPage
      capability="Region FK and map preview"
      route="/locations"
      source="data.locations, data.regions"
      status="Draft"
      title="Locations"
    />
  );
}
