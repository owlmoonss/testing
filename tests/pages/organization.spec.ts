import { test, expect } from "@playwright/test"
import { useAuthorization } from "../utils/authorization"

useAuthorization()
test("Testing project settings", async ({ page }) => {
  await expect(page).toHaveURL(/.*statistics/)
  await page.getByRole("link", { name: "プロジェクト設定" }).click()
  await page.getByRole("button", { name: "再設定する" }).click()
  await page.getByPlaceholder("example.com").click()
  await page.getByPlaceholder("example.com").fill("marketing.fwh.co.jp")
  await page.getByPlaceholder("1234567890").click()
  await page.getByPlaceholder("1234567890").fill("249648330")
  await page.getByRole("button", { name: "次へ" }).click()
  await page.getByRole("button", { name: "ペーストしたら次へ" }).click()
  await page.getByPlaceholder("例）　https://mydomain.co.jp/").click()
  await page
    .getByPlaceholder("例）　https://mydomain.co.jp/")
    .fill("https://marketing.fwh.co.jp/")
  await page.getByRole("button", { name: "接続テスト" }).click()

  await page.getByText("接続テストに成功しました！").waitFor()

  expect(1).toBe(1)
})

test("Testing 分析対象ページ設定 function", async ({ page }) => {
  await expect(page).toHaveURL(/.*statistics/)

  await page.getByRole("link", { name: "プロジェクト設定" }).click()
  await page.getByRole("link", { name: "分析対象ページ設定" }).click()
  await page.getByRole("button", { name: "保存する" }).click()
  await page.getByText("保存しました").waitFor()

  expect(1).toBe(1)
})

test("Testing ユーザー管理 function", async ({ page }) => {
  await page.getByRole("link", { name: "プロジェクト設定" }).click()
  await page.getByRole("link", { name: "ユーザー管理" }).click()
  await page.getByRole("button", { name: "新しいユーザーを招待する" }).click()
  await page.getByPlaceholder("例）　sample@domain.co.jp").click()
  await page
    .getByPlaceholder("例）　sample@domain.co.jp")
    .fill(`cucua.vinh${Math.random()}@gmail.com`)
  await page.getByRole("button", { name: "招待する" }).click()
  await page
    .getByText(
      "指定のユーザーを招待しました。 ユーザーがログインするまでお待ちください。"
    )
    .waitFor()

  expect(1).toBe(1)
})
