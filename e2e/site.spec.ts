import { expect, test } from "@playwright/test";

const base = process.env.PUBLIC_BASE_PATH || "";

test("navega entre paginas e valida elementos do novo layout", async ({ page }, testInfo) => {
  await page.addInitScript(() => {
    localStorage.setItem("conexium-cookie-consent", "accepted");
  });
  await page.goto(`${base}/`);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("banner").getByLabel(/Conexium Engenharia - Página inicial/i)).toBeVisible();
  await page.screenshot({ path: `test-results/screenshots/home-${testInfo.project.name}.png`, fullPage: true });

  await page.goto(`${base}/a-conexium/`);
  await expect(page.getByRole("heading", { name: "Rigor técnico e decisões fundamentadas" })).toBeVisible();
  await page.screenshot({ path: `test-results/screenshots/quem-somos-${testInfo.project.name}.png`, fullPage: true });

  await page.goto(`${base}/servicos/`);
  await expect(page.getByRole("heading", { name: "Soluções técnicas", exact: true })).toBeVisible();
  await page.screenshot({ path: `test-results/screenshots/servicos-${testInfo.project.name}.png`, fullPage: true });

  await page.goto(`${base}/conteudos/`);
  await expect(page.getByRole("heading", { name: "Casos e Insights" })).toBeVisible();
  await page.screenshot({ path: `test-results/screenshots/conteudos-${testInfo.project.name}.png`, fullPage: true });

  await page.goto(`${base}/contato/`);
  await expect(page.getByRole("heading", { name: "Fale com um especialista" })).toBeVisible();
  await page.screenshot({ path: `test-results/screenshots/contato-${testInfo.project.name}.png`, fullPage: true });

  const overflow = await page.evaluate(() => document.body.scrollWidth > window.innerWidth + 1);
  expect(overflow).toBe(false);
});

test("valida os 3 servicos principais no site", async ({ page }) => {
  await page.goto(`${base}/`);
  await expect(page.getByRole("heading", { name: "Engenharia e Projetos Elétricos", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Consultoria Técnico-Regulatória", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Perícias, Quesitos e Pareceres Técnicos", exact: true })).toBeVisible();

  await page.goto(`${base}/servicos/consultoria-tecnico-regulatoria/`);
  await expect(page.getByRole("heading", { name: "Consultoria Técnico-Regulatória", exact: true })).toBeVisible();
});

test("menu mobile, 404 e redirecionamento institucional", async ({ page }) => {
  await page.goto(`${base}/`);
  const menu = page.getByRole("button", { name: "Abrir menu" });
  if (await menu.isVisible()) {
    await menu.click();
    await expect(page.locator("[data-mobile-menu]")).toBeVisible();
  }
  await page.goto(`${base}/404/`);
  await expect(page.getByRole("heading", { name: /Página não encontrada/i })).toBeVisible();
  await page.goto(`${base}/a-kairos/`);
  await expect(page).toHaveURL(/\/a-conexium\/$/);
});

test("formulario de contato valida campos obrigatorios e pre-selecao via parametro", async ({ page }) => {
  // Testa pre-seleção via parâmetro de URL
  await page.goto(`${base}/contato/?servico=engenharia-projetos-eletricos`);
  await expect(page.getByLabel("Tipo de demanda *")).toHaveValue("Engenharia e Projetos Elétricos");

  await page.goto(`${base}/contato/?servico=consultoria-tecnico-regulatoria`);
  await expect(page.getByLabel("Tipo de demanda *")).toHaveValue("Consultoria Técnico-Regulatória");

  await page.goto(`${base}/contato/?servico=pericias-pareceres-tecnicos`);
  await expect(page.getByLabel("Tipo de demanda *")).toHaveValue("Perícia / Quesitos / Parecer Técnico");

  // Testa validação de campos obrigatórios
  await page.getByRole("button", { name: /Solicitar avaliação técnica/i }).click();
  await expect(page.getByText("Informe seu nome.")).toBeVisible();

  await page.getByLabel("Nome *").fill("Lucas Silva");
  await page.getByLabel("Empresa *").fill("Empresa Teste");
  await page.getByLabel("E-mail *").fill("lucas@empresa.com.br");
  await page.getByLabel("Telefone / WhatsApp *").fill("11999999999");
  await page.getByLabel(/Mensagem/).fill("Descrição técnica para validação do formulário.");
  await page.getByLabel(/Autorizo o contato/).check();

  // Submissão sem endpoint configurado direciona com segurança aos canais oficiais (sem falso sucesso)
  await page.getByRole("button", { name: /Solicitar avaliação técnica/i }).click();
  await expect(page.locator("[data-feedback]")).toBeVisible();
  await expect(page.locator("[data-feedback]")).toContainText("conexiumengenharia@gmail.com");
});

test("casos e insights exibem artigos e navegam", async ({ page }) => {
  await page.goto(`${base}/conteudos/`);
  await expect(page.getByRole("heading", { name: "Casos e Insights" }).first()).toBeVisible();
  await page.getByRole("link", { name: /Ler artigo técnico/ }).first().click();
  await expect(page).toHaveURL(/\/conteudos\//);
});
