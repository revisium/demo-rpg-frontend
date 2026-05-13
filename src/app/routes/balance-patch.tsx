import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function BalancePatchRoute() {
  return (
    <PlaceholderPage
      capability="Branching and revision diff"
      route="/balance-patch"
      source="data.items master:head vs master:draft"
      status="Blocked"
      title="Balance Patch"
    />
  );
}
