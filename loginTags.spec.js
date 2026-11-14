const { test, expect } = require('@playwright/test');

test.describe('QA Brains Login Module', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.qabrains.com/ecommerce/login');
    });

    // Smoke Testing
    test('Valid Login @smoke @login', async ({ page }) => {

        await page.locator('input[type="email"]').fill('test@qabrains.com');
        await page.locator('input[type="password"]').fill('Password123');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).not.toHaveURL(/\/ecommerce\/login/);

    });

    // Regression Testing
    test('Invalid Login @regression @login', async ({ page }) => {

        await page.locator('input[type="email"]').fill('invalid@gmail.com');
        await page.locator('input[type="password"]').fill('WrongPassword123');

        await page.getByRole('button', { name: 'Login' }).click();

        const errorMessage = page.locator(
            '[role="alert"], .alert, .text-danger'
        ).first();

        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText(/\S+/);

        await expect(page).toHaveURL(/\/ecommerce\/login/);

    });

    // Sanity Testing
    test('Empty Email Validation @sanity @login', async ({ page }) => {

        await page.locator('input[type="email"]').fill('');
        await page.locator('input[type="password"]').fill('Password123');

        await page.getByRole('button', { name: 'Login' }).click();

        const errorMessage = page.locator(
            '[role="alert"], .alert, .text-danger'
        ).first();

        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText(/\S+/);

        await expect(page).toHaveURL(/\/ecommerce\/login/);

    });

});
