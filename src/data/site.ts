export const basePath = import.meta.env.PUBLIC_BASE_PATH || "/kairos-engenharia";

export const site = {
  name: "Conexium Engenharia",
  legalName: "CONEXIUM ENGENHARIA",
  tagline: "Engenharia, conexão e inteligência técnica para o setor elétrico.",
  description:
    "A Conexium Engenharia atua em projetos elétricos, conexão à rede, geração distribuída, consultoria técnico-regulatória, perícias, quesitos técnicos, inteligência energética e infraestrutura para novas cargas.",
  institutionalDescription:
    "A Conexium Engenharia é uma marca técnica especializada em soluções de engenharia elétrica para empresas, integradores, consumidores e operações críticas. A atuação combina análise técnica, leitura normativa, organização de evidências, projetos elétricos e inteligência energética para apoiar decisões em conexão à rede, geração distribuída, infraestrutura elétrica, perícias, eletromobilidade e regulação.",
  institutionalNotice:
    "A Conexium Engenharia é uma marca técnica utilizada por Renovera Energias Renováveis Ltda. Os serviços são prestados conforme escopo técnico contratado, com emissão de ART quando aplicável.",
  technicalNotice:
    "A Conexium Engenharia presta serviços técnicos de engenharia, consultoria e análise documental. Os conteúdos publicados têm caráter informativo e não substituem análise individual do caso concreto, projeto específico, parecer técnico formal ou orientação jurídica quando aplicável.",
  forensicNotice:
    "A atuação em perícias, quesitos e pareceres é de natureza técnica, limitada ao campo da engenharia elétrica. Demandas jurídicas, peticionamento e estratégia processual devem ser conduzidos por advogado habilitado.",
  url: import.meta.env.PUBLIC_SITE_URL || "https://conexiumengenharia.com.br",
  repositoryUrl: "https://github.com/luscaarmstrong1/kairos-engenharia",
  email: "contato@conexiumengenharia.com.br",
  directEmail: "lucas@conexiumengenharia.com.br",
  defaultDescription:
    "Engenharia elétrica, conexão à rede, geração distribuída, regulação, perícias técnicas, quesitos, inteligência energética e eletromobilidade para empresas e integradores.",
};

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos/" },
  { label: "Integradores", href: "/para-integradores/" },
  { label: "Perícias e Quesitos", href: "/servicos/pericias-quesitos-pareceres/" },
  { label: "Cenários", href: "/cases/" },
  { label: "Conteúdos", href: "/conteudos/" },
  { label: "A Conexium", href: "/a-conexium/" },
  { label: "Contato", href: "/contato/" },
];

export const servicePages = [
  {
    title: "Engenharia e Projetos Elétricos",
    slug: "engenharia-projetos-eletricos",
    eyebrow: "Projetos elétricos estratégicos",
    description:
      "Projetos elétricos para instalações em baixa e média tensão, sistemas fotovoltaicos, subestações, quadros, proteção, aumento de carga, entrada de energia, geradores e infraestrutura elétrica.",
    whatsappMessage: "Olá, preciso avaliar um projeto elétrico ou infraestrutura.",
    sections: [
      "Projetos fotovoltaicos, microgeração e minigeração",
      "Baixa e média tensão, subestações e entrada de energia",
      "Estudos de demanda, aumento de carga e novas cargas",
      "Proteção, seletividade, curto-circuito e relés",
      "Geradores, QTA e continuidade operacional",
      "Diagramas, memoriais, especificações e documentação técnica",
    ],
    note:
      "Escopos como projeto executivo, laudo, ART ou estudo especializado são tratados conforme contratação formal e responsabilidade técnica definida.",
  },
  {
    title: "Consultoria Técnico-Regulatória",
    slug: "consultoria-regulatoria",
    eyebrow: "Conexão, regulação e evidências",
    description:
      "Análise técnica e normativa aplicada a conexão, geração distribuída, pareceres de acesso, inversão de fluxo, respostas de distribuidoras, orçamento de conexão, prazos e exigências documentais.",
    whatsappMessage: "Olá, preciso analisar uma restrição de conexão ou parecer de acesso.",
    sections: [
      "Leitura técnica de pareceres e verificação de premissas",
      "Inversão de fluxo, orçamento de conexão e alternativas técnicas",
      "Organização de evidências para tratativas com distribuidoras",
      "Subsídios técnicos para ouvidorias, ANEEL e advogados parceiros",
      "Grid zero, controle de exportação e homologações complexas",
      "Estratégia técnico-administrativa sem promessa de aprovação",
    ],
    note:
      "A Conexium estrutura evidências, auditorias e estratégias proporcionais ao contexto técnico e regulatório. A decisão final depende da distribuidora e do contexto de rede.",
  },
  {
    title: "Perícias, Quesitos e Pareceres Técnicos",
    slug: "pericias-quesitos-pareceres",
    eyebrow: "Perícia técnica e evidências",
    description:
      "Apoio técnico em temas de engenharia elétrica envolvendo laudos, danos elétricos, medição, consumo, demanda, conexão, geração distribuída, instalações e responsabilidade técnica.",
    whatsappMessage: "Olá, preciso de apoio técnico para quesitos, laudo ou parecer em engenharia elétrica.",
    sections: [
      "Danos elétricos, consumo elevado e irregularidade de medição",
      "Demanda contratada, faturas, qualidade de energia e responsabilidade técnica",
      "Geração distribuída, parecer de acesso e inversão de fluxo",
      "Instalações elétricas, subestações, proteção e conformidade técnica",
      "Quesitos técnicos, análise de laudos e parecer técnico",
      "Matriz de evidências, linha do tempo técnica e memória de cálculo",
      "Revisão documental e subsídios técnicos para manifestação especializada",
      "Assistência técnica pericial dentro dos limites profissionais aplicáveis",
    ],
    note:
      "A Conexium presta apoio técnico de engenharia. Atividades jurídicas, peticionamento, representação processual e estratégia jurídica devem ser conduzidas por advogado habilitado.",
  },
  {
    title: "Inteligência Energética",
    slug: "inteligencia-energetica",
    eyebrow: "Dados, faturas e automação",
    description:
      "Análise de faturas, demanda contratada, consumo, enquadramento tarifário, indicadores, dashboards e histórico energético para apoiar decisões técnicas e econômicas.",
    whatsappMessage: "Olá, preciso organizar dados, faturas ou indicadores energéticos.",
    sections: [
      "Diagnóstico de faturas, consumo, demanda e ultrapassagens",
      "Enquadramento tarifário, custos não compensáveis e histórico de consumo",
      "Indicadores, dashboards e relatórios técnicos",
      "Automação de memoriais, formulários e rotinas documentais",
      "Planilhas inteligentes, Python e VBA aplicados com revisão técnica",
      "Organização de dados para decisão energética",
    ],
    note:
      "A automação amplia consistência e rastreabilidade, mas a interpretação técnica permanece humana, documentada e proporcional ao escopo contratado.",
  },
  {
    title: "Eletromobilidade e Novas Cargas",
    slug: "eletromobilidade",
    eyebrow: "Recarga, frotas e infraestrutura",
    description:
      "Estudos e projetos para eletropostos, carregadores, hubs de recarga, frotas elétricas, condomínios, postos de combustível e empresas que precisam avaliar novas cargas.",
    whatsappMessage: "Olá, preciso estudar a viabilidade de infraestrutura de recarga.",
    sections: [
      "Estudo de viabilidade para hubs, frotas, postos e condomínios",
      "Demanda, ampliação de carga e estratégia tarifária",
      "Dimensionamento de carregadores e infraestrutura elétrica",
      "Transformadores, proteção e entrada de energia",
      "Integração com solar, baterias, rede e operação crítica",
      "Fases de implantação para reduzir retrabalho antes do investimento",
    ],
    note:
      "Cada estudo separa premissas, restrições e fases de implantação para apoiar decisões antes da compra de equipamentos ou contratação de obra.",
  },
];

export const profileSolutions = [
  {
    title: "Integradores solares",
    text: "Pareceres, inversão de fluxo, projetos, documentação, contestação técnica e suporte white label.",
    href: "/para-integradores/",
  },
  {
    title: "Empresas, indústrias e comércios",
    text: "Demanda, expansão, geração, subestação, faturas e infraestrutura elétrica.",
    href: "/servicos/engenharia-projetos-eletricos/",
  },
  {
    title: "Hospitais e operações críticas",
    text: "Backup, geradores, QTA, proteção, confiabilidade e continuidade.",
    href: "/servicos/engenharia-projetos-eletricos/",
  },
  {
    title: "Condomínios, postos e mobilidade",
    text: "Recarga, novas cargas, entrada de energia, frotas, eletropostos e viabilidade.",
    href: "/servicos/eletromobilidade/",
  },
  {
    title: "Escritórios, peritos e assistentes técnicos",
    text: "Quesitos, parecer técnico, análise de laudos, memória de cálculo e evidências.",
    href: "/servicos/pericias-quesitos-pareceres/",
  },
];

export const cases = [
  {
    title: "Restrição de conexão em geração distribuída",
    category: "Conexão e regulação",
    label: "Cenário de referência anonimizado",
    context:
      "Um integrador recebeu negativa de conexão para geração distribuída, com justificativa de restrição técnica na rede e possível inversão de fluxo. A resposta indicava reforços, mas não deixava claras as premissas, o ponto de análise, as alternativas avaliadas e a relação entre potência solicitada e impacto identificado.",
    challenge:
      "Separar restrição técnica demonstrada de conclusão genérica baseada em premissas incompletas, verificando carga local, geração existente, transformador, ponto de conexão e alternativas menos gravosas.",
    scope:
      "Organização de documentos, pareceres, dados da unidade, características do sistema proposto e resposta da distribuidora, com avaliação de coerência técnica e inconsistências.",
    strategy: "Relacionar premissas, carga, ponto de conexão, alternativas e fundamentação técnica em matriz verificável.",
    deliverables: "Relatório técnico, matriz de inconsistências, resumo executivo, argumentos técnicos e organização documental.",
    impact: "Discussão mais clara e centrada em elementos verificáveis, sem promessa de aprovação.",
  },
  {
    title: "Aumento de carga e adequação de infraestrutura elétrica",
    category: "Projetos elétricos",
    label: "Cenário de referência",
    context:
      "Uma empresa em expansão precisava ampliar sua capacidade instalada para atender novas cargas operacionais em uma instalação projetada para uma realidade anterior.",
    challenge:
      "Evitar ampliação sem avaliação completa da infraestrutura elétrica, reduzindo risco de sobrecarga, queda de tensão, incompatibilidade de proteção, retrabalho e custo elevado.",
    scope:
      "Análise de carga existente, demanda projetada, quadros, entrada de energia, padrão de atendimento, possibilidades de ampliação e alternativas de implantação.",
    strategy: "Separar o que poderia ser aproveitado, adequado ou reprojetado antes da execução.",
    deliverables: "Diagnóstico técnico, estimativa de demanda, diretrizes de projeto, revisão da infraestrutura e documentação técnica.",
    impact: "Visão clara sobre adequações necessárias antes de contratação e execução.",
  },
  {
    title: "Quesitos técnicos para perícia envolvendo energia elétrica",
    category: "Perícia técnica",
    label: "Cenário de referência",
    context:
      "Uma discussão técnica envolvendo energia elétrica apresentava faturas, fotos, notificações, laudo técnico, histórico de consumo e informações da instalação.",
    challenge: "Evitar quesitos genéricos, repetitivos ou desconectados dos documentos do caso.",
    scope:
      "Leitura dos documentos, identificação de pontos técnicos controvertidos, separação entre fatos e hipóteses, matriz de evidências e formulação de quesitos objetivos.",
    strategy: "Direcionar as perguntas aos elementos verificáveis e tecnicamente pertinentes.",
    deliverables: "Quesitos técnicos, resumo do caso, matriz de evidências e observações técnicas.",
    impact: "Perguntas mais objetivas e tecnicamente direcionadas para orientar a perícia.",
  },
  {
    title: "Análise de faturas e demanda contratada",
    category: "Inteligência energética",
    label: "Cenário de referência",
    context:
      "Uma empresa observou aumento relevante no custo de energia, com dúvidas sobre demanda contratada, ultrapassagem, consumo e enquadramento tarifário.",
    challenge:
      "Entender se o aumento estava relacionado ao crescimento operacional, erro de contratação, mudança de perfil de carga, ultrapassagem, fator de potência ou sazonalidade.",
    scope:
      "Análise de faturas, histórico de consumo, demanda medida, demanda contratada, modalidade tarifária e comportamento das cargas.",
    strategy: "Separar fatores operacionais, tarifários e técnicos que influenciam o custo de energia.",
    deliverables: "Relatório técnico, gráficos de evolução, diagnóstico tarifário e recomendações para gestão de demanda.",
    impact: "Visão objetiva sobre os fatores que influenciavam o custo de energia.",
  },
  {
    title: "Viabilidade de eletroposto e novas cargas",
    category: "Eletromobilidade",
    label: "Cenário de referência",
    context:
      "Um empreendimento avaliava instalar carregadores para veículos elétricos, inicialmente considerando apenas a escolha dos equipamentos.",
    challenge:
      "A implantação poderia exigir aumento de demanda, adequação de entrada, revisão de proteção, novos quadros, estudo de simultaneidade e tratativa com a distribuidora.",
    scope:
      "Avaliação da instalação, perfil das cargas, potência dos carregadores, infraestrutura existente e cenários de implantação.",
    strategy: "Entender implicações elétricas antes da compra dos equipamentos.",
    deliverables: "Estudo preliminar de viabilidade, recomendações de infraestrutura, cenários de potência e diretrizes para projeto.",
    impact: "Compreensão das implicações técnicas antes do investimento.",
  },
  {
    title: "Suporte técnico para integrador fotovoltaico",
    category: "Geração distribuída",
    label: "Cenário de referência",
    context:
      "Um integrador com volume recorrente de projetos enfrentava retrabalho em documentação, exigências de concessionárias, dúvidas sobre padrões de entrada e pareceres de acesso.",
    challenge:
      "Padronizar análises, melhorar qualidade documental e responder de forma mais consistente às exigências das distribuidoras.",
    scope:
      "Estruturação de modelos de análise, checklists, revisão de projetos, apoio em pareceres de acesso e padronização documental.",
    strategy: "Criar retaguarda técnica para reduzir inconsistências e organizar respostas.",
    deliverables: "Modelos de relatório, checklist de submissão, matriz de análise de parecer, orientação técnica para contestação e suporte sob demanda.",
    impact: "Retaguarda técnica mais estruturada e menor risco de inconsistências documentais.",
  },
];

export const faqs = [
  {
    question: "A Conexium garante aprovação junto à distribuidora?",
    answer:
      "Não. A Conexium não promete aprovação ou resultado. O trabalho é técnico e busca organizar documentos, analisar premissas, identificar inconsistências e apresentar alternativas fundamentadas para apoiar a tomada de decisão.",
  },
  {
    question: "O que é auditoria de parecer de acesso?",
    answer:
      "É a análise técnica do parecer ou orçamento emitido pela distribuidora, verificando premissas, ponto de conexão, carga, geração, alternativas, justificativas técnicas, normas aplicáveis e possíveis inconsistências.",
  },
  {
    question: "A Conexium elabora quesitos para perícia?",
    answer:
      "Sim. A Conexium pode elaborar quesitos técnicos, analisar laudos, organizar evidências e apoiar assistentes técnicos, advogados e partes interessadas em temas de engenharia elétrica.",
  },
  {
    question: "A Conexium atua como perito judicial?",
    answer:
      "A atuação como perito judicial depende de nomeação pelo juízo. A Conexium atua tecnicamente em pareceres, quesitos, assistência técnica e análise de documentos, respeitando os limites profissionais e legais aplicáveis.",
  },
  {
    question: "Atendem projetos fora de Minas Gerais?",
    answer:
      "Sim. A Conexium pode atuar em projetos e análises técnicas em diferentes estados, especialmente quando o trabalho envolver documentos digitais, pareceres, faturas, projetos, laudos, normas e tratativas técnicas.",
  },
];

export const allRoutes = [
  "/",
  "/servicos/",
  ...servicePages.map((service) => `/servicos/${service.slug}/`),
  "/para-integradores/",
  "/cases/",
  "/conteudos/",
  "/a-conexium/",
  "/contato/",
  "/politica-de-privacidade/",
  "/politica-de-cookies/",
  "/404/",
];
