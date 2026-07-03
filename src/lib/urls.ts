import { basePath, site } from "@data/site";

export function withBase(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`.replace(/\/{2,}/g, "/");
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized === "/" ? "/" : normalized}`;
}

export function ensureTrailingSlash(path: string): string {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
}
