import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const site = defineCollection({
  loader: file('src/content/site/settings.yaml'),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    eyebrow: z.string(),
    heroIntro: z.string(),
    aboutParagraphs: z.array(z.string()),
    email: z.string(),
    github: z.string().url(),
    portfolioUrl: z.string().url(),
    availability: z.string(),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/skills' }),
  schema: z.object({
    title: z.string(),
    items: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/experience' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    period: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    impactTag: z.string().optional(),
    order: z.number().default(0),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/certifications' }),
  schema: z.object({
    name: z.string(),
    level: z.string(),
    url: z.string().url(),
    order: z.number().default(0),
  }),
});

const stats = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/stats' }),
  schema: z.object({
    number: z.string(),
    label: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { site, skills, experience, projects, certifications, stats };
