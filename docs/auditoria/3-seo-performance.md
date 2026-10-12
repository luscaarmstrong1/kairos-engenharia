# 3. SEO Técnico, Especializado e Performance

## Metadados e Arquitetura Semântica
- **Páginas Auditadas:** 20 páginas HTML estáticas geradas com títulos e meta descriptions exclusivas.
- **Hierarquia Semântica:** Todas as páginas possuem exatamente um elemento `<h1>` principal de autoridade, seguido de subtítulos `<h2>` e `<h3>` lógicos.
- **Canonical URLs:** Geradas dinamicamente com trailing slash (`/`), apontando para a URL canônica em `https://conexium-engenharia.vercel.app/` (e configuráveis via variável de ambiente para domínio próprio).
- **Open Graph & Twitter Cards:** Configurados com `og:image` de alta definição (`conexium-og-image.png`), `og:site_name`, `og:locale` (`pt_BR`) e tipos semânticos (`website` e `article`).
- **Sitemap & Robots:**
  - `sitemap-index.xml` e `sitemap-0.xml` gerados automaticamente no build via `@astrojs/sitemap`.
  - `robots.txt` apontando para a URL válida do sitemap.
- **Dados Estruturados (JSON-LD):**
  - `Organization` com nome oficial, logo e contato.
  - `ProfessionalService` com escopo nos 3 pilares técnicos.
  - `Article` em todas as publicações de Casos e Insights com datas de publicação, autor institucional e headline.
  - `BreadcrumbList` estruturado em todas as páginas internas.

---

## Oportunidades de SEO B2B Implementadas
Os conteúdos foram otimizados organicamente para termos de alta intenção comercial e técnica no setor elétrico:
1. *Projetos elétricos executivos e subestações de média tensão*
2. *Consultoria regulatória ANEEL, REN 1.000/2021 e PRODIST*
3. *Auditoria de pareceres de acesso e orçamentos de conexão*
4. *Perícias judiciais e assistência técnica em engenharia elétrica*
5. *Quesitos técnicos para litígios e arbitragens elétricas*

---

## Performance e Core Web Vitals
- **Imagens:** Imagens de hero e componentes servidas com dimensões explícitas (`width` e `height`), decodificação assíncrona e `loading="lazy"` fora da primeira dobra (com `fetchpriority="high"` e `loading="eager"` no Hero principal).
- **Fontes Self-Hosted:** Fontes `Source Serif 4` e `IBM Plex Sans` compactadas em WOFF2 e pré-carregadas via `<link rel="preload">` no `<head>`, eliminando Cumulative Layout Shift (CLS) e Flash of Unstyled Text (FOUT).
- **Assets Estáticos:** Cache-Control configurado em `vercel.json` com `public, max-age=31536000, immutable` para ativos versionados em `/assets/`.
- **CSS & JS:** CSS compilado com Tailwind minificado e scripts em módulos leves (`type="module"`), garantindo First Contentful Paint (FCP) e Largest Contentful Paint (LCP) rápidos.
