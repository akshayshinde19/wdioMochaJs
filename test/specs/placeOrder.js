//const expectChai = require('chai').expect;

const homePageVar = require("../../src/pages/homepage");
const basePageVar = require("../../src/pages/basePage");
const searchedResultsPage = require("../../src/pages/SearchResultsPage");
const productDescPageVar = require("../../src/pages/productDescPage");
const finalCartPageVar = require("../../src/pages/cartPage");



describe("This is the test suite for placing order from homepage", async () => {

    it("TC to verify placing order from homepage", async () => {
        await basePageVar.navigateToUrl();
        await homePageVar.searchGivenKeyword("Bean bag");
        await browser.pause(3000);

        let parentWindowId = await searchedResultsPage.clickOnSearchedProduct();

        await browser.pause(5000);
        console.log("parentWindowId = " + parentWindowId);
        let prodPrice = await productDescPageVar.addProductToCartAndReturnThePrice(parentWindowId);
        console.log("Price = " + prodPrice);
        await productDescPageVar.goToCart();


        await finalCartPageVar.getFinalPriceInCart(prodPrice);       
        await browser.pause(5000);
    })

})