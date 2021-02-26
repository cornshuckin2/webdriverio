const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BestBuyPage extends Page {
    /**
     * define selectors
     */
    get btnAddToCart () { return $("//div[@class='fulfillment-add-to-cart-button']//button[text()='Add to Cart']") }

    /**
     * return btnAddToCart as long as it's displayed
     */
    getAddToCartButton () {
        if (this.btnAddToCart.waitForDisplayed({ timeout: 10000 })) {
            return this.btnAddToCart
        }
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open (item) {
        if (item == "ps5") {
            return super.open('sony-playstation-5-console/6426149.p?skuId=6426149');
        } else {
            return super.open('sony-playstation-5-dualsense-wireless-controller/6430163.p?skuId=6430163');
        }
    }
}

module.exports = new BestBuyPage();
