import { z, defineCollection, type ImageFunction } from "astro:content";

const getServiceSchema = (image: ImageFunction) =>
  z.object({
    name: z.string(),
    image: image().optional(),
    summary: z.string(),
    description: z.string(),
    price: z.string(),
    duration: z.string(),
    isGroup: z.boolean().default(false),
  });

const facilitatorCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      images: z.array(image()),
      tags: z.array(z.string()),
      services: z.array(getServiceSchema(image)),
      location: z.string(),
      locationUrl: z.string().optional(),
      contact: z.object({
        email: z.string().email(),
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
