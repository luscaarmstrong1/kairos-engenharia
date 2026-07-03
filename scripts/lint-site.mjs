import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const ignored = new Set([".git", "node_modules", "dist", ".astro", "test-results", "playwright-report"]);
const allowedRepoPattern = /renovera1|renovera-projetos-eletricos|github\.io\/renovera-projetos-eletricos/i;
const badEncoding = /Ã|�|â€|â€¢|â†’/;
const findings = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (ignored.has(entry)) continue;
    const full = join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(astro|ts|js|mjs|md|json|txt|yml|yaml|css|html|webmanifest)$/.test(entry)) continue;
    const rel = relative(root, full);
    if (rel === "scripts\\lint-site.mjs" || rel === "scripts/lint-site.mjs") continue;
    const text = readFileSync(full, "utf8");
    if (badEncoding.test(text)) findings.push(`${rel}: possível mojibake ou caractere extraído incorretamente`);
    for (const match of text.matchAll(/renovera/gi)) {
      const line = text.slice(0, match.index).split(/\r?\n/).length;
      const lineText = text.split(/\r?\n/)[line - 1] || "";
      if (!allowedRepoPattern.test(lineText)) {
        findings.push(`${rel}:${line}: referência pública indevida a termo técnico do repositório`);
      }
    }
  }
}

walk(root);

if (findings.length) {
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("Lint institucional OK");
