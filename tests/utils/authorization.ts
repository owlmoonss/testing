import { test, type Page } from "@playwright/test"
import { baseURL } from "../../playwright.config"

export function useAuthorization() {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL)
    await page.getByRole("link", { name: "ログイン" }).click()
    await page.locator("#sign-in-email").click()
    await page.locator("#sign-in-email").fill("freewebhope.vinh1@gmail.com")
    await page.locator("#sign-in-email").press("Tab")
    await page.locator("#sign-in-password").fill("Intern2024")
    await page.locator("#sign-in-password").press("Enter")

    await page.waitForURL("**/statistics", { waitUntil: "domcontentloaded" })
  })
}
