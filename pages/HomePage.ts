import {Page, Locator} from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class HomePage {
    readonly page: Page;
    readonly title: Locator;
    readonly elementsCard: Locator;
    readonly formsCard: Locator;
    readonly alertsFramesCard: Locator;
    readonly widgetsCard: Locator;
    readonly interationsCard: Locator;
    readonly bookStoreCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('h1');
        this.elementsCard = page.locator('text=Elements');
        this.formsCard = page.locator('text=Forms');
        this.alertsFramesCard = page.locator('text=Alerts, Frame & Windows');
        this.widgetsCard = page.locator('text=Widgets');
        this.interationsCard = page.locator('text=Interactions');
        this.bookStoreCard = page.locator('text=Book Store Application');
    }

    async goto() {
        await this.page.goto(BASE_URL);
    }
}   