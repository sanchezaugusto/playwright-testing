import {Page,Locator} from '@playwright/test';
import {BASE_URL} from '../utils/config';

export class BookStorePage{

    readonly page: Page;
    readonly loginOption: Locator;
    readonly bookStoreOption: Locator;
    readonly profileOption: Locator;
    readonly bookStoreAPIOption; Locator;

    constructor (page:Page){
        this.page = page;
        this.loginOption = page.locator('text=Login');
        this.bookStoreOption = page.locator('text=Book Store Application');
        this.profileOption = page.locator('text=Profile');
    }

    async goto(){
        await this.page.goto(BASE_URL + '/books');
    }
}