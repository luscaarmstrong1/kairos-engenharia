import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const ignored = new Set([".git", "node_modules", "dist", ".astro", "test-results", "playwright-report"]);
const allowedRepoPattern = /renovera1|kairos-engenharia|github\.io\/kairos-engenharia/i;
const badEncoding = /Ãƒ|ï¿½|Ã¢â‚¬|Ã¢â‚¬Â¢|Ã¢â€ â€™/;
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
    if (badEncoding.test(text)) findings.push(`${rel}: possÃ­vel mojibake ou caractere extraÃ­do incorretamente`);
    for (const match of text.matchAll(/renovera/gi)) {
      const line = text.slice(0, match.index).split(/\r?\n/).length;
      const lineText = text.split(/\r?\n/)[line - 1] || "";
      if (!allowedRepoPattern.test(lineText)) {
        findings.push(`${rel}:${line}: referÃªncia pÃºblica indevida a termo tÃ©cnico do repositÃ³rio`);
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
