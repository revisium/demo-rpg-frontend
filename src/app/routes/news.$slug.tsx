import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function NewsSlugRoute() {
  return (
    <PlaceholderPage
      capability="News detail and optional federation"
      route="/news/:slug"
      source="data.news or cms.news TBD plus optional backend enrichment"
      status="Blocked"
      title="News Detail"
    />
  );
}
