import { describe, it, expect, vi } from 'vitest';
import fc from 'fast-check';
import { z } from 'zod';

vi.mock('astro:content', () => ({
  defineCollection: (config: any) => config,
}));
vi.mock('astro/loaders', () => ({
  glob: () => ({}),
}));
vi.mock('astro/zod', () => ({
  z: z,
}));

import { collections } from './content.config';

// Mock the image function required by Astro's defineCollection schema
const mockImage = () => z.any();
// @ts-ignore
const projectSchema = collections.projects.schema({ image: mockImage } as any);

describe('Property 4: Project schema round-trip integrity', () => {
  it('should parse valid ProjectData and apply defaults', () => {
    fc.assert(
      fc.property(
        fc.record(
          {
            title: fc.string({ minLength: 1 }),
            description: fc.string({ minLength: 1 }),
            pubDate: fc.date().map((d) => d.toISOString()),
            tags: fc.array(fc.string({ minLength: 1 })),
            status: fc.constantFrom('completed', 'in-progress'),
            githubUrl: fc.webUrl(),
            liveUrl: fc.webUrl(),
          },
          { requiredKeys: ['title', 'description', 'pubDate'] }
        ),
        (input) => {
          // Ensure required fields are present for valid base objects
          input.title = input.title || 'Default Title';
          input.description = input.description || 'Default Description';
          input.pubDate = input.pubDate || new Date().toISOString();

          const result = projectSchema.safeParse(input);
          if (!result.success) {
            console.log(result.error);
          }
          expect(result.success).toBe(true);

          if (result.success) {
            const parsed = result.data;
            expect(parsed.title).toBe(input.title);
            expect(parsed.description).toBe(input.description);
            expect(parsed.tags).toEqual(input.tags ?? []);
            expect(parsed.status).toBe(input.status ?? 'completed');
            expect(parsed.homeFeatured).toBe(false);
            expect(parsed.draft).toBe(false);
            if (input.githubUrl !== undefined) expect(parsed.githubUrl).toBe(input.githubUrl);
            if (input.liveUrl !== undefined) expect(parsed.liveUrl).toBe(input.liveUrl);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Property 5: Schema rejects invalid and incomplete frontmatter', () => {
  const baseValidObject = {
    title: 'Title',
    description: 'Description',
    pubDate: new Date().toISOString(),
  };

  it('should reject invalid status', () => {
    fc.assert(
      fc.property(
        fc.string().filter((s) => s !== 'completed' && s !== 'in-progress'),
        (invalidStatus) => {
          const input = { ...baseValidObject, status: invalidStatus };
          const result = projectSchema.safeParse(input);
          expect(result.success).toBe(false);
        }
      )
    );
  });

  it('should reject when title is removed', () => {
    const input = { ...baseValidObject };
    // @ts-ignore
    delete input.title;
    const result = projectSchema.safeParse(input);
    expect(result.success).toBe(false);
  });

  it('should reject when description is removed', () => {
    const input = { ...baseValidObject };
    // @ts-ignore
    delete input.description;
    const result = projectSchema.safeParse(input);
    expect(result.success).toBe(false);
  });
});
