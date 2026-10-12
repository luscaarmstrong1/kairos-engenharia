# 4. Relatório de Testes e Validação Automatizada

## Suíte de Testes Unitários (Vitest)
Executados via `npm test` (`vitest run`):
- `src/tests/forms.test.ts` (5 testes):
  - Aplicação de máscara de telefone brasileira com DDD
  - Sanitização de tags HTML e caracteres maliciosos (`sanitizeText`)
  - Validação de consentimento LGPD e campos obrigatórios
  - Rejeição de envios com honeypot preenchido por robôs
  - Cálculo de pontuação e scoring de leads comerciais
- `src/tests/whatsapp.test.ts` (2 testes):
  - Geração de mensagens contextuais por página e serviço
  - Formatação sanitizada da URL do WhatsApp (`wa.me/551138429930`)
- `src/tests/routes.test.ts` (2 testes):
  - Validação de integridade de rotas principais e canonicals
**Resultado:** 9/9 testes aprovados (100% de sucesso).

---

## Suíte de Testes End-to-End (Playwright)
Executados via `npm run test:e2e` (`playwright test` com servidor `npm run preview`):
- **Projetos Testados:**
  1. `mobile-390` (Pixel 5: 390 × 844 px)
  2. `tablet-768` (Chromium: 768 × 1024 px)
  3. `desktop-1440` (Chromium: 1440 × 900 px)
- **Cenários Cobertos (15 testes executados):**
  - Navegação entre todas as páginas e ausência de overflow horizontal (`scrollWidth <= innerWidth`)
  - Presença dos 3 pilares de serviços exclusivos
  - Abertura e fechamento do menu mobile e página de erro 404
  - Redirecionamento institucional de rotas legadas
  - Validação de obrigatoriedade de campos no formulário de contato
  - Pré-seleção de serviço no formulário via URL param (`?servico=...`)
  - Submissão segura com orientação para canais oficiais quando não há endpoint configurado
  - Listagem e navegação para os artigos técnicos de Casos e Insights
  - Captura automatizada de screenshots de página inteira em todos os breakpoints
**Resultado:** 15/15 testes aprovados (100% de sucesso).

---

## Auditorias de Scripts Internos
- `node scripts/lint-site.mjs`: Validação de sintaxe e padrões institucionais — **OK**
- `node scripts/audit-links.mjs`: Validação de todas as âncoras e links internos — **OK**
- `npm run build`: Compilação estática de 20 páginas em `dist/` — **OK**
