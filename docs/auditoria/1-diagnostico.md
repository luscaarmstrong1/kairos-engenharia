# 1. Diagnóstico Técnico — Conexium Engenharia

## Informações Gerais do Projeto
- **Projeto:** Conexium Engenharia
- **Slogan Institucional:** Inteligência em Energia
- **Domínio de Referência:** `https://conexium-engenharia.vercel.app/`
- **Framework:** Astro v7.2.9 (Modo Estático `output: "static"`)
- **Estilização:** Tailwind CSS v3.4.19 + Design Tokens Conexium
- **Testes:** Vitest v4.1.11 (Unitários) + Playwright v1.62.1 (E2E Multi-Viewport)
- **Hospedagem & Infraestrutura:** Vercel (Edge Network) com headers de segurança ativos em `vercel.json`

---

## Mapeamento de Rotas e Páginas (20 rotas compiladas)
1. `/` — Página inicial (Hero de autoridade, Trust bar, Pilares de serviços, Metodologia e Matriz técnica)
2. `/a-conexium/` — Quem Somos (História, governança, responsabilidade técnica ART/CREA e conformidade ética)
3. `/servicos/` — Soluções Técnicas (Visão panorâmica dos três pilares em superfícies alternadas)
4. `/servicos/engenharia-projetos-eletricos/` — Página dedicada ao pilar de Engenharia e Projetos Elétricos
5. `/servicos/consultoria-tecnico-regulatoria/` — Página dedicada ao pilar de Consultoria Técnico-Regulatória
6. `/servicos/pericias-pareceres-tecnicos/` — Página dedicada ao pilar de Perícias, Quesitos e Pareceres Técnicos
7. `/conteudos/` — Casos e Insights (Central de conhecimento técnico com 8 artigos fundamentados)
8. `/conteudos/auditoria-parecer-acesso-evidencias-tecnicas/` — Artigo técnico
9. `/conteudos/estudo-demanda-antes-da-obra/` — Artigo técnico
10. `/conteudos/geradores-continuidade-operacional-cargas-criticas/` — Artigo técnico
11. `/conteudos/projetos-fotovoltaicos-complexos/` — Artigo técnico
12. `/conteudos/projeto-eletrico-vs-parecer-tecnico/` — Artigo técnico
13. `/conteudos/aneel-e-o-projeto-eletrico/` — Artigo técnico
14. `/conteudos/5-situacoes-assistente-tecnico-decisivo/` — Artigo técnico
15. `/conteudos/subestacao-alimentador-transformador-ramal/` — Artigo técnico
16. `/contato/` — Canais de atendimento, fluxo em 3 etapas e formulário com pré-seleção
17. `/politica-de-privacidade/` — Governança e termos da LGPD
18. `/politica-de-cookies/` — Gestão e transparência de cookies
19. `/404/` — Página de erro amigável e acessível
20. `/a-kairos/` — Redirecionamento 301 canônico para `/a-conexium/`

---

## Classificação de Problemas Auditados (P0 a P3)

### [P0 - Resolvido] Falsa confirmação de recebimento no formulário de contato
- **Problema:** Quando `PUBLIC_FORM_ENDPOINT` não estava presente, o formulário apresentava feedback de sucesso sem transmissão real.
- **Correção:** Eliminação da mensagem fictícia. Agora o sistema verifica a presença e o status HTTP do endpoint; se não configurado ou em caso de erro, orienta com destaque e transparência para o e-mail oficial (`conexiumengenharia@gmail.com`) e WhatsApp oficial (`+55 11 3842-9930`).

### [P1 - Resolvido] Inconsistência de URL no sitemap do robots.txt
- **Problema:** `robots.txt` apontava para um domínio canônico que ainda não possui apontamento DNS ativo (`conexiumengenharia.com.br`).
- **Correção:** Atualizado para `https://conexium-engenharia.vercel.app/sitemap.xml`, garantindo indexação imediata pelos crawlers.

### [P1 - Resolvido] Inconsistência de rotulagem legal no rodapé
- **Problema:** Link para `/politica-de-cookies/` estava exibindo âncora textual *"Termos de Uso"*.
- **Correção:** Ajustado para *"Política de Cookies"*, mantendo total fidelidade semântica.

### [P2 - Resolvido] Falta de cobertura automatizada de pré-seleção de serviços
- **Problema:** Usuários vindos de páginas de serviços com `?servico=...` tinham o select pré-selecionado, mas não havia teste E2E garantindo o funcionamento.
- **Correção:** Implementados 3 testes de assertividade de query params na suíte Playwright.

### [P3 - Resolvido] Endurecimento dos cabeçalhos HTTP OWASP
- **Problema:** Faltavam cabeçalhos modernos como `Permissions-Policy`, `Referrer-Policy` e `Strict-Transport-Security` em `vercel.json`.
- **Correção:** Headers adicionados e validados no build.
