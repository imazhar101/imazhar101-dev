import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts live in src/content/blog/YYYY-MM-DD-short-name.md
// The date prefix is just for file ordering — the URL is built from `date` + the
// short name (see src/lib/posts.js), so renaming the prefix never moves a post.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
