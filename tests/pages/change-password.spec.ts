import { test, expect } from "@playwright/test"
import { useAuthorization } from "../utils/authorization"
import { baseURL } from "../../playwright.config"

useAuthorization()
test("Testing change password", async ({ page }) => {
  await page.goto(`${baseURL}/settings`)
  await page.waitForURL(/.*\/settings/, { waitUntil: "domcontentloaded" })

  await page
    .locator("div")
    .filter({ hasText: /^・・・・・・・・・・・・・変更$/ })
    .locator("a")
    .click()
  await page.locator("#password").first().click()
  await page.locator("#password").first().fill("fwhfwh0902")
  await page.locator("#password").nth(1).click()
  await page.locator("#password").nth(1).fill("fwhfwh0902")
  await page.getByRole("button", { name: "パスワードを更新" }).click()
  await page.getByText("プロフィールの更新に成功しました！").waitFor()

  expect(1).toBe(1)
})
