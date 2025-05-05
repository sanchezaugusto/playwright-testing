import {Page, Locator} from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class WidgetPage {
    readonly page : Page
    readonly accordianOption: Locator
    readonly autoCompleteOption: Locator
    readonly datePickerOption: Locator
    readonly sliderOption: Locator
    readonly progressBarOption: Locator
    readonly tabsOption: Locator
    readonly toolTipOption: Locator
    readonly menuOption: Locator
    readonly selectMenuOption: Locator
    constructor(page: Page) {
        this.page = page;
        this.accordianOption = page.locator('text=Accordian');
        this.autoCompleteOption = page.locator('text=Auto Complete');
        this.datePickerOption = page.locator('text=Date Picker');
        this.sliderOption = page.locator('text=Slider');
        this.progressBarOption = page.locator('text=Progress Bar');
        this.tabsOption = page.locator('text=Tabs');
        this.toolTipOption = page.locator('text=Tool Tips');
        this.menuOption = page.locator('text=Menu');
        this.selectMenuOption = page.locator('text=Select Menu');
    }
    async goto() {
        await this.page.goto(BASE_URL + '/widgets');
    }
}