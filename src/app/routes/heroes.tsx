import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function HeroesRoute() {
  return (
    <PlaceholderPage
      capability="FK filters, formula string, portrait file field"
      route="/heroes"
      source="data.heroes, data.classes, data.regions, data.factions"
      status="Draft"
      title="Heroes"
    />
  );
}
