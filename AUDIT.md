# Auditoria Inicial e DecisÃµes

Data: 2026-07-03

## Contexto auditado

RepositÃ³rio: `renovera1/kairos-engenharia`

URL tÃ©cnica mantida: `https://renovera1.github.io/kairos-engenharia/`

## Problemas encontrados

- A versÃ£o anterior era uma SPA React/Vite; as rotas existiam por cÃ³pia de `index.html`, mas o conteÃºdo principal dependia de JavaScript para renderizar.
- O blog nÃ£o era alimentado por Markdown/MDX e nÃ£o havia fluxo editorial com status `draft`, `review` e `published`.
- NÃ£o havia RSS.
- O sitemap era estÃ¡tico e exigia manutenÃ§Ã£o manual.
- Faltavam pÃ¡ginas reais solicitadas: serviÃ§os individuais, pÃ¡gina para integradores, polÃ­ticas de privacidade/cookies e artigos individuais.
- O formulÃ¡rio tinha validaÃ§Ã£o local, mas nÃ£o continha todos os campos solicitados nem arquitetura documentada para endpoint seguro, CRM, Turnstile e score.
- Faltavam automaÃ§Ãµes de Dependabot, CodeQL e pauta editorial semanal.
- A pipeline de deploy nÃ£o rodava typecheck, auditoria de links nem e2e.
- NÃ£o havia arquivo de auditoria documentando problemas, decisÃµes e correÃ§Ãµes.

## DecisÃ£o arquitetural

MigraÃ§Ã£o de React/Vite para Astro + TypeScript + Tailwind CSS.

Motivo: o PDF prioriza SEO, rotas reais, HTML semÃ¢ntico, blog em Markdown, RSS, sitemap automÃ¡tico e manutenÃ§Ã£o simples em GitHub Pages. Preservar a SPA reduziria o esforÃ§o imediato, mas manteria perda de indexaÃ§Ã£o e rotas menos robustas.

## CorreÃ§Ãµes implementadas

- Base Astro estÃ¡tica com `base: "/kairos-engenharia"`.
- Rotas reais para todas as pÃ¡ginas solicitadas.
- ConteÃºdo de blog em `src/content/blog`, com `status` e filtragem de posts publicados.
- RSS em `/rss.xml` e sitemap em `/sitemap.xml`.
- `manifest.webmanifest`, favicon, robots, canonical, Open Graph, Twitter Cards e JSON-LD.
- FormulÃ¡rio completo com LGPD, honeypot, sanitizaÃ§Ã£o, mÃ¡scara de telefone, score e payload preparado para endpoint seguro.
- WhatsApp, agenda, LinkedIn, analytics, Turnstile e endpoint configurÃ¡veis por variÃ¡veis pÃºblicas.
- Consentimento de cookies antes de carregar analytics.
- PolÃ­ticas de privacidade e cookies.
- Dependabot, CodeQL, workflow de deploy e workflow editorial semanal.
- Testes unitÃ¡rios e e2e, alÃ©m de auditoria de links.

## Limites e pendÃªncias por credenciais

- Envio real de formulÃ¡rio depende de `PUBLIC_FORM_ENDPOINT`.
- WhatsApp depende de `PUBLIC_WHATSAPP_NUMBER`.
- Agenda depende de `PUBLIC_CALENDAR_URL`.
- LinkedIn real depende de `PUBLIC_LINKEDIN_URL`.
- Analytics depende de `PUBLIC_GA_MEASUREMENT_ID` e consentimento de cookies.
- Turnstile depende de `PUBLIC_TURNSTILE_SITE_KEY` e validaÃ§Ã£o no endpoint seguro.
- IntegraÃ§Ã£o com CRM e e-mail de confirmaÃ§Ã£o deve ficar no backend externo, nÃ£o no GitHub Pages.
