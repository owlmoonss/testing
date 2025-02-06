import { test, type Page } from "@playwright/test"
import { baseURL } from "../../playwright.config"

export function useAuthorization() {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL)
    await page.getByRole("link", { name: "ログイン" }).click()
    await page.locator("#sign-in-email").click()
    await page.locator("#sign-in-email").fill("staging.cucua@gmail.com")
    await page.locator("#sign-in-email").press("Tab")
    await page.locator("#sign-in-password").fill("fwhfwh0902")
    await page.locator("#sign-in-password").press("Enter")

    await page.waitForURL("**/statistics", { waitUntil: "domcontentloaded" })
  })
}
