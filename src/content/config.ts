import { z, defineCollection } from "astro:content";


const serviceCollection = defineCollection({ type: 'content' , schema: ( { image }) =>  z.object({
    title: z.string(),
    description: z.string(),
    heroImage: image(),
})});

export const collections = {
    'services': serviceCollection
}