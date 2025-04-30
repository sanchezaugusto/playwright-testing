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

    //Radio Button Elements
    readonly radioButton: Locator;
    readonly radioButtonMessage: Locator;
    readonly ImpressiveRadioButton: Locator;

    //Buttons Elements
    readonly clickMeButton: Locator;
    readonly clickMeButtonMessage: Locator;

    readonly rightClickMeButton: Locator;
    readonly rightClickMeButtonMessage: Locator;

    readonly doubleClickMeButton: Locator;
    readonly doubleClickMeButtonMessage: Locator;

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

        //Radio Button Elements
        this.radioButton = page.locator('label[for="yesRadio"]');
        this.radioButtonMessage = page.locator('text=You have Selected');
        this.ImpressiveRadioButton = page.locator('label[for="impressiveRadio"]');

        //Buttons Elements
        //this.clickMeButton use getByRole due to its id is variable and there are several buttons with the same text 
        this.clickMeButton = page.getByRole('button', { name: 'Click Me', exact: true });
        this.clickMeButtonMessage = page.locator('#dynamicClickMessage');

        this.rightClickMeButton = page.locator('#rightClickBtn');
        this.rightClickMeButtonMessage = page.locator('#rightClickMessage');

        this.doubleClickMeButton = page.locator('#doubleClickBtn');
        this.doubleClickMeButtonMessage = page.locator('#doubleClickMessage');

    }

    async goto() {
        await this.page.goto(BASE_URL+'/elements');
    }

}
