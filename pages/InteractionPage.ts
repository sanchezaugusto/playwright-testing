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
    readonly list1: Locator;
    readonly oneList: Locator;
    readonly twoList: Locator;
    readonly threeList: Locator;
    readonly fourList: Locator;
    readonly fiveList: Locator;
    readonly sixList: Locator;
    
    readonly grid1: Locator;
    readonly oneGrid: Locator;
    readonly twoGrid: Locator;
    readonly threeGrid: Locator;
    readonly fourGrid: Locator;
    readonly fiveGrid: Locator;
    readonly sixGrid: Locator;
    readonly sevenGrid: Locator;
    readonly eightGrid: Locator;
    readonly nineGrid: Locator;
    
    //Selectable Elements
    readonly list2: Locator;
    readonly element1: Locator;
    readonly element2: Locator;
    readonly element3: Locator;
    readonly element4: Locator;

    readonly grid2: Locator;
    readonly oneGrid2: Locator;
    readonly twoGrid2: Locator;
    readonly threeGrid2: Locator;
    readonly fourGrid2: Locator;
    readonly fiveGrid2: Locator;
    readonly sixGrid2: Locator;
    readonly sevenGrid2: Locator;
    readonly eightGrid2: Locator;
    readonly nineGrid2: Locator;


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
    readonly elementD1: Locator;
    readonly elementD2: Locator;
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
        this.list1 = page.locator('#sortableList');
        this.oneList = page.locator('#sortableList li:nth-child(1)');
        this.twoList = page.locator('#sortableList li:nth-child(2)');
        this.threeList = page.locator('#sortableList li:nth-child(3)');
        this.fourList = page.locator('#sortableList li:nth-child(4)');
        this.fiveList = page.locator('#sortableList li:nth-child(5)');
        this.sixList = page.locator('#sortableList li:nth-child(6)');

        this.grid1 = page.locator('#sortableGrid');
        this.oneGrid = page.locator('#sortableGrid li:nth-child(1)');
        this.twoGrid = page.locator('#sortableGrid li:nth-child(2)');
        this.threeGrid = page.locator('#sortableGrid li:nth-child(3)');
        this.fourGrid = page.locator('#sortableGrid li:nth-child(4)');
        this.fiveGrid = page.locator('#sortableGrid li:nth-child(5)');
        this.sixGrid = page.locator('#sortableGrid li:nth-child(6)');
        this.sevenGrid = page.locator('#sortableGrid li:nth-child(7)');
        this.eightGrid = page.locator('#sortableGrid li:nth-child(8)');
        this.nineGrid = page.locator('#sortableGrid li:nth-child(9)');
        
        //Selectable Elements
        this.list2 = page.locator('#selectableList');
        this.element1 = page.locator('#selectableList li:nth-child(1)');
        this.element2 = page.locator('#selectableList li:nth-child(2)');
        this.element3 = page.locator('#selectableList li:nth-child(3)');
        this.element4 = page.locator('#selectableList li:nth-child(4)');

        this.grid2 = page.locator('#selectableGrid');
        this.oneGrid2 = page.locator('#selectableGrid li:nth-child(1)');
        this.twoGrid2 = page.locator('#selectableGrid li:nth-child(2)');
        this.threeGrid2 = page.locator('#selectableGrid li:nth-child(3)');
        this.fourGrid2 = page.locator('#selectableGrid li:nth-child(4)');
        this.fiveGrid2 = page.locator('#selectableGrid li:nth-child(5)');
        this.sixGrid2 = page.locator('#selectableGrid li:nth-child(6)');
        this.sevenGrid2 = page.locator('#selectableGrid li:nth-child(7)');
        this.eightGrid2 = page.locator('#selectableGrid li:nth-child(8)');
        this.nineGrid2 = page.locator('#selectableGrid li:nth-child(9)');

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
        this.elementD1 = page.locator("text=I'm contained within the box");
        this.elementD2 = page.locator("text=I'm contained within my parent");
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