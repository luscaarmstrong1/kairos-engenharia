import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { site } from "@data/site";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).filter((post) => post.data.status === "published");
  return rss({
    title: "Kairós Engenharia - Conteúdos Técnicos",
    description: site.defaultDescription,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/renovera-projetos-eletricos/conteudos/${post.id}/`,
    })),
  });
}
