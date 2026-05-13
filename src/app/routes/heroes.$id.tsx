import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function HeroDetailRoute() {
  return (
    <PlaceholderPage
      capability="Single FK, array FK, embedded equipment, formulas, portrait"
      route="/heroes/:id"
      source="data.heroes plus class, ability, and item FKs"
      status="Draft"
      title="Hero Detail"
    />
  );
}
