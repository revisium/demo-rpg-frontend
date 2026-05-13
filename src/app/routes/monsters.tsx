import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function MonstersRoute() {
  return (
    <PlaceholderPage
      capability="FK, embedded drops, formula counters, illustration"
      route="/monsters"
      source="data.monsters, data.factions"
      status="Draft"
      title="Monsters"
    />
  );
}
