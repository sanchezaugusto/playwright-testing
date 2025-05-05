import {Page, Locator} from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class AlertsWindowPage {

    readonly page : Page;
    readonly browserWindowsOption: Locator;
    readonly alertsOption: Locator;
    readonly framesOption: Locator;
    readonly nestedFramesOption: Locator;
    readonly modalDialogsOption: Locator;


    constructor(page: Page) {
        this.page = page;
        this.browserWindowsOption = this.page.locator('text=Browser Windows');
        this.alertsOption = page.locator('text=Alerts');
        this.nestedFramesOption = page.locator('text=Nested Frames');
        this.modalDialogsOption = page.locator('text=Modal Dialogs');
        
    }

    goto() {
        this.page.goto(BASE_URL+'/alertsWindows');
    }
}