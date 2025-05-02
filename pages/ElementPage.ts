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

    //Check Text Box Elements
    readonly fullNameBox: Locator;
    readonly emailBox: Locator;
    readonly currentAddressBox: Locator;
    readonly permanentAddressBox: Locator;
    readonly submitButton: Locator;

    readonly nameMessage: Locator;
    readonly emailMessage: Locator;
    readonly currentAddressMessage: Locator;
    readonly permanentAddressMessage: Locator;

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

    //Links Elements
    readonly homeLink: Locator;
    readonly homeNDHJjLink: Locator;

    //Broken Links Elements
    readonly validImageLink: Locator;
    readonly brokenImageLink: Locator;
    readonly validLink: Locator;
    readonly brokenLink: Locator;




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

        //Check Text Box Elements
        this.fullNameBox = page.locator('#userName');
        this.emailBox = page.locator('#userEmail');
        this.currentAddressBox = page.locator('textarea#currentAddress');
        this.permanentAddressBox = page.locator('textarea#permanentAddress');
        this.submitButton = page.locator('#submit');

        this.nameMessage = page.locator('#name');
        this.emailMessage = page.locator('#email');
        this.currentAddressMessage = page.locator('p#currentAddress');
        this.permanentAddressMessage = page.locator('p#permanentAddress');

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

        //Broken Links Elements
        this.validImageLink = page.locator('img[src="/images/Toolsqa.jpg"]').first();
        this.brokenImageLink = page.locator('img[src="/images/Toolsqa_1.jpg"]');
        this.validLink = page.locator('text=Click Here for Valid Link');
        this.brokenLink = page.locator('text=Click Here for Broken Link');

    }

    async goto() {
        await this.page.goto(BASE_URL+'/elements', {timeout: 60000});
    }

}
