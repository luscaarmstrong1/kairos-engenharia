import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://renovera1.github.io",
  base: "/renovera-projetos-eletricos",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/"),
    }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
