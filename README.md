# Kairós Engenharia

Site institucional premium da Kairós Engenharia, publicado em:

https://renovera1.github.io/kairos-engenharia/

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Markdown Content Collections
- Vitest
- Playwright

## Scripts

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
pnpm audit:links
```

O `astro.config.mjs` usa a base do GitHub Pages:

```js
base: "/kairos-engenharia"
```

## Rotas

- `/`
- `/servicos/`
- `/servicos/engenharia-projetos-eletricos/`
- `/servicos/consultoria-regulatoria/`
- `/servicos/inteligencia-energetica/`
- `/servicos/eletromobilidade/`
- `/para-integradores/`
- `/cases/`
- `/conteudos/`
- `/conteudos/[slug]/`
- `/a-kairos/`
- `/contato/`
- `/politica-de-privacidade/`
- `/politica-de-cookies/`
- `/404/`
- `/rss.xml`
- `/sitemap.xml`

## Variáveis públicas

Copie `.env.example` e configure somente valores públicos:

- `PUBLIC_FORM_ENDPOINT`
- `PUBLIC_WHATSAPP_NUMBER`
- `PUBLIC_CALENDAR_URL`
- `PUBLIC_LINKEDIN_URL`
- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_TURNSTILE_SITE_KEY`

Segredos, tokens, webhooks privados e credenciais de CRM devem ficar no endpoint externo, não no GitHub Pages.

## Conteúdo

- Serviços, cases, rotas e FAQ: `src/data/site.ts`
- Blog: `src/content/blog`
- Componentes: `src/components`
- Layout e SEO: `src/layouts/BaseLayout.astro`
- Auditoria: `AUDIT.md`

## Automação

- Deploy GitHub Pages com lint, typecheck, testes, e2e, build e auditoria de links.
- Dependabot semanal.
- CodeQL.
- Issue semanal de pauta editorial com checklist de fontes e revisão humana.
