import {test, expect} from '@playwright/test';
import { ElementPage } from '../../pages/ElementPage';

test.describe('elements test', async () => {
    
    let elementPage: ElementPage;

    test.beforeEach(async ({ page }) => {
        elementPage = new ElementPage(page);
        await elementPage.goto();
    });

    test('check box should to work', async () => {
        await elementPage.checkBoxOption.click();
        await elementPage.checkBox.click();
        await expect(elementPage.checkBox).toBeChecked();
    })
})
