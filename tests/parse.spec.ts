import { test, expect } from '@playwright/test';

test('has title', async ({ page, baseURL }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Document/);
  await page.getByText("Save").click()
  expect(page.url()).toBe(`${baseURL}/index.html?name=&price=&raw=`)

});
