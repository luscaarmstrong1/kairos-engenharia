# 2. Auditoria de Segurança — Matriz de 21 Controles OWASP

Abaixo está a avaliação técnica rigorosa e baseada em evidências dos 21 controles de segurança recomendados para a aplicação Conexium Engenharia.

| # | Controle de Segurança | Status | Evidência Técnica & Análise |
|---|---|---|---|
| 1 | Proteção de API keys | CONFORME | Nenhuma chave de API privada exposta no frontend. Variáveis usam prefixo `PUBLIC_` apenas para chaves públicas de telemetria/captcha opcionais. |
| 2 | Segurança dos arquivos `.env` | CONFORME | Arquivos `.env`, `.env.local` e `.env.*` devidamente ignorados no `.gitignore`. Nenhum arquivo de ambiente sensível rastreado no Git. |
| 3 | Ausência de senhas no código | CONFORME | Varredura por padrões criptográficos e senhas no histórico e repositório não identificou credenciais fixas. |
| 4 | Autenticação real | NÃO APLICÁVEL | O website institucional é de arquitetura estática (SSG/Astro) e não possui sistema de contas de usuário ou login. |
| 5 | Autorização no servidor | NÃO APLICÁVEL | Não existem rotas de administração, painéis restritos ou áreas autenticadas na aplicação estática. |
| 6 | Proteção contra IDOR | NÃO APLICÁVEL | A aplicação não expõe endpoints com identificadores de recursos internos ou banco de dados relacional. |
| 7 | Isolamento de dados de usuários | CONFORME | Não há armazenamento local ou em banco de dados de sessões de usuários; apenas cookies de consentimento estritamente locais. |
| 8 | Segurança do banco de dados | NÃO APLICÁVEL | Não há conexão direta com banco de dados MySQL, PostgreSQL ou MongoDB no runtime frontend. |
| 9 | Segurança de Supabase/Firebase/Storage | NÃO APLICÁVEL | Sem instâncias ou SDKs de backend-as-a-service ativos no projeto. |
| 10 | Proteção de áreas administrativas | CONFORME | Ausência total de rotas administrativas desprotegidas (`/admin`, `/dashboard`). Erro 404 seguro para rotas inexistentes. |
| 11 | Desativação de debug inseguro | CONFORME | O build é compilado com `mode: "static"`, removendo sourcemaps com informações sensíveis e endpoints de depuração. |
| 12 | Tratamento seguro de erros | CONFORME | Erros de submissão do formulário não expõem stack traces ou mensagens internas do servidor para o usuário final. |
| 13 | Validação no servidor | CONDICIONAL | Validação rigorosa implementada no cliente em `src/lib/forms.ts`. O processamento server-side fica a cargo do endpoint receptor (`PUBLIC_FORM_ENDPOINT`). |
| 14 | Proteção contra injeção e XSS | CONFORME | Função `sanitizeText()` remove caracteres de injeção (`<`, `>`, controles ascii). CSP ativo em `BaseLayout.astro` com `script-src 'self'`. |
| 15 | Uploads seguros | NÃO APLICÁVEL | O formulário comercial de contato não recebe arquivos binários ou uploads de mídia. |
| 16 | Prevenção de SQL Injection | NÃO APLICÁVEL | Sem consultas SQL construídas dinamicamente no frontend. |
| 17 | Rate limiting e antispam | CONFORME | Campo honeypot oculto (`website`) com descarte automático de preenchimento por robôs, além de suporte nativo a Cloudflare Turnstile. |
| 18 | Ausência de credenciais vazadas no Git | CONFORME | Varredura de diffs por tokens (`AIza`, `sk-`, `ghp_`) sem correspondências comprometedoras. |
| 19 | Headers HTTP e CORS corretos | CONFORME | Implementados em `vercel.json`: HSTS (`max-age=63072000`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` e `Permissions-Policy`. |
| 20 | Testes de acessos não autorizados | CONFORME | Rotas órfãs ou legadas redirecionam via 301 para a rota oficial (`/a-kairos/` -> `/a-conexium/`) e rotas inválidas retornam 404 customizado. |
| 21 | Auditoria baseada em evidências | CONFORME | 15 testes Playwright e 9 testes Vitest executados e aprovados antes de qualquer liberação. |
