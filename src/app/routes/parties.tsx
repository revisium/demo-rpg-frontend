import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function PartiesRoute() {
  return (
    <PlaceholderPage
      capability="Array FK column and formula counters"
      route="/parties"
      source="data.parties, data.heroes"
      status="Draft"
      title="Parties"
    />
  );
}
