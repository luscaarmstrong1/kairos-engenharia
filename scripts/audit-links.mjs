import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const dist = join(process.cwd(), "dist");
const base = "/kairos-engenharia";
const failures = [];

function files(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...files(full));
    else out.push(full);
  }
  return out;
}

for (const file of files(dist).filter((item) => extname(item) === ".html")) {
  const html = readFileSync(file, "utf8");
  const matches = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const raw of matches) {
    if (/^(https?:|mailto:|tel:|data:|#)/.test(raw)) continue;
    const path = raw.startsWith(base) ? raw.slice(base.length) : raw;
    if (path === "/" || path === "") continue;
    const normalized = path.split("#")[0].split("?")[0];
    const candidates = [
      join(dist, normalized),
      join(dist, normalized, "index.html"),
      join(dist, normalized.replace(/^\//, "")),
    ];
    if (!candidates.some((candidate) => existsSync(candidate))) {
      failures.push(`${file}: link interno não encontrado: ${raw}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Auditoria de links OK");
