import{test,expect} from '@playwright/test'
import { ElementPage } from '../../pages/ElementPage';

test.describe('broken link test', async () => {
    let elementPage: ElementPage;

    test.beforeEach(async ({ page }) => {
        elementPage = new ElementPage(page);
        await elementPage.goto();
        await elementPage.brokenLinksImagesOption.click();
    });

    test('valid image should to have valid dimensions', async () => {
        const dimensions = await elementPage.validImageLink.evaluate((img) => {
            const image = img as HTMLImageElement;
            return { width: image.naturalWidth, height: image.naturalHeight };
        });
        expect(dimensions.width).toBeGreaterThan(0);
        expect(dimensions.height).toBeGreaterThan(0);
    });

    test('valid image should return 200 status', async ({ page }) => {
        const src = await elementPage.validImageLink.getAttribute('src');
        const response = await page.goto('https://demoqa.com/broken/images/Toolsqa.jpg');
        expect(response?.status()).toBe(200);
    });

    test('image should to be visible', async () => {
        await expect (elementPage.validImageLink).toBeVisible();
    })

    test('broken image should not to work', async () => {
        const naturalWidth = await elementPage.brokenImageLink.evaluate((img) =>{
            const image =img as HTMLImageElement;
            return image.naturalWidth
        });
        console.log(naturalWidth);
        expect(naturalWidth).toBe(0);
    })



});