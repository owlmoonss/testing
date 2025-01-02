import { defineConfig } from "@playwright/test"

export const baseURL = "https://magic-lpo-staging-vb6iypo3xa-an.a.run.app"

export default defineConfig({
  testDir: "tests",
  timeout: 30000,
  retries: 5,
  use: {
    browserName: "chromium",
    headless: true,
    baseURL
  }
})
