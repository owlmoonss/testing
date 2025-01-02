import { test, expect } from "@playwright/test"
import { useAuthorization } from "../utils/authorization"

useAuthorization(async () => {})

test("Login success", async ({ page }) => {
  await expect(page).toHaveURL(/.*statistics/)
})
