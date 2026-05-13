import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function NewsRoute() {
  return (
    <PlaceholderPage
      capability="Pinned priority order, time-window filter, enum category"
      route="/news"
      source="data.news or cms.news TBD"
      status="Blocked"
      title="News"
    />
  );
}
