# Auditoria Inicial e Decisões

Data: 2026-07-03

## Contexto auditado

Repositório: `renovera1/kairos-engenharia`

URL técnica mantida: `https://renovera1.github.io/kairos-engenharia/`

## Problemas encontrados

- A versão anterior era uma SPA React/Vite; as rotas existiam por cópia de `index.html`, mas o conteúdo principal dependia de JavaScript para renderizar.
- O blog não era alimentado por Markdown/MDX e não havia fluxo editorial com status `draft`, `review` e `published`.
- Não havia RSS.
- O sitemap era estático e exigia manutenção manual.
- Faltavam páginas reais solicitadas: serviços individuais, página para integradores, políticas de privacidade/cookies e artigos individuais.
- O formulário tinha validação local, mas não continha todos os campos solicitados nem arquitetura documentada para endpoint seguro, CRM, Turnstile e score.
- Faltavam automações de Dependabot, CodeQL e pauta editorial semanal.
- A pipeline de deploy não rodava typecheck, auditoria de links nem e2e.
- Não havia arquivo de auditoria documentando problemas, decisões e correções.

## Decisão arquitetural

Migração de React/Vite para Astro + TypeScript + Tailwind CSS.

Motivo: o PDF prioriza SEO, rotas reais, HTML semântico, blog em Markdown, RSS, sitemap automático e manutenção simples em GitHub Pages. Preservar a SPA reduziria o esforço imediato, mas manteria perda de indexação e rotas menos robustas.

## Correções implementadas

- Base Astro estática com `base: "/kairos-engenharia"`.
- Rotas reais para todas as páginas solicitadas.
- Conteúdo de blog em `src/content/blog`, com `status` e filtragem de posts publicados.
- RSS em `/rss.xml` e sitemap em `/sitemap.xml`.
- `manifest.webmanifest`, favicon, robots, canonical, Open Graph, Twitter Cards e JSON-LD.
- Formulário completo com LGPD, honeypot, sanitização, máscara de telefone, score e payload preparado para endpoint seguro.
- WhatsApp, agenda, LinkedIn, analytics, Turnstile e endpoint configuráveis por variáveis públicas.
- Consentimento de cookies antes de carregar analytics.
- Políticas de privacidade e cookies.
- Dependabot, CodeQL, workflow de deploy e workflow editorial semanal.
- Testes unitários e e2e, além de auditoria de links.

## Limites e pendências por credenciais

- Envio real de formulário depende de `PUBLIC_FORM_ENDPOINT`.
- WhatsApp depende de `PUBLIC_WHATSAPP_NUMBER`.
- Agenda depende de `PUBLIC_CALENDAR_URL`.
- LinkedIn real depende de `PUBLIC_LINKEDIN_URL`.
- Analytics depende de `PUBLIC_GA_MEASUREMENT_ID` e consentimento de cookies.
- Turnstile depende de `PUBLIC_TURNSTILE_SITE_KEY` e validação no endpoint seguro.
- Integração com CRM e e-mail de confirmação deve ficar no backend externo, não no GitHub Pages.
