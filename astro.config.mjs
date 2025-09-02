import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";
import netlify from "@astrojs/netlify"; // or '/edge' depending on target

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), alpinejs()],
  output: "server",
  adapter: netlify(),
});
