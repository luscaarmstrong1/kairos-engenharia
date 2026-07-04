export const basePath = "/kairos-engenharia";

export const site = {
  name: "KairÃ³s Engenharia",
  legalName: "KAIRÃ“S ENGENHARIA",
  tagline: "Engenharia ElÃ©trica, Consultoria TÃ©cnico-RegulatÃ³ria e InteligÃªncia EnergÃ©tica.",
  url: "https://renovera1.github.io/kairos-engenharia",
  repositoryUrl: "https://github.com/renovera1/kairos-engenharia",
  email: "contato@kairosengenharia.com.br",
  defaultDescription:
    "Projetos elÃ©tricos, conexÃ£o Ã  rede, consultoria tÃ©cnico-regulatÃ³ria e inteligÃªncia energÃ©tica para empresas que precisam gerar, expandir, proteger e operar com seguranÃ§a.",
};

export const navItems = [
  { label: "InÃ­cio", href: "/" },
  { label: "ServiÃ§os", href: "/servicos/" },
  { label: "Integradores", href: "/para-integradores/" },
  { label: "Cases", href: "/cases/" },
  { label: "ConteÃºdos", href: "/conteudos/" },
  { label: "A KairÃ³s", href: "/a-kairos/" },
  { label: "Contato", href: "/contato/" },
];

export const servicePages = [
  {
    title: "Engenharia e Projetos ElÃ©tricos",
    slug: "engenharia-projetos-eletricos",
    eyebrow: "Projetos elÃ©tricos estratÃ©gicos",
    description:
      "Projetos fotovoltaicos, mÃ©dia tensÃ£o, aumento de carga, proteÃ§Ã£o, geradores e infraestrutura elÃ©trica industrial com rigor tÃ©cnico e documentaÃ§Ã£o rastreÃ¡vel.",
    whatsappMessage: "OlÃ¡, preciso avaliar um projeto elÃ©trico ou infraestrutura.",
    sections: [
      "Projetos fotovoltaicos, microgeraÃ§Ã£o e minigeraÃ§Ã£o",
      "Dimensionamento CC/CA, strings, MPPT e corrente por entrada",
      "TensÃ£o mÃ¡xima corrigida por temperatura e queda de tensÃ£o",
      "ProteÃ§Ãµes CC e CA, proteÃ§Ã£o e seletividade",
      "Diagramas unifilares e estudos de viabilidade",
      "Estudos de demanda, aumento de carga e subestaÃ§Ãµes de consumidor",
      "MÃ©dia tensÃ£o, geradores e quadros de transferÃªncia automÃ¡tica",
      "Continuidade operacional e infraestrutura elÃ©trica industrial",
    ],
    note:
      "Escopos como projeto executivo, laudo, ART ou estudo especializado sÃ£o tratados conforme contrataÃ§Ã£o formal e responsabilidade tÃ©cnica definida.",
  },
  {
    title: "Consultoria TÃ©cnico-RegulatÃ³ria",
    slug: "consultoria-regulatoria",
    eyebrow: "Auditoria de Parecer de Acesso",
    description:
      "Auditoria de pareceres, organizaÃ§Ã£o de evidÃªncias e estratÃ©gia de conexÃ£o proporcional ao contexto tÃ©cnico e regulatÃ³rio do projeto.",
    whatsappMessage: "OlÃ¡, preciso analisar uma restriÃ§Ã£o de conexÃ£o ou parecer de acesso.",
    sections: [
      "Leitura tÃ©cnica de parecer e verificaÃ§Ã£o de premissas",
      "AvaliaÃ§Ã£o de ponto de anÃ¡lise e revisÃ£o de curvas de carga",
      "AnÃ¡lise de alternativas de conexÃ£o",
      "OrganizaÃ§Ã£o de evidÃªncias e estratÃ©gia tÃ©cnico-administrativa",
      "SubsÃ­dios tÃ©cnicos para ouvidorias, ANEEL e advogados parceiros",
      "Grid zero, controle de exportaÃ§Ã£o e gestÃ£o de homologaÃ§Ãµes complexas",
    ],
    note:
      "Estruturamos evidÃªncias, auditorias e estratÃ©gias de conexÃ£o proporcionais ao contexto tÃ©cnico e regulatÃ³rio do projeto. A decisÃ£o final depende da distribuidora e do contexto de rede.",
  },
  {
    title: "InteligÃªncia EnergÃ©tica",
    slug: "inteligencia-energetica",
    eyebrow: "Dados, faturas e automaÃ§Ã£o",
    description:
      "DiagnÃ³stico de faturas, anÃ¡lise de demanda, dashboards e automaÃ§Ãµes para organizar indicadores e apoiar decisÃµes de energia.",
    whatsappMessage: "OlÃ¡, preciso organizar dados, faturas ou indicadores energÃ©ticos.",
    sections: [
      "DiagnÃ³stico de faturas, consumo e demanda",
      "Ultrapassagem, perfil tarifÃ¡rio e custos nÃ£o compensÃ¡veis",
      "AnÃ¡lise de viabilidade e organizaÃ§Ã£o de indicadores",
      "Dashboards e relatÃ³rios tÃ©cnicos",
      "AutomaÃ§Ã£o de memoriais e gestÃ£o documental",
      "Planilhas inteligentes, Python e VBA aplicados com revisÃ£o tÃ©cnica",
    ],
    note:
      "A automaÃ§Ã£o Ã© usada para ampliar rastreabilidade e consistÃªncia; a interpretaÃ§Ã£o tÃ©cnica permanece humana e documentada.",
  },
  {
    title: "Eletromobilidade",
    slug: "eletromobilidade",
    eyebrow: "Infraestrutura de recarga",
    description:
      "Estudos de viabilidade para hubs de recarga, frotas, postos, varejo, condomÃ­nios e operaÃ§Ãµes crÃ­ticas.",
    whatsappMessage: "OlÃ¡, preciso estudar a viabilidade de infraestrutura de recarga.",
    sections: [
      "Estudo de viabilidade para hubs e frotas",
      "Demanda, ampliaÃ§Ã£o de carga e estratÃ©gia tarifÃ¡ria",
      "Dimensionamento de carregadores e infraestrutura elÃ©trica",
      "Transformadores, proteÃ§Ã£o e integraÃ§Ã£o solar, bateria e rede",
      "AplicaÃ§Ãµes para postos, varejo, condomÃ­nios e hospitais",
    ],
    note:
      "Cada estudo separa premissas, restriÃ§Ãµes e fases de implantaÃ§Ã£o para reduzir retrabalho antes do investimento.",
  },
];

export const profileSolutions = [
  {
    title: "Integradores",
    text: "Apoio white label, auditoria de projetos, pareceres restritivos, padronizaÃ§Ã£o documental e retainer mensal.",
    href: "/para-integradores/",
  },
  {
    title: "IndÃºstrias e comÃ©rcios",
    text: "Demanda, subestaÃ§Ã£o, aumento de carga, geraÃ§Ã£o distribuÃ­da, continuidade operacional e eficiÃªncia documental.",
    href: "/servicos/engenharia-projetos-eletricos/",
  },
  {
    title: "Hospitais e operaÃ§Ãµes crÃ­ticas",
    text: "Backup, geradores, transferÃªncia automÃ¡tica, proteÃ§Ã£o e critÃ©rios de confiabilidade para cargas sensÃ­veis.",
    href: "/servicos/engenharia-projetos-eletricos/",
  },
  {
    title: "Postos, frotas e mobilidade elÃ©trica",
    text: "Viabilidade de recarga, infraestrutura elÃ©trica, integraÃ§Ã£o com rede, solar e baterias.",
    href: "/servicos/eletromobilidade/",
  },
];

export const cases = [
  {
    title: "RestriÃ§Ã£o de conexÃ£o em geraÃ§Ã£o distribuÃ­da",
    category: "ConexÃ£o e regulaÃ§Ã£o",
    label: "Caso tÃ©cnico anonimizado",
    context: "Projeto fotovoltaico com parecer restritivo e incerteza sobre a rota de conexÃ£o.",
    challenge: "Distinguir premissas de rede, lacunas documentais e alternativas tÃ©cnicas proporcionais.",
    scope: "Auditoria de parecer, revisÃ£o de premissas, matriz de evidÃªncias e anÃ¡lise de alternativas.",
    strategy: "Organizar perguntas tÃ©cnicas, evidÃªncias e documentaÃ§Ã£o para interlocuÃ§Ã£o administrativa.",
    deliverables: "RelatÃ³rio tÃ©cnico, quadro de evidÃªncias, riscos e prÃ³ximos passos.",
    impact: "DecisÃ£o de continuidade mais clara, sem inventar garantia de aprovaÃ§Ã£o.",
  },
  {
    title: "Aumento de carga para operaÃ§Ã£o comercial",
    category: "Projetos elÃ©tricos",
    label: "CenÃ¡rio de referÃªncia",
    context: "Empresa em expansÃ£o precisava entender impacto de novas cargas antes de contratar obra.",
    challenge: "Compatibilizar demanda, entrada de energia, proteÃ§Ã£o e fases de implantaÃ§Ã£o.",
    scope: "Levantamento de cargas, estudo de demanda e arquitetura preliminar.",
    strategy: "Separar cenÃ¡rio atual, expansÃ£o e restriÃ§Ãµes provÃ¡veis de infraestrutura.",
    deliverables: "Memorial de premissas, matriz de cargas e recomendaÃ§Ãµes tÃ©cnicas.",
    impact: "CritÃ©rios objetivos para projeto, contrataÃ§Ã£o e diÃ¡logo com a concessionÃ¡ria.",
  },
  {
    title: "Hub de recarga rÃ¡pida",
    category: "Eletromobilidade",
    label: "Caso ilustrativo",
    context: "OperaÃ§Ã£o avaliava implantaÃ§Ã£o de recarga rÃ¡pida em local com demanda futura elevada.",
    challenge: "Dimensionar infraestrutura, simultaneidade, fases e integraÃ§Ã£o com rede.",
    scope: "Viabilidade, demanda, carregadores, ampliaÃ§Ã£o de carga e alternativas de implantaÃ§Ã£o.",
    strategy: "Planejar fases tÃ©cnicas e critÃ©rios de investimento antes da compra de equipamentos.",
    deliverables: "Estudo preliminar, matriz de riscos e diretrizes de infraestrutura.",
    impact: "Base tÃ©cnica para decisÃ£o, sem estimativas comerciais nÃ£o comprovadas.",
  },
  {
    title: "Continuidade operacional com gerador",
    category: "Continuidade operacional",
    label: "Caso tÃ©cnico anonimizado",
    context: "OperaÃ§Ã£o crÃ­tica precisava organizar cargas prioritÃ¡rias e critÃ©rios de backup.",
    challenge: "Evitar subdimensionamento, falhas de transferÃªncia e indisponibilidade de circuitos essenciais.",
    scope: "ClassificaÃ§Ã£o de cargas, QTA, proteÃ§Ã£o e arquitetura de operaÃ§Ã£o.",
    strategy: "Definir cargas crÃ­ticas e cenÃ¡rios de partida com documentaÃ§Ã£o rastreÃ¡vel.",
    deliverables: "Memorial tÃ©cnico, lista de cargas e diretrizes de implementaÃ§Ã£o.",
    impact: "Maior clareza para compra, instalaÃ§Ã£o e operaÃ§Ã£o do sistema de backup.",
  },
];

export const faqs = [
  {
    question: "A KairÃ³s garante aprovaÃ§Ã£o junto Ã  distribuidora?",
    answer:
      "NÃ£o. A KairÃ³s presta engenharia, auditoria, estratÃ©gia, documentaÃ§Ã£o e conduÃ§Ã£o tÃ©cnico-administrativa; a decisÃ£o depende da distribuidora e do contexto de rede.",
  },
  {
    question: "O que Ã© uma auditoria de parecer de acesso?",
    answer:
      "Ã‰ uma revisÃ£o tÃ©cnica das premissas, exigÃªncias, restriÃ§Ãµes e alternativas apresentadas em um parecer, com organizaÃ§Ã£o de evidÃªncias para decisÃ£o e interlocuÃ§Ã£o.",
  },
  {
    question: "Quando Ã© necessÃ¡rio estudo de demanda?",
    answer:
      "Quando a operaÃ§Ã£o vai crescer, receber novas cargas, instalar geraÃ§Ã£o, recarga, backup ou quando hÃ¡ risco de ultrapassagem e infraestrutura subdimensionada.",
  },
  {
    question: "A KairÃ³s executa obras?",
    answer:
      "A atuaÃ§Ã£o Ã© consultiva e tÃ©cnica. Escopos de execuÃ§Ã£o ou acompanhamento dependem de contrataÃ§Ã£o especÃ­fica, responsabilidade definida e parceiros adequados.",
  },
  {
    question: "Como funciona o diagnÃ³stico tÃ©cnico?",
    answer:
      "ComeÃ§a com triagem do perfil, desafio e urgÃªncia, seguida da leitura de documentos, premissas e riscos para definir rota de anÃ¡lise e entregÃ¡veis.",
  },
  {
    question: "Atendem projetos fora de Minas Gerais?",
    answer:
      "Sim, a anÃ¡lise tÃ©cnica pode apoiar projetos em outros estados, observando normas da distribuidora local e o contexto regulatÃ³rio aplicÃ¡vel.",
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
