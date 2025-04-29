import {Locator, Page} from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class ElementPage {
    readonly page: Page;
    readonly textBoxOption: Locator;
    readonly checkBoxOption: Locator;
    readonly radioButtonOption: Locator;
    readonly webTableOption: Locator;
    readonly buttonsOption: Locator;
    readonly linksOption: Locator;
    readonly brokenLinksImagesOption: Locator;
    readonly uploadDownloadOption: Locator;
    readonly dynamicPropertiesOption: Locator;

    //Check Box Elements
    readonly checkBox: Locator;

    constructor(page:Page){
        this.page = page;
        this.textBoxOption = page.locator('text=Text Box');
        this.checkBoxOption = page.locator('text=Check Box');
        this.radioButtonOption = page.locator('text=Radio Button');
        this.webTableOption = page.locator('text=Web Tables');
        this.buttonsOption = page.locator('text=Buttons');
        this.linksOption = page.locator('text=Links');
        this.brokenLinksImagesOption = page.locator('text=Broken Links - Images');
        this.uploadDownloadOption = page.locator('text=Upload and Download');
        this.dynamicPropertiesOption = page.locator('text=Dynamic Properties');

        //Check Box Elements
        this.checkBox = page.locator('.rct-checkbox');

    }

    async goto() {
        await this.page.goto(BASE_URL+'/elements');
    }

}
