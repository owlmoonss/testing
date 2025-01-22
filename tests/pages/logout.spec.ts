import { test, expect } from "@playwright/test"
import { useAuthorization } from "../utils/authorization"
import { baseURL } from "../../playwright.config"

useAuthorization()
test("Testing new diagnosis", async ({ page }) => {
  await page.goto(`${baseURL}/analysis`)
  await page.getByRole("link", { name: "LP診断管理" }).click()
  await page
    .locator("a")
    .filter({ hasText: "新しく診断管理するURLを指定" })
    .click()
  await page.getByRole("button", { name: "接続テストをする" }).click()
  await page.getByText("指定のURL").waitFor()

  expect(1).toBe(1)
})
