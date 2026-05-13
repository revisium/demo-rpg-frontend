import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function ItemsRoute() {
  return (
    <PlaceholderPage
      capability="Complex where/orderBy, cursor pagination, SVG icons"
      route="/items"
      source="data.items, data.item_types, data.stats"
      status="Draft"
      title="Items"
    />
  );
}
