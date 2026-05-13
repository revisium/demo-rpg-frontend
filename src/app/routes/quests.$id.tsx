import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function QuestDetailRoute() {
  return (
    <PlaceholderPage
      capability="Two-level embedded arrays and formulas"
      route="/quests/:id"
      source="data.quests, data.npcs, data.locations, data.items"
      status="Draft"
      title="Quest Detail"
    />
  );
}
