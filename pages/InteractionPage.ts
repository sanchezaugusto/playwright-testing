import  {Page, Locator} from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class InteractionPage {
    readonly page: Page;
    readonly sortableOption: Locator;
    readonly selectableOption: Locator;
    readonly ResizableOption: Locator;
    readonly droppableOption: Locator;
    readonly dragableOption: Locator;

    //Sortable Elements
    readonly list: Locator;
    readonly oneList: Locator;
    readonly twoList: Locator;
    readonly threeList: Locator;
    readonly fourList: Locator;
    readonly fiveList: Locator;
    readonly sixList: Locator;
    
    readonly grid: Locator;
    

    //Draggable Elements
    //Options
    readonly simpleOption: Locator;
    readonly axisOption: Locator;
    readonly containerOption: Locator;
    readonly cursorOption: Locator;
    
    //Simple
    readonly dragBox: Locator;
    
    //Axis Restricted
    readonly dragBoxX: Locator;
    readonly dragBoxY: Locator;

    //Container Restricted
    readonly element1: Locator;
    readonly element2: Locator;
    readonly containerWrapper: Locator;

    //Cursor Style
    readonly center: Locator;
    readonly topLeft: Locator;
    readonly bottom: Locator;

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
        
        //Simple
        this.dragBox = page.locator('#dragBox');

        //Axis Restricted
        this.dragBoxX = page.locator('#restrictedX');
        this.dragBoxY = page.locator('#restrictedY');

        //Container Restricted
        this.element1 = page.locator("text=I'm contained within the box");
        this.element2 = page.locator("text=I'm contained within my parent");
        this.containerWrapper = page.locator('#containmentWrapper');


        //Cursor Style
        this.center = page.locator('#cursorCenter');
        this.topLeft = page.locator('#cursorTopLeft');
        this.bottom = page.locator('#cursorBottom');
    }

    async goto() {
        await this.page.goto(BASE_URL + '/interaction');
    }


}