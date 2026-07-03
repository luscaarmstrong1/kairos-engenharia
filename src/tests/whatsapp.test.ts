import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, whatsappMessageForPath } from "../lib/whatsapp";

describe("whatsapp utilities", () => {
  it("gera mensagem contextual por página", () => {
    expect(whatsappMessageForPath("/servicos/consultoria-regulatoria/")).toContain("parecer de acesso");
    expect(whatsappMessageForPath("/servicos/eletromobilidade/")).toContain("recarga");
  });

  it("gera link configurável sem número fixo no código", () => {
    const url = buildWhatsAppUrl("55 (31) 99999-0000", "Olá");
    expect(url).toBe("https://wa.me/5531999990000?text=Ol%C3%A1");
    expect(buildWhatsAppUrl("", "Olá")).toBe("/contato/");
  });
});
