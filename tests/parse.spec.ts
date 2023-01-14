import { test, expect } from '@playwright/test';

test('has correct url params', async ({ page, baseURL }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Document/);
  await page.getByText("Save").click()
  const urlString = `${baseURL}/index.html?name%5Bvalue%5D=&name%5Bop%5D=eq&price%5Bvalue%5D=&price%5Bop%5D=gt&raw=`
  const url = new URL(urlString)
  expect(page.url()).toBe(urlString)
  const params = url.searchParams
  const expectedParamsObject = {
    "name[value]": "",
    "name[op]": "eq",
    "price[value]": "",
    "price[op]": "gt",
    "raw": ""
  }
  debugger
  const expectedParams = new URLSearchParams(expectedParamsObject)
  expect(params).toEqual(expectedParams)
});
