import { test, expect } from "@playwright/test"
import { useAuthorization } from "../utils/authorization"
import { baseURL } from "../../playwright.config"

useAuthorization()
test("Testing logout", async ({ page }) => {
  await page.locator('[id="headlessui-menu-button-\\:r1\\:"]').click()
  await page.getByRole("menuitem", { name: "ログアウト" }).click()

  // wait page /login load done
  await page.waitForURL(/.*login/, { waitUntil: "domcontentloaded" })

  await expect(page).toHaveURL(/.*\/login/)
  expect(1).toBe(1)
})
