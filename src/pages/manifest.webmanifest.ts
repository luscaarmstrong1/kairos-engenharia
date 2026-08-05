import { basePath, site } from "@data/site";

export function GET() {
  const base = basePath || "";
  const manifest = {
    name: site.name,
    short_name: "Conexium",
    description: site.tagline,
    start_url: `${base}/`.replace(/\/{2,}/g, "/"),
    scope: `${base}/`.replace(/\/{2,}/g, "/"),
    display: "standalone",
    background_color: "#061525",
    theme_color: "#061525",
    icons: [
      {
        src: `${base}/brand/conexium-favicon.svg`.replace(/\/{2,}/g, "/"),
        sizes: "64x64",
        type: "image/svg+xml",
      },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" },
  });
}
