export const basePath = "/kairos-engenharia";

export const site = {
  name: "Kairós Engenharia",
  legalName: "KAIRÓS ENGENHARIA",
  tagline: "Engenharia Elétrica, Consultoria Técnico-Regulatória e Inteligência Energética.",
  url: "https://renovera1.github.io/kairos-engenharia",
  repositoryUrl: "https://github.com/renovera1/kairos-engenharia",
  email: "contato@kairosengenharia.com.br",
  defaultDescription:
    "Projetos elétricos, conexão à rede, consultoria técnico-regulatória e inteligência energética para empresas que precisam gerar, expandir, proteger e operar com segurança.",
};

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos/" },
  { label: "Integradores", href: "/para-integradores/" },
  { label: "Cases", href: "/cases/" },
  { label: "Conteúdos", href: "/conteudos/" },
  { label: "A Kairós", href: "/a-kairos/" },
  { label: "Contato", href: "/contato/" },
];

export const servicePages = [
  {
    title: "Engenharia e Projetos Elétricos",
    slug: "engenharia-projetos-eletricos",
    eyebrow: "Projetos elétricos estratégicos",
    description:
      "Projetos fotovoltaicos, média tensão, aumento de carga, proteção, geradores e infraestrutura elétrica industrial com rigor técnico e documentação rastreável.",
    whatsappMessage: "Olá, preciso avaliar um projeto elétrico ou infraestrutura.",
    sections: [
      "Projetos fotovoltaicos, microgeração e minigeração",
      "Dimensionamento CC/CA, strings, MPPT e corrente por entrada",
      "Tensão máxima corrigida por temperatura e queda de tensão",
      "Proteções CC e CA, proteção e seletividade",
      "Diagramas unifilares e estudos de viabilidade",
      "Estudos de demanda, aumento de carga e subestações de consumidor",
      "Média tensão, geradores e quadros de transferência automática",
      "Continuidade operacional e infraestrutura elétrica industrial",
    ],
    note:
      "Escopos como projeto executivo, laudo, ART ou estudo especializado são tratados conforme contratação formal e responsabilidade técnica definida.",
  },
  {
    title: "Consultoria Técnico-Regulatória",
    slug: "consultoria-regulatoria",
    eyebrow: "Auditoria de Parecer de Acesso",
    description:
      "Auditoria de pareceres, organização de evidências e estratégia de conexão proporcional ao contexto técnico e regulatório do projeto.",
    whatsappMessage: "Olá, preciso analisar uma restrição de conexão ou parecer de acesso.",
    sections: [
      "Leitura técnica de parecer e verificação de premissas",
      "Avaliação de ponto de análise e revisão de curvas de carga",
      "Análise de alternativas de conexão",
      "Organização de evidências e estratégia técnico-administrativa",
      "Subsídios técnicos para ouvidorias, ANEEL e advogados parceiros",
      "Grid zero, controle de exportação e gestão de homologações complexas",
    ],
    note:
      "Estruturamos evidências, auditorias e estratégias de conexão proporcionais ao contexto técnico e regulatório do projeto. A decisão final depende da distribuidora e do contexto de rede.",
  },
  {
    title: "Inteligência Energética",
    slug: "inteligencia-energetica",
    eyebrow: "Dados, faturas e automação",
    description:
      "Diagnóstico de faturas, análise de demanda, dashboards e automações para organizar indicadores e apoiar decisões de energia.",
    whatsappMessage: "Olá, preciso organizar dados, faturas ou indicadores energéticos.",
    sections: [
      "Diagnóstico de faturas, consumo e demanda",
      "Ultrapassagem, perfil tarifário e custos não compensáveis",
      "Análise de viabilidade e organização de indicadores",
      "Dashboards e relatórios técnicos",
      "Automação de memoriais e gestão documental",
      "Planilhas inteligentes, Python e VBA aplicados com revisão técnica",
    ],
    note:
      "A automação é usada para ampliar rastreabilidade e consistência; a interpretação técnica permanece humana e documentada.",
  },
  {
    title: "Eletromobilidade",
    slug: "eletromobilidade",
    eyebrow: "Infraestrutura de recarga",
    description:
      "Estudos de viabilidade para hubs de recarga, frotas, postos, varejo, condomínios e operações críticas.",
    whatsappMessage: "Olá, preciso estudar a viabilidade de infraestrutura de recarga.",
    sections: [
      "Estudo de viabilidade para hubs e frotas",
      "Demanda, ampliação de carga e estratégia tarifária",
      "Dimensionamento de carregadores e infraestrutura elétrica",
      "Transformadores, proteção e integração solar, bateria e rede",
      "Aplicações para postos, varejo, condomínios e hospitais",
    ],
    note:
      "Cada estudo separa premissas, restrições e fases de implantação para reduzir retrabalho antes do investimento.",
  },
];

export const profileSolutions = [
  {
    title: "Integradores",
    text: "Apoio white label, auditoria de projetos, pareceres restritivos, padronização documental e retainer mensal.",
    href: "/para-integradores/",
  },
  {
    title: "Indústrias e comércios",
    text: "Demanda, subestação, aumento de carga, geração distribuída, continuidade operacional e eficiência documental.",
    href: "/servicos/engenharia-projetos-eletricos/",
  },
  {
    title: "Hospitais e operações críticas",
    text: "Backup, geradores, transferência automática, proteção e critérios de confiabilidade para cargas sensíveis.",
    href: "/servicos/engenharia-projetos-eletricos/",
  },
  {
    title: "Postos, frotas e mobilidade elétrica",
    text: "Viabilidade de recarga, infraestrutura elétrica, integração com rede, solar e baterias.",
    href: "/servicos/eletromobilidade/",
  },
];

export const cases = [
  {
    title: "Restrição de conexão em geração distribuída",
    category: "Conexão e regulação",
    label: "Caso técnico anonimizado",
    context: "Projeto fotovoltaico com parecer restritivo e incerteza sobre a rota de conexão.",
    challenge: "Distinguir premissas de rede, lacunas documentais e alternativas técnicas proporcionais.",
    scope: "Auditoria de parecer, revisão de premissas, matriz de evidências e análise de alternativas.",
    strategy: "Organizar perguntas técnicas, evidências e documentação para interlocução administrativa.",
    deliverables: "Relatório técnico, quadro de evidências, riscos e próximos passos.",
    impact: "Decisão de continuidade mais clara, sem inventar garantia de aprovação.",
  },
  {
    title: "Aumento de carga para operação comercial",
    category: "Projetos elétricos",
    label: "Cenário de referência",
    context: "Empresa em expansão precisava entender impacto de novas cargas antes de contratar obra.",
    challenge: "Compatibilizar demanda, entrada de energia, proteção e fases de implantação.",
    scope: "Levantamento de cargas, estudo de demanda e arquitetura preliminar.",
    strategy: "Separar cenário atual, expansão e restrições prováveis de infraestrutura.",
    deliverables: "Memorial de premissas, matriz de cargas e recomendações técnicas.",
    impact: "Critérios objetivos para projeto, contratação e diálogo com a concessionária.",
  },
  {
    title: "Hub de recarga rápida",
    category: "Eletromobilidade",
    label: "Caso ilustrativo",
    context: "Operação avaliava implantação de recarga rápida em local com demanda futura elevada.",
    challenge: "Dimensionar infraestrutura, simultaneidade, fases e integração com rede.",
    scope: "Viabilidade, demanda, carregadores, ampliação de carga e alternativas de implantação.",
    strategy: "Planejar fases técnicas e critérios de investimento antes da compra de equipamentos.",
    deliverables: "Estudo preliminar, matriz de riscos e diretrizes de infraestrutura.",
    impact: "Base técnica para decisão, sem estimativas comerciais não comprovadas.",
  },
  {
    title: "Continuidade operacional com gerador",
    category: "Continuidade operacional",
    label: "Caso técnico anonimizado",
    context: "Operação crítica precisava organizar cargas prioritárias e critérios de backup.",
    challenge: "Evitar subdimensionamento, falhas de transferência e indisponibilidade de circuitos essenciais.",
    scope: "Classificação de cargas, QTA, proteção e arquitetura de operação.",
    strategy: "Definir cargas críticas e cenários de partida com documentação rastreável.",
    deliverables: "Memorial técnico, lista de cargas e diretrizes de implementação.",
    impact: "Maior clareza para compra, instalação e operação do sistema de backup.",
  },
];

export const faqs = [
  {
    question: "A Kairós garante aprovação junto à distribuidora?",
    answer:
      "Não. A Kairós presta engenharia, auditoria, estratégia, documentação e condução técnico-administrativa; a decisão depende da distribuidora e do contexto de rede.",
  },
  {
    question: "O que é uma auditoria de parecer de acesso?",
    answer:
      "É uma revisão técnica das premissas, exigências, restrições e alternativas apresentadas em um parecer, com organização de evidências para decisão e interlocução.",
  },
  {
    question: "Quando é necessário estudo de demanda?",
    answer:
      "Quando a operação vai crescer, receber novas cargas, instalar geração, recarga, backup ou quando há risco de ultrapassagem e infraestrutura subdimensionada.",
  },
  {
    question: "A Kairós executa obras?",
    answer:
      "A atuação é consultiva e técnica. Escopos de execução ou acompanhamento dependem de contratação específica, responsabilidade definida e parceiros adequados.",
  },
  {
    question: "Como funciona o diagnóstico técnico?",
    answer:
      "Começa com triagem do perfil, desafio e urgência, seguida da leitura de documentos, premissas e riscos para definir rota de análise e entregáveis.",
  },
  {
    question: "Atendem projetos fora de Minas Gerais?",
    answer:
      "Sim, a análise técnica pode apoiar projetos em outros estados, observando normas da distribuidora local e o contexto regulatório aplicável.",
  },
];

export const allRoutes = [
  "/",
  "/servicos/",
  ...servicePages.map((service) => `/servicos/${service.slug}/`),
  "/para-integradores/",
  "/cases/",
  "/conteudos/",
  "/a-kairos/",
  "/contato/",
  "/politica-de-privacidade/",
  "/politica-de-cookies/",
  "/404/",
];
