const { test, expect } = require('@playwright/test');
const RegistrationPage = require('./pages/RegistrationPage.js');
const config = require('./utils/config');
const { chromium } = require('playwright'); 
test.describe('Registration Test Suite', () => {
    let registrationPage;
    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await page.waitForLoadState('load');
        await registrationPage.navigate(config.baseURL);
    });
    test('Successful Registration', async ({ page }) => {
        await page.waitForSelector(registrationPage.menuButton, { state: 'visible' });
        await registrationPage.click(registrationPage.menuButton);
        await page.waitForSelector(registrationPage.signInPortal, { state: 'visible' });
        await registrationPage.click(registrationPage.signInPortal);
        await page.waitForSelector(registrationPage.newUser, { state: 'visible' });
        await registrationPage.click(registrationPage.newUser);
        await page.waitForSelector('#Salutation', { state: 'visible' });
        await page.locator('#Salutation').selectOption('Mrs');
        await registrationPage.register(
            config.credentials.firstNameInput,
            config.credentials.lastNameInput,
            config.credentials.emailInput,
            config.credentials.contactInput,
            config.credentials.usernameInput,
            config.credentials.passwordInput
        );
    });
