import { z, defineCollection } from "astro:content";

const serviceSchema = z.object({
    title: z.string(),
    description: z.string(),
    rank: z.number(),
    badge: z.string().optional(),
    heroImage: z.string().optional(),
});


const serviceCollection = defineCollection({ type: 'content' , schema: serviceSchema });

export const collections = {
    'services': serviceCollection
}