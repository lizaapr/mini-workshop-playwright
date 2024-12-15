import { test, expect } from "@playwright/test";

test.describe('Magento Sale Page', () => {

    // Navigate to the Sale Page before each test
    test.beforeEach(async ({ page }) => {
      await page.goto('https://magento.softwaretestingboard.com/sale.html');
    });
  
    test('Verify sale page title', async ({ page }) => {
      // Check if the page title is correct
      const title = await page.title();
      expect(title).toContain('Sale');
    });
});