import {Page, Locator} from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class FormPage {
    readonly page: Page;
    readonly nameBox: Locator;
    readonly lastNameBox: Locator;
    readonly emailBox: Locator;
    readonly genderCheckBox: Locator;
    readonly mobileNumberBox: Locator;
    readonly dateOfBirthBox: Locator;
    readonly sujectsBox: Locator;
    readonly hobbiesCheckBox: Locator;
    readonly selectFileButton: Locator;
    readonly currentAddressBox: Locator;
    readonly stateDropdown: Locator;
    readonly cityDropdown: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameBox = page.locator('#firstName');
        this.lastNameBox = page.locator('#lastName');
        this.emailBox = page.locator('#userEmail');

        this.mobileNumberBox = page.locator('#userNumber');

        this.sujectsBox = page.locator('#subjectsInput');

        this.currentAddressBox = page.locator('#currentAddress');

    }

    async goto() {
        await this.page.goto(BASE_URL+'/automation-practice-form', {timeout: 60000});
    }
}