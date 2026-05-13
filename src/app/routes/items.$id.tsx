import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function ItemDetailRoute() {
  return (
    <PlaceholderPage
      capability="Formula fields, embedded modifiers, SVG icon"
      route="/items/:id"
      source="data.items plus type and stat FKs"
      status="Draft"
      title="Item Detail"
    />
  );
}
