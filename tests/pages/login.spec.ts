import { test, expect } from "@playwright/test"
import { useAuthorization } from "../utils/authorization"

useAuthorization()
test("Login success", async ({ page }) => {
  await expect(page).toHaveURL(/.*statistics/)
})
