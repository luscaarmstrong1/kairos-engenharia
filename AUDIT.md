# Auditoria Inicial e Decisões

Data: 2026-07-03

## Contexto auditado

Repositório previsto após migração: `luscaarmstrong1/kairos-engenharia`

URL pública prevista após migração: `https://luscaarmstrong1.github.io/kairos-engenharia/`

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

## Auditoria premium aplicada em 2026-07-22

- Atualização transitiva de dependências dentro dos ranges declarados para reduzir vulnerabilidades altas reportadas por `pnpm audit`.
- Ajuste do carregamento da fonte Inter para remover aviso de build e preservar o base path do GitHub Pages.
- Revisão da CSP em meta tag para manter restrições compatíveis com GitHub Pages sem bloquear endpoint HTTPS externo de formulário. `frame-ancestors` permanece pendente de header real em hospedagem que permita configuração de resposta.
- Formulário reforçado com limites de tamanho, validação de UF, bloqueio de endpoint não HTTPS, estado de envio, `aria-busy` e associação correta de mensagens de erro.
- Menu móvel aprimorado para fechar por link, Escape e clique fora, reduzindo risco de navegação presa em telas pequenas.
