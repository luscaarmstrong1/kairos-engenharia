import { expect, test } from "@playwright/test";

const base = "/kairos-engenharia";

test("navega entre paginas e nao cria overflow horizontal", async ({ page }, testInfo) => {
  await page.goto(`${base}/`);
  await expect(page.getByRole("heading", { name: /Engenharia elétrica para decisões seguras/i })).toBeVisible();
  await page.screenshot({ path: `test-results/screenshots/home-${testInfo.project.name}.png`, fullPage: true });
  await page.getByRole("link", { name: /Servi/i }).first().click();
  await expect(page.getByRole("heading", { name: "Soluções técnicas" }).first()).toBeVisible();
  const overflow = await page.evaluate(() => document.body.scrollWidth > window.innerWidth + 1);
  expect(overflow).toBe(false);
});

test("menu mobile, 404 e voltar ao topo funcionam", async ({ page }) => {
  await page.goto(`${base}/`);
  const menu = page.getByRole("button", { name: "Abrir menu" });
  if (await menu.isVisible()) {
    await menu.click();
    await expect(page.locator("[data-mobile-menu]")).toBeVisible();
  }
  await page.goto(`${base}/404/`);
  await expect(page.getByRole("heading", { name: /P.gina n.o encontrada/i })).toBeVisible();
  await page.getByRole("button", { name: "Voltar ao topo" }).click();
});

test("formulario invalido e valido sem endpoint", async ({ page }) => {
  await page.goto(`${base}/contato/`);
  await page.getByRole("button", { name: /Enviar solicita/i }).click();
  await expect(page.getByText("Informe seu nome.")).toBeVisible();

  await page.getByLabel("Nome").fill("Lucas");
  await page.getByLabel("Empresa").fill("Empresa Teste");
  await page.getByLabel("Cargo").fill("Diretor");
  await page.getByLabel(/E-mail/i).fill("lucas@empresa.com.br");
  await page.getByLabel("Telefone").fill("11999999999");
  await page.getByLabel("Estado").fill("SP");
  await page.getByLabel(/Concession.ria/i).fill("Distribuidora");
  await page.getByLabel(/Pot.ncia/i).fill("500 kVA");
  await page.getByLabel("Perfil de cliente").selectOption("Indústria");
  await page.getByLabel("Principal desafio").selectOption("Aumento de carga");
  await page.getByLabel("Prazo").selectOption("Até 7 dias");
  await page.getByLabel("Mensagem").fill("Contexto tecnico suficiente para validar o formulario de diagnostico.");
  await page.getByLabel(/Autorizo o contato/).check();
  await page.getByRole("button", { name: /Enviar solicita/i }).click();
  await expect(page.getByText(/Configure o endpoint seguro/i)).toBeVisible();
});

test("links internos, externos e WhatsApp sao validos", async ({ page }) => {
  await page.goto(`${base}/servicos/eletromobilidade/`);
  await expect(page.getByRole("heading", { name: "Eletromobilidade" })).toBeVisible();
  const floating = page.getByLabel(/Falar pelo WhatsApp|Abrir contato/);
  await expect(floating).toBeVisible();
  const href = await floating.getAttribute("href");
  expect(href).toBeTruthy();
});

test("conteudos tecnicos exibem cards e navegam para artigo", async ({ page }) => {
  await page.goto(`${base}/conteudos/`);
  await expect(page.getByRole("heading", { name: "Conteúdos técnicos" }).first()).toBeVisible();
  await expect(page.getByText(/Conteúdo técnico com revisão humana/i)).toBeVisible();
  await expect(page.getByText("Regulação").first()).toBeVisible();
  await page.getByRole("link", { name: /Ler artigo/ }).first().click();
  await expect(page).toHaveURL(/\/kairos-engenharia\/conteudos\//);
  await expect(page.getByText(/Este conteúdo|Conteúdo técnico/i).last()).toBeVisible();
});

test("pagina de pericias e quesitos carrega com CTA correto", async ({ page }) => {
  await page.goto(`${base}/servicos/pericias-quesitos-pareceres/`);
  await expect(page.getByRole("heading", { name: /Perícias, Quesitos e Pareceres Técnicos/i }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Quando atuamos" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Entregáveis" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Enviar documentos para análise técnica/i }).first()).toHaveAttribute("href", `${base}/contato/`);
});
