import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";
import { i18nConfig } from "./src/config/i18n.ts";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  i18n: i18nConfig,
  integrations: [
    icon(),
    tailwind(),
    alpinejs({ entrypoint: "/src/entrypoint" }),
  ],
  adapter: netlify(),
});
