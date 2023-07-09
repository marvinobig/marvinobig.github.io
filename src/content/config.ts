import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    summary: z.string(),
    banner: z.object({
        src: z.string(),
        alt: z.string()
    }),
    thumbnail: z.object({
        src: z.string(),
        alt: z.string()
    }),
    tags: z.array(z.string()),
    draft: z.boolean(),
  }),
});

export const collections = {
  'blog': blogCollection,
};