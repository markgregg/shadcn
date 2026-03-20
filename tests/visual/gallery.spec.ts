import { expect, test } from '@playwright/test'

test('gallery homepage visual snapshot', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  await expect(page).toHaveScreenshot('gallery-homepage.png', { fullPage: true })
})
