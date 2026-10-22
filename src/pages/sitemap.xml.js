import { posts, permalink, stamp } from '../lib/posts.js';

const site = 'https://imazhar101.dev';

export async function GET() {
  const all = await posts();
  const urls = [
    { loc: `${site}/`, changefreq: 'monthly', priority: '1.0' },
    { loc: `${site}/blog/`, changefreq: 'weekly', priority: '0.8' },
    ...all.map((post) => ({
      loc: `${site}${permalink(post)}`,
      lastmod: stamp(post.data.date),
      changefreq: 'yearly',
      priority: '0.7',
    })),
  ];

  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
