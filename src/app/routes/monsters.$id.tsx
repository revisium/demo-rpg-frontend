import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function MonsterDetailRoute() {
  return (
    <PlaceholderPage
      capability="Array FK and drop formulas"
      route="/monsters/:id"
      source="data.monsters, data.factions, data.abilities"
      status="Draft"
      title="Monster Detail"
    />
  );
}
