import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function NpcsRoute() {
  return (
    <PlaceholderPage
      capability="Portrait file, computed display label"
      route="/npcs"
      source="data.npcs, data.locations"
      status="Draft"
      title="NPCs"
    />
  );
}
