# 5. Pendências Externas e Recomendações de Integração

Abaixo estão listadas as pendências que dependem exclusivamente de credenciais ou autorizações externas do cliente/administrador, sem bloquear a operação atual do site.

---

### 1. Definição do Endpoint do Formulário (`PUBLIC_FORM_ENDPOINT`)
- **Situação Atual:** O formulário está operando em modo de contingência seguro. Caso o lead clique em enviar, uma mensagem clara em destaque informa que o canal automático está em manutenção técnica e disponibiliza os links diretos para envio via e-mail oficial (`conexiumengenharia@gmail.com`) ou WhatsApp (`+55 11 3842-9930`).
- **Ação Recomendada:** Configurar no painel da Vercel ou no arquivo de variáveis de produção a URL do Webhook do CRM da Conexium (ex.: RD Station, HubSpot, Formspree ou API interna em Node/Serverless).

### 2. Ativação do Domínio Canônico Próprio
- **Situação Atual:** O site utiliza `https://conexium-engenharia.vercel.app` como base canônica segura e indexável.
- **Ação Recomendada:** Quando o domínio `conexiumengenharia.com.br` tiver o DNS apontado na Vercel (CNAME/A records), atualizar a variável `PUBLIC_SITE_URL` para `https://conexiumengenharia.com.br`.

### 3. Google Search Console & Bing Webmaster Tools
- **Situação Atual:** Arquivos `robots.txt` e `sitemap.xml` estão gerados e prontos para consumo.
- **Ação Recomendada:** Submeter a URL do sitemap (`https://conexium-engenharia.vercel.app/sitemap.xml`) no painel do Google Search Console após a publicação oficial para acelerar a indexação das 20 páginas.

### 4. Perfil da Empresa no Google (Google Meu Negócio)
- **Situação Atual:** A Conexium atua como consultoria técnica especializada com atendimento regional/nacional.
- **Ação Recomendada:** Criar ou vincular o perfil corporativo da Conexium Engenharia com a categoria *"Consultoria em Engenharia"* ou *"Serviço de Engenharia"*, sem necessidade de exibir endereço residencial caso atenda prioritariamente em ambiente remoto ou in loco no cliente.

### 5. Google Analytics 4 (`PUBLIC_GA_MEASUREMENT_ID`)
- **Situação Atual:** A infraestrutura de medição está implementada em conformidade com as diretrizes do CookieConsent.
- **Ação Recomendada:** Inserir o ID `G-XXXXXXXXXX` no painel da Vercel para ativar o rastreamento automático após a aceitação de cookies pelo visitante.
