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
    readonly oneGrid: Locator;
    readonly twoGrid: Locator;
    readonly threeGrid: Locator;
    readonly fourGrid: Locator;
    readonly fiveGrid: Locator;
    readonly sixGrid: Locator;
    readonly sevenGrid: Locator;
    readonly eightGrid: Locator;
    readonly nineGrid: Locator;
    

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

        //Sortable Elements
        this.list = page.locator('#sortableList');
        this.oneList = page.locator('#sortableList li:nth-child(1)');
        this.twoList = page.locator('#sortableList li:nth-child(2)');
        this.threeList = page.locator('#sortableList li:nth-child(3)');
        this.fourList = page.locator('#sortableList li:nth-child(4)');
        this.fiveList = page.locator('#sortableList li:nth-child(5)');
        this.sixList = page.locator('#sortableList li:nth-child(6)');

        this.grid = page.locator('#sortableGrid');
        this.oneGrid = page.locator('#sortableGrid li:nth-child(1)');
        this.twoGrid = page.locator('#sortableGrid li:nth-child(2)');
        this.threeGrid = page.locator('#sortableGrid li:nth-child(3)');
        this.fourGrid = page.locator('#sortableGrid li:nth-child(4)');
        this.fiveGrid = page.locator('#sortableGrid li:nth-child(5)');
        this.sixGrid = page.locator('#sortableGrid li:nth-child(6)');
        this.sevenGrid = page.locator('#sortableGrid li:nth-child(7)');
        this.eightGrid = page.locator('#sortableGrid li:nth-child(8)');
        this.nineGrid = page.locator('#sortableGrid li:nth-child(9)');
        

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