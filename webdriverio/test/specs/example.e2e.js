const BestBuyPage = require('../pageobjects/bestbuy.page');

describe('Best Buy', () => {
    it('should have the PS5 available', () => {
        BestBuyPage.open("ps5");
        expect(BestBuyPage.getAddToCartButton()).toBeDisplayed()
    });
});


describe('Best Buy', () => {
    it('should have call of duty available', () => {
        BestBuyPage.open("call of duty");
        expect(BestBuyPage.getAddToCartButton()).toBeDisplayed()
    });
});