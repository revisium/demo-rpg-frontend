import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function FactionDetailRoute() {
  return (
    <PlaceholderPage
      capability="Reverse-FK aggregation and crest rendering"
      route="/factions/:id"
      source="data.factions, related data.heroes, data.monsters"
      status="Draft"
      title="Faction Detail"
    />
  );
}
