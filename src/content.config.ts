import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "Regulação",
      "Geração distribuída",
      "Engenharia elétrica",
      "Eletromobilidade",
      "Inteligência energética",
      "Projetos e infraestrutura",
    ]),
    status: z.enum(["draft", "review", "published"]),
    slug: z.string(),
    date: z.coerce.date(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.string(),
    readTime: z.string(),
    summary: z.string(),
    complement: z.string(),
  }),
});

export const collections = { blog };
