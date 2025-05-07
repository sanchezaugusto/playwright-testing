import {test, expect} from '@playwright/test';
import { InteractionPage } from '../../pages/InteractionPage';

test.describe('dragabble test', async () => {
    test('dragabble should to work', async ({ page }) => {
        const interactionPage = new InteractionPage(page);
        await interactionPage.goto();
        await interactionPage.dragableOption.click();

        const initialPosition = await interactionPage.dragBox.boundingBox();
        if (!initialPosition) throw new Error('dragBox bounding box not found');
        const targetX = initialPosition.x + 100;
        const targetY = initialPosition.y + 30;
    // Perform the drag using the mouse API
        await page.waitForTimeout(5000);
        await page.mouse.move(initialPosition.x, initialPosition.y);
        await page.mouse.down();
        await page.mouse.move(targetX, targetY);
        await page.mouse.up();
        await page.waitForTimeout(5000);
        const newPosition = await interactionPage.dragBox.boundingBox();
        if(!newPosition) throw new Error('Element not found');

        expect(newPosition.x).toBeCloseTo(targetX, 1);
        expect(newPosition.y).toBeCloseTo(targetY, 1);
    })
})