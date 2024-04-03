import { z, defineCollection } from "astro:content";

const facilitatorCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  facilitators: facilitatorCollection,
};
