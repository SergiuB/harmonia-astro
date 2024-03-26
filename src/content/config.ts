import { z, defineCollection } from "astro:content";

const facilitatorCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: image(),
    }),
});

export const collections = {
  facilitators: facilitatorCollection,
};
