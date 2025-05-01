import {test, expect} from '@playwright/test';
import { ElementPage } from '../../pages/elementPage';

test.describe('elements test', async () => {
    
    let elementPage: ElementPage;

    test.beforeEach(async ({ page }) => {
        elementPage = new ElementPage(page);
        await elementPage.goto();
        await elementPage.textBoxOption.click();
    });

    test('text box should to work', async () => {
        await elementPage.fullNameBox.fill('test');
        await expect(elementPage.fullNameBox).toHaveValue('test');
    })

    test('email box should to work', async () => {
        await elementPage.emailBox.fill('test');
        await expect(elementPage.emailBox).toHaveValue('test');
    })

    test('current address box should to work', async () => {
        await elementPage.currentAddressBox.fill('test');
        await expect(elementPage.currentAddressBox).toHaveValue('test');
    })

    test('permanent address box should to work', async () => {
        await elementPage.permanentAddressBox.fill('test');
        await expect(elementPage.permanentAddressBox).toHaveValue('test');
    })

    test('submit button should to work', async () => {
        await elementPage.fullNameBox.fill('jhon doe');
        await elementPage.emailBox.fill('jhon@mail.com');
        await elementPage.currentAddressBox.fill('street 123');
        await elementPage.permanentAddressBox.fill('street 123');
        await elementPage.submitButton.click();

        await expect(elementPage.nameMessage).toHaveText('Name:jhon doe');
        await expect(elementPage.emailMessage).toHaveText('Email:jhon@mail.com');
        await expect(elementPage.currentAddressMessage).toHaveText('Current Address :street 123');
        await expect(elementPage.permanentAddressMessage).toHaveText('Permananet Address :street 123');
    })
})