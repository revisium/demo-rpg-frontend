import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function PartyDetailRoute() {
  return (
    <PlaceholderPage
      capability="Array FK resolution, member_count, is_full"
      route="/parties/:id"
      source="data.parties, data.heroes"
      status="Draft"
      title="Party Detail"
    />
  );
}
