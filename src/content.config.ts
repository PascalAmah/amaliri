import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // Load Markdown and MDX files in the `src/content/projects/` directory.
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
      uiImages: z.array(image()).max(4).optional(),
      focusEffect: z.literal('scroll-dark').optional(),
      category: z.string().optional(),
      homeFeatured: z.boolean().default(false),
      homeHeroOrder: z.number().int().positive().optional(),
      homeOrder: z.number().int().positive().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      githubUrl: z.string().optional(),
      liveUrl: z.string().optional(),
      status: z.enum(["completed", "in-progress"]).default("completed"),
      problem: z.string().optional(),
      whatWasBuilt: z.string().optional(),
      highlights: z.array(z.string()).optional(),
      challenges: z.string().optional(),
      /** Outcome/scope chips shown on the case study + featured card. */
      metrics: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .optional(),
      /** Linear architecture flow — each node is a tier in the request/data path. */
      architecture: z
        .array(z.object({ label: z.string(), detail: z.string().optional() }))
        .optional(),
    }),
});

export const collections = { projects };
