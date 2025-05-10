import  {Page, Locator} from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class InteractionPage {
    readonly page: Page;
    readonly sortableOption: Locator;
    readonly selectableOption: Locator;
    readonly ResizableOption: Locator;
    readonly droppableOption: Locator;
    readonly dragableOption: Locator;

    //Draggable Elements
    //Options
    readonly simpleOption: Locator;
    readonly axisOption: Locator;
    readonly containerOption: Locator;
    readonly cursorOption: Locator;
    //elements
    readonly dragBox: Locator;
    readonly dragBoxX: Locator;
    readonly dragBoxY: Locator;

    constructor(page: Page){
        this.page = page;
        this.sortableOption = page.locator('text=Sortable');
        this.selectableOption = page.locator('text=Selectable');
        this.ResizableOption = page.locator('text=Resizable');
        this.droppableOption = page.locator('text=Droppable');
        this.dragableOption = page.locator('text=Dragabble');

        //Draggable Elements
        //Options
        this.simpleOption = page.locator('#draggableExample-tab-simple');
        this.axisOption = page.locator('#draggableExample-tab-axisRestriction');
        this.containerOption = page.locator('#draggableExample-tab-containerRestriction');
        this.cursorOption = page.locator('#draggableExample-tab-cursorStyle');
        //elements
        this.dragBox = page.locator('#dragBox');
        this.dragBoxX = page.locator('#restrictedX');
        this.dragBoxY = page.locator('#restrictedY');
    }

    async goto() {
        await this.page.goto(BASE_URL + '/interaction');
    }


}