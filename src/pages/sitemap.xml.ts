import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { allRoutes, site } from "@data/site";

export async function GET(_context: APIContext) {
  const posts = (await getCollection("blog")).filter((post) => post.data.status === "published");
  const urls = [
    ...allRoutes.filter((route) => route !== "/404/"),
    ...posts.map((post) => `/conteudos/${post.id}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${site.url}${url === "/" ? "/" : url}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
