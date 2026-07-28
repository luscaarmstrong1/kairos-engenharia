import { describe, expect, it } from "vitest";
import { formatPhone, scoreLead, sanitizeText, validateLead } from "../lib/forms";

const valid = {
  nome: "Lucas",
  empresa: "Empresa",
  cargo: "Diretor",
  email: "lucas@empresa.com.br",
  telefone: "(11) 99999-9999",
  estado: "SP",
  concessionaria: "Distribuidora",
  perfil: "Indústria",
  desafio: "Aumento de carga",
  potencia: "500 kVA",
  prazo: "Até 7 dias",
  mensagem: "Contexto técnico com informações suficientes para triagem.",
  lgpd: true,
  website: "",
};

describe("form utilities", () => {
  it("aplica máscara de telefone brasileira", () => {
    expect(formatPhone("11999999999")).toBe("(11) 99999-9999");
    expect(formatPhone("1133334444")).toBe("(11) 3333-4444");
  });

  it("sanitiza caracteres HTML simples", () => {
    expect(sanitizeText("<script>alert(1)</script> Empresa")).toBe("scriptalert(1)/script Empresa");
  });

  it("valida consentimento e campos obrigatórios", () => {
    const errors = validateLead({ ...valid, email: "invalido", lgpd: false });
    expect(errors.email).toBeTruthy();
    expect(errors.lgpd).toBeTruthy();
  });

  it("valida UF e limite da mensagem", () => {
    const errors = validateLead({ ...valid, estado: "Minas", mensagem: "x".repeat(1601) });
    expect(errors.estado).toBe("Informe a UF com duas letras.");
    expect(errors.mensagem).toBe("Resuma o contexto em até 1600 caracteres.");
  });

  it("calcula prioridade alta para sinais críticos", () => {
    expect(scoreLead(valid)).toBe("alta");
  });
});
