import { describe, expect, it } from "vitest";
import { allRoutes, servicePages } from "../data/site";
import { absoluteUrl, withBase } from "../lib/urls";

describe("routes and SEO helpers", () => {
  it("inclui todas as rotas principais solicitadas", () => {
    expect(allRoutes).toContain("/para-integradores/");
    expect(allRoutes).toContain("/politica-de-privacidade/");
    expect(allRoutes).toContain("/a-conexium/");
    expect(allRoutes).toContain("/versoes/");
    expect(allRoutes).toContain("/versao-atual/");
    expect(allRoutes).toContain("/versao-anterior/");
    expect(servicePages.map((service) => service.slug)).toContain("consultoria-regulatoria");
    expect(servicePages.map((service) => service.slug)).toContain("pericias-quesitos-pareceres");
  });

  it("gera URLs com base técnica e domínio canônico da Conexium", () => {
    expect(withBase("/contato/")).toBe("/kairos-engenharia/contato/");
    expect(absoluteUrl("/servicos/")).toBe("https://conexiumengenharia.com.br/servicos/");
  });
});
