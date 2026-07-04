import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://luscaarmstrong1.github.io",
  base: "/kairos-engenharia",
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
