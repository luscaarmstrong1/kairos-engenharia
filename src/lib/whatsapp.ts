export function whatsappMessageForPath(pathname: string): string {
  if (pathname.includes("consultoria-regulatoria")) {
    return "Olá, preciso analisar uma restrição de conexão ou parecer de acesso.";
  }
  if (pathname.includes("engenharia-projetos-eletricos")) {
    return "Olá, preciso avaliar um projeto elétrico ou infraestrutura.";
  }
  if (pathname.includes("eletromobilidade")) {
    return "Olá, preciso estudar a viabilidade de infraestrutura de recarga.";
  }
  if (pathname.includes("para-integradores")) {
    return "Olá, gostaria de estruturar uma parceria técnica com a Conexium Engenharia.";
  }
  return "Olá, gostaria de solicitar um diagnóstico técnico com a Conexium Engenharia.";
}

export function buildWhatsAppUrl(number: string | undefined, message: string): string {
  const digits = (number || "").replace(/\D/g, "");
  if (!digits) return "/contato/";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
