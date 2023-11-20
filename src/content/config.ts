import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().optional(),
    readingTime: z.string().optional(),
    previous: z.string().optional(),
    next: z.string().optional(),
  }),
});

export const collections = { blog };
