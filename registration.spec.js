const { test, expect } = require('@playwright/test');
const testData = require('./testdata.json');

test('Registration Form - JSON Data Driven Testing', async ({ page }) => {

    await page.goto('https://automationteststore.com/index.php?rt=account/create');

    await page.locator('#AccountFrm_firstname').fill(testData.firstName);
    await page.locator('#AccountFrm_lastname').fill(testData.lastName);
    await page.locator('#AccountFrm_email').fill(testData.email);
    await page.locator('#AccountFrm_telephone').fill(testData.telephone);
    await page.locator('#AccountFrm_fax').fill(testData.fax);
    await page.locator('#AccountFrm_company').fill(testData.company);

    await expect(page.locator('#AccountFrm_firstname')).toHaveValue(testData.firstName);
    await expect(page.locator('#AccountFrm_lastname')).toHaveValue(testData.lastName);
    await expect(page.locator('#AccountFrm_email')).toHaveValue(testData.email);
    await expect(page.locator('#AccountFrm_telephone')).toHaveValue(testData.telephone);
    await expect(page.locator('#AccountFrm_fax')).toHaveValue(testData.fax);
    await expect(page.locator('#AccountFrm_company')).toHaveValue(testData.company);

});
