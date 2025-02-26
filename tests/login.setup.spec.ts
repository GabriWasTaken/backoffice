import { test, expect } from '@playwright/test';

test('perform login', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByTestId('loader')).toBeVisible();
  await expect(page.getByTestId('loader')).not.toBeVisible();
  await page.getByRole('group', { name: 'Email' }).locator('span').fill('gabrieletorta@gmail.com');
  await page.getByText('Password').fill('ANvfI1xk');
  await page.getByRole('button', { name: 'Accedi' }).click();
});
