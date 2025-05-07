import  {Page, Locator} from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class InteractionPage {
    readonly page: Page;
    readonly sortableOption: Locator;
    readonly selectableOption: Locator;
    readonly ResizableOption: Locator;
    readonly droppableOption: Locator;
    readonly dragableOption: Locator;

    constructor(page: Page){
        this.page = page;
        this.sortableOption = page.locator('text=Sortable');
        this.selectableOption = page.locator('text=Selectable');
        this.ResizableOption = page.locator('text=Resizable');
        this.droppableOption = page.locator('text=Droppable');
        this.dragableOption = page.locator('text=Draggable');
    }

    async goto() {
        await this.page.goto(BASE_URL + '/interaction');
    }


}