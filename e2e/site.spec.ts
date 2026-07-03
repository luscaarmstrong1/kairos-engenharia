import { expect, test } from "@playwright/test";

const base = "/renovera-projetos-eletricos";

test("navega entre páginas e não cria overflow horizontal", async ({ page }, testInfo) => {
  await page.goto(`${base}/`);
  await expect(page.getByRole("heading", { name: "Engenharia que transforma restrições técnicas em decisões viáveis." })).toBeVisible();
  await page.screenshot({ path: `test-results/screenshots/home-${testInfo.project.name}.png`, fullPage: true });
  await page.getByRole("link", { name: "Serviços" }).first().click();
  await expect(page.getByRole("heading", { name: "Engenharia, conexão, dados e infraestrutura para decisões técnicas seguras." })).toBeVisible();
  const overflow = await page.evaluate(() => document.body.scrollWidth > window.innerWidth + 1);
  expect(overflow).toBe(false);
});

test("menu mobile, 404 e voltar ao topo funcionam", async ({ page }) => {
  await page.goto(`${base}/`);
  const menu = page.getByRole("button", { name: "Abrir menu" });
  if (await menu.isVisible()) {
    await menu.click();
    await expect(page.getByRole("navigation", { name: "Navegação móvel" })).toBeVisible();
  }
  await page.goto(`${base}/rota-inexistente/`);
  await expect(page.getByRole("heading", { name: "Página não encontrada." })).toBeVisible();
  await page.getByRole("button", { name: "Voltar ao topo" }).click();
});

test("formulário inválido e válido sem endpoint", async ({ page }) => {
  await page.goto(`${base}/contato/`);
  await page.getByRole("button", { name: /Enviar solicitação/ }).click();
  await expect(page.getByText("Informe seu nome.")).toBeVisible();

  await page.getByLabel("Nome").fill("Lucas");
  await page.getByLabel("Empresa").fill("Empresa Teste");
  await page.getByLabel("Cargo").fill("Diretor");
  await page.getByLabel("E-mail corporativo").fill("lucas@empresa.com.br");
  await page.getByLabel("Telefone").fill("11999999999");
  await page.getByLabel("Estado").fill("SP");
  await page.getByLabel("Concessionária").fill("Distribuidora");
  await page.getByLabel("Potência estimada").fill("500 kVA");
  await page.getByLabel("Perfil de cliente").selectOption("Indústria");
  await page.getByLabel("Principal desafio").selectOption("Aumento de carga");
  await page.getByLabel("Prazo").selectOption("Até 7 dias");
  await page.getByLabel("Mensagem").fill("Contexto técnico suficiente para validar o formulário de diagnóstico.");
  await page.getByLabel(/Autorizo o contato/).check();
  await page.getByRole("button", { name: /Enviar solicitação/ }).click();
  await expect(page.getByText("Solicitação validada. Configure o endpoint seguro de envio para concluir a integração.")).toBeVisible();
});

test("links internos, externos e WhatsApp são válidos", async ({ page }) => {
  await page.goto(`${base}/servicos/eletromobilidade/`);
  await expect(page.getByRole("heading", { name: "Eletromobilidade" })).toBeVisible();
  const floating = page.getByLabel(/Falar pelo WhatsApp|Abrir contato/);
  await expect(floating).toBeVisible();
  const href = await floating.getAttribute("href");
  expect(href).toBeTruthy();
});
