import {Locator, Page} from '@playwright/test';

export class RegistrationPage {
    page: Page;
    emailInputLocator: Locator;
    passwordInputLocator: Locator;
    singUpButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInputLocator = page.locator('input[placeholder="Email"]');
        this.passwordInputLocator = page.locator('input[placeholder="Password"]');
        this.singUpButtonLocator = page.locator('.btn-lg');
    }
};
