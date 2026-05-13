import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function HomeRoute() {
  return (
    <PlaceholderPage
      capability="CMS-driven landing, 80/20 message, capability navigation"
      route="/"
      source="cms.landing_hero, cms.landing_features, cms.landing_testimonials"
      status="Draft"
      title="Home"
    />
  );
}
