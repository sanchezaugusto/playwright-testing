import {test,expect} from '@playwright/test'
import { ElementPage } from '../../pages/ElementPage';

test.describe('buttons test', async () => {
    let elementPage: ElementPage;

    test.beforeEach(async ({ page }) => {
        elementPage = new ElementPage(page);
        await elementPage.goto();
    });

    test('click button should to work', async () => {
        await elementPage.buttonsOption.click();
        await elementPage.clickMeButton.click();
        await expect(elementPage.clickMeButtonMessage).toHaveText('You have done a dynamic click');
    })

    test('right click button should to work', async () => {
        await elementPage.buttonsOption.click();
        await elementPage.rightClickMeButton.click({button: 'right'});
        await expect(elementPage.rightClickMeButtonMessage).toHaveText('You have done a right click');
    })

    test('double click button should to work', async () => {
        await elementPage.buttonsOption.click();
        await elementPage.doubleClickMeButton.dblclick();
        await expect(elementPage.doubleClickMeButtonMessage).toHaveText('You have done a double click');
    })
})