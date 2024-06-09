import { z, defineCollection, type ImageFunction } from "astro:content";

const getServiceSchema = (image: ImageFunction) =>
  z.object({
    name: z.string(),
    image: image().optional(),
    summary: z.string(),
    description: z.array(z.string()),
    price: z.string(),
    duration: z.string(),
    isGroup: z.boolean().default(false),
    reserveLink: z.string().optional(),
  });

const facilitatorCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      images: z.array(image()),
      tags: z.array(z.string()),
      activities: z.array(z.string()).optional(),
      services: z.array(getServiceSchema(image)),
      location: z.string().optional(),
      locationUrl: z.string().optional(),
      contact: z.object({
        email: z.string().email().optional(),
        phone: z.string(),
        instagram: z.string().optional(),
        facebook: z.string().optional(),
        website: z.string().optional(),
      }),
    }),
});

export const collections = {
  facilitators: facilitatorCollection,
};

export type Service = z.infer<ReturnType<typeof getServiceSchema>>;
