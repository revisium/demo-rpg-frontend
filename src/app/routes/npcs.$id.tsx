import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function NpcDetailRoute() {
  return (
    <PlaceholderPage
      capability="Portrait file detail and location FK"
      route="/npcs/:id"
      source="data.npcs, data.locations"
      status="Draft"
      title="NPC Detail"
    />
  );
}
