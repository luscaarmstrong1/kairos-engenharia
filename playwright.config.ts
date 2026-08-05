import { defineConfig, devices } from "@playwright/test";

const base = process.env.PUBLIC_BASE_PATH || "/kairos-engenharia";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30000,
  use: {
    baseURL: "http://127.0.0.1:4321",
    browserName: "chromium",
    trace: "on-first-retry",
  },
  webServer: {
    command: "pnpm exec astro preview --host 127.0.0.1 --port 4321",
    url: `http://127.0.0.1:4321${base}/`,
    reuseExistingServer: true,
    timeout: 120000,
  },
  projects: [
    { name: "mobile-390", use: { ...devices["Pixel 5"], viewport: { width: 390, height: 844 } } },
    { name: "tablet-768", use: { browserName: "chromium", viewport: { width: 768, height: 1024 } } },
    { name: "desktop-1440", use: { viewport: { width: 1440, height: 900 } } },
  ],
});
