import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function RegionDetailRoute() {
  return (
    <PlaceholderPage
      capability="Federation reference detail"
      route="/regions/:id"
      source="data.regions plus backend RegionsNode fields"
      status="Blocked"
      title="Region Detail"
    />
  );
}
