import {test, expect} from '@playwright/test'
import {FormPage} from '../../pages/FormPage';

test.describe('form test',async()=>{
    test('form should to work',async({page})=>{
        const formPage = new FormPage(page);
        await formPage.goto();
        await formPage.fillForm();

        await expect(formPage.modalTitle).toHaveText('Thanks for submitting the form');
        await expect(formPage.table).toBeVisible();
        await expect(formPage.studentName).toHaveText('jhon doe');
        await expect(formPage.studentEmail).toHaveText('jhon123@mail.com');
        await expect(formPage.gender).toHaveText('Male');
        await expect(formPage.mobile).toHaveText('1234567891');
        await expect(formPage.dob).toHaveText('03 May,2025');
    

        await expect(formPage.closeButton).toBeVisible();
        await (formPage.closeButton).click({force: true});
    
        // Verify the modal is closed
        //await expect(formPage.modalTitle).not.toBeVisible();
    })
})