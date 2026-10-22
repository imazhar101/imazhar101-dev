import { getCollection } from 'astro:content';

// 2026-10-22-mcp-dead-weight -> mcp-dead-weight
const shortName = (id) => id.replace(/^.*\//, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');

// Dates are authored as plain YYYY-MM-DD and read back in UTC, so the permalink
// can't slip a day on a machine west of Greenwich.
export const parts = (date) => ({
  year: String(date.getUTCFullYear()),
  month: String(date.getUTCMonth() + 1).padStart(2, '0'),
  day: String(date.getUTCDate()).padStart(2, '0'),
});

export function permalink(post) {
  const { year, month, day } = parts(post.data.date);
  return `/${year}/${month}/${day}/${shortName(post.id)}/`;
}

export const stamp = (date) => {
  const { year, month, day } = parts(date);
  return `${year}-${month}-${day}`;
};

// Newest first, drafts hidden in production builds.
export async function posts() {
  const all = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date - a.data.date);
}
