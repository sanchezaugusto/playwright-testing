import {Locator, Page} from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class ElementPage {
    readonly page: Page;

    //Element Page Options
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
    readonly homeCheck: Locator;
    readonly desktopCheck: Locator;
    readonly notesCheck: Locator;
    readonly commandsCheck: Locator;
    readonly documentsCheck: Locator;
    readonly workspaceCheck: Locator;
    readonly reactCheck: Locator;
    readonly angularCheck: Locator;
    readonly veuCheck: Locator;
    readonly officeCheck: Locator;
    readonly publicCheck: Locator;
    readonly privateCheck: Locator;
    readonly classifiedCheck: Locator;
    readonly generalCheck: Locator;
    readonly downloadsCheck: Locator;
    readonly wordCheck: Locator;
    readonly excelCheck: Locator;


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

    //Web Table Elements
    readonly addNewRecordButton: Locator;
    readonly firstNameBox: Locator;
    readonly lastNameBox: Locator;
    readonly userEmailBox: Locator;
    readonly ageBox: Locator;
    readonly salaryBox: Locator;
    readonly departmentBox: Locator;
    readonly submitButtonWebTable: Locator;
    readonly closeButton: Locator;
    readonly searchBox: Locator;
    

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

        //Element Page Options
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
        this.homeCheck = page.locator('#tree-node-home');
        this.desktopCheck = page.locator('#tree-node-desktop');
        this.notesCheck = page.locator('#tree-node-notes');
        this.commandsCheck = page.locator('#tree-node-commands');
        this.documentsCheck = page.locator('#tree-node-documents');
        this.workspaceCheck = page.locator('#tree-node-workspace');
        this.reactCheck = page.locator('#tree-node-react');
        this.angularCheck = page.locator('#tree-node-angular');
        this.veuCheck = page.locator('#tree-node-veu');
        this.officeCheck = page.locator('#tree-node-office');
        this.publicCheck = page.locator('#tree-node-public');
        this.privateCheck = page.locator('#tree-node-private');
        this.classifiedCheck = page.locator('#tree-node-classified');
        this.generalCheck = page.locator('#tree-node-general');
        this.downloadsCheck = page.locator('#tree-node-downloads');
        this.wordCheck = page.locator('#tree-node-word');
        this.excelCheck = page.locator('#tree-node-excel');

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

        //Web Table Elements
        this.addNewRecordButton = page.locator('#addNewRecordButton');
        this.firstNameBox = page.locator('#firstName');
        this.lastNameBox = page.locator('#lastName');
        this.userEmailBox = page.locator('#userEmail');
        this.ageBox = page.locator('#age');
        this.salaryBox = page.locator('#salary');
        this.departmentBox = page.locator('#department');
        this.submitButtonWebTable = page.locator('#submit');
        this.closeButton = page.locator('#closeLargeModal');
        this.searchBox = page.locator('#searchBox');

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
