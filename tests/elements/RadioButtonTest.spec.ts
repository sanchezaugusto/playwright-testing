import {test,expect} from '@playwright/test'
import { ElementPage } from '../../pages/elementPage';

test.describe('radio button test', async () => {

    let elementPage: ElementPage;

    test.beforeEach(async ({ page }) => {
        elementPage = new ElementPage(page);
        await elementPage.goto();
    });

    test('Yes radio button should to work', async () => {
        await elementPage.radioButtonOption.click();
        await elementPage.radioButton.check();
        await expect(elementPage.radioButton).toBeChecked();
        await expect (elementPage.radioButtonMessage).toHaveText('You have selected Yes');
    })

    test('Impressive radio button should to work', async () => {
        await elementPage.radioButtonOption.click();
        await elementPage.ImpressiveRadioButton.check();
        await expect(elementPage.ImpressiveRadioButton).toBeChecked();
        await expect (elementPage.radioButtonMessage).toHaveText('You have selected Impressive');
    })
})