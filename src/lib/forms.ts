export type LeadForm = {
  nome: string;
  empresa: string;
  cargo: string;
  email: string;
  telefone: string;
  estado: string;
  concessionaria: string;
  perfil: string;
  desafio: string;
  potencia: string;
  prazo: string;
  mensagem: string;
  lgpd: boolean;
  website?: string;
};

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function sanitizeText(value: string): string {
  return value
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function scoreLead(form: Pick<LeadForm, "perfil" | "desafio" | "potencia" | "prazo" | "empresa" | "mensagem">): "alta" | "media" | "baixa" {
  const highSignals = [
    "Parecer de acesso ou inversão de fluxo",
    "Hospital ou instituição",
    "Indústria",
    "Até 7 dias",
  ];
  const mediumSignals = [
    "Projeto fotovoltaico",
    "Aumento de carga",
    "Hub de recarga",
    "Análise de fatura",
    "Até 30 dias",
  ];

  const joined = `${form.perfil} ${form.desafio} ${form.prazo} ${form.potencia}`.toLowerCase();
  const hasHigh = highSignals.some((signal) => joined.includes(signal.toLowerCase()));
  if (hasHigh) return "alta";
  const hasMedium = mediumSignals.some((signal) => joined.includes(signal.toLowerCase()));
  if (hasMedium) return "media";
  if (!form.empresa.trim() || form.mensagem.trim().length < 20) return "baixa";
  return "media";
}

export function validateLead(form: LeadForm): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!sanitizeText(form.nome)) errors.nome = "Informe seu nome.";
  if (!sanitizeText(form.empresa)) errors.empresa = "Informe a empresa.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errors.email = "Informe um e-mail corporativo válido.";
  if (form.telefone.replace(/\D/g, "").length < 10) errors.telefone = "Informe um telefone brasileiro válido.";
  if (!/^[A-Za-z]{2}$/.test(form.estado.trim())) errors.estado = "Informe a UF com duas letras.";
  if (!sanitizeText(form.perfil)) errors.perfil = "Selecione o perfil de cliente.";
  if (!sanitizeText(form.desafio)) errors.desafio = "Selecione o principal desafio.";
  if (!sanitizeText(form.prazo)) errors.prazo = "Selecione o prazo.";
  if (sanitizeText(form.mensagem).length < 20) errors.mensagem = "Descreva o contexto com pelo menos 20 caracteres.";
  if (sanitizeText(form.mensagem).length > 1600) errors.mensagem = "Resuma o contexto em até 1600 caracteres.";
  if (!form.lgpd) errors.lgpd = "É necessário autorizar o contato para enviar sua solicitação.";
  if (form.website && form.website.trim()) errors.website = "Falha na validação anti-spam.";
  return errors;
}
