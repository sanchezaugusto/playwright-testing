import {Page, Locator} from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class AlertsWindowPage {

    readonly page : Page;
    readonly browserWindowsOption: Locator;
    readonly alertsOption: Locator;
    readonly framesOption: Locator;
    readonly nestedFramesOption: Locator;
    readonly modalDialogsOption: Locator;

    //Browser Windows Elements
    readonly newTabOption: Locator;
    readonly newWindowOption: Locator;
    readonly messageWindowOption: Locator;

    //Alerts Elements
    readonly alertBoxOption: Locator;
    readonly confirmBoxOption: Locator;
    readonly promptBoxOption: Locator;

    //Frames Elements
    readonly iframe1: Locator;
    readonly iframe2: Locator;

    //Nested Frames Elements
    readonly parentFrame: Locator;
    readonly childFrame: Locator;


    constructor(page: Page) {
        this.page = page;
        this.browserWindowsOption = this.page.locator('text=Browser Windows');
        this.alertsOption = page.locator('text=Alerts');
        this.nestedFramesOption = page.locator('text=Nested Frames');
        this.modalDialogsOption = page.locator('text=Modal Dialogs');

        //Browser Windows Elements
        this.newTabOption = page.locator('text=New Tab');
        this.newWindowOption = page.locator('text=New Window');
        this.messageWindowOption = page.locator('text=Message Window');

        //Alerts Elements
        this.alertBoxOption = page.locator('text=Alert Box');
        this.confirmBoxOption = page.locator('text=Confirm Box');
        this.promptBoxOption = page.locator('text=Prompt Box');

        //Frames Elements
        this.iframe1 = page.frameLocator('iframe[name="iframe1"]').locator('text=This is a sample page');
        this.iframe2 = page.frameLocator('iframe[name="iframe2"]').locator('text=This is a sample page');
        
        //Nested Frames Elements
        this.parentFrame = page.frameLocator('iframe[name="frame1"]').locator('text=Parent frame');
        this.childFrame = page.frameLocator('iframe[name="frame2"]').locator('text=Child Iframe');
    }

    goto() {
        this.page.goto(BASE_URL+'/alertsWindows');
    }
}