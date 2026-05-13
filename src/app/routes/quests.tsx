import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function QuestsRoute() {
  return (
    <PlaceholderPage
      capability="FK catalog, level filter, repeatable flag"
      route="/quests"
      source="data.quests, data.npcs, data.locations"
      status="Draft"
      title="Quests"
    />
  );
}
