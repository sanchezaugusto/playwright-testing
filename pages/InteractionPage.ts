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
    readonly dragBox: Locator;

    constructor(page: Page){
        this.page = page;
        this.sortableOption = page.locator('text=Sortable');
        this.selectableOption = page.locator('text=Selectable');
        this.ResizableOption = page.locator('text=Resizable');
        this.droppableOption = page.locator('text=Droppable');
        this.dragableOption = page.locator('text=Dragabble');

        //Draggable Elements
        this.dragBox = page.locator('#dragBox');
    }

    async goto() {
        await this.page.goto(BASE_URL + '/interaction');
    }


}