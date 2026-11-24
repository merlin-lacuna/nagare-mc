import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    category: z
      .enum([
        "tutorial",
        "case-study",
        "comparison",
        "best-practice",
        "opinion",
        "ebook",
      ])
      .optional(),
    date: z.coerce.date().optional(),
    timeframe: z.string().optional(),
    githubUrl: z.string().url().optional(),
    // A full URL, or a path on this site such as /portfolio/article-copies/<slug>/
    projectUrl: z.union([z.string().url(), z.string().startsWith("/")]).optional(),
    techStack: z.array(z.string()).optional(),
    imageSrc: z.string().optional(),
    imageAlt: z.string().optional(),
    homepageSummary: z.string().optional(),
    isFeatured: z.boolean().optional(),
  }),
});

export const collections = { portfolio };
