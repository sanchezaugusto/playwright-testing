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

    //modal elements
    readonly modalTitle: Locator;
    readonly closeButton: Locator;
    readonly studentName: Locator;
    readonly studentEmail: Locator;
    readonly gender: Locator;
    readonly mobile: Locator;
    readonly dob: Locator;
    readonly table: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameBox = page.locator('#firstName');
        this.lastNameBox = page.locator('#lastName');
        this.emailBox = page.locator('#userEmail');
        this.genderCheckBox = page.locator('label[for="gender-radio-1"]'); //Male
        this.mobileNumberBox = page.locator('#userNumber');

        this.sujectsBox = page.locator('#subjectsInput');

        this.currentAddressBox = page.locator('#currentAddress');
        
        this.submitButton = page.locator('#submit');

        //modal elements
        this.modalTitle = page.locator('.modal-title.h4');
        this.studentName = page.locator('tr:has-text("Student Name") td:nth-child(2)');
        this.studentEmail = page.locator('tr:has-text("Student Email") td:nth-child(2)');
        this.gender = page.locator('tr:has-text("Gender") td:nth-child(2)');
        this.mobile = page.locator('tr:has-text("Mobile") td:nth-child(2)');
        this.dob = page.locator('tr:has-text("Date of Birth") td:nth-child(2)');
        this.table = page.locator('table');

        this.closeButton = page.locator('.modal-footer button#closeLargeModal');

    }

    async goto() {
        await this.page.goto(BASE_URL+'/automation-practice-form', {timeout: 60000});
    }

    async fillForm() {
        await this.nameBox.fill('jhon');
        await this.lastNameBox.fill('doe');
        await this.emailBox.fill('jhon123@mail.com');
        await this.genderCheckBox.click();
        await this.mobileNumberBox.fill('1234567891');

        await this.submitButton.click();
    }
}