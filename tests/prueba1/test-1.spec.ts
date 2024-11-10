import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('path').first().click();
  await page.locator('li').filter({ hasText: 'Buttons' }).click();
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  await page.getByRole('button', { name: 'Right Click Me' }).click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();
  await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');
  
});