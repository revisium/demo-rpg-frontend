import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function BlogRoute() {
  return (
    <PlaceholderPage
      capability="CMS catalog and markdown content"
      route="/blog"
      source="cms.blog_posts, cms.blog_authors"
      status="Draft"
      title="Blog"
    />
  );
}
