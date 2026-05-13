import { PlaceholderPage } from 'src/app/route-stubs/PlaceholderPage/PlaceholderPage';

export default function BlogSlugRoute() {
  return (
    <PlaceholderPage
      capability="Markdown body, hero image, author avatar"
      route="/blog/[slug]"
      source="cms.blog_posts, cms.blog_authors"
      status="Draft"
      title="Blog Post"
    />
  );
}
