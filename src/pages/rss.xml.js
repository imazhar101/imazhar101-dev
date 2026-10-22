import { profile } from '../data/site.js';
import { posts, permalink } from '../lib/posts.js';

const site = 'https://imazhar101.dev';

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET() {
  const all = await posts();
  const items = all
    .map((post) => {
      const url = `${site}${permalink(post)}`;
      return `    <item>
      <title>${esc(post.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <description>${esc(post.data.desc)}</description>
${post.data.tags.map((t) => `      <category>${esc(t)}</category>`).join('\n')}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(profile.name)} (@${profile.handle})</title>
    <link>${site}/blog/</link>
    <description>${esc(profile.blurb)}</description>
    <language>en-us</language>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
