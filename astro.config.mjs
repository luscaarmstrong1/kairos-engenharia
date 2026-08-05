import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.PUBLIC_SITE_URL || "https://conexiumengenharia.com.br";
const basePath = process.env.PUBLIC_BASE_PATH || "/kairos-engenharia";

export default defineConfig({
  site: siteUrl,
  base: basePath,
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
