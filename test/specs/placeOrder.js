//npx wdio run wdio.conf.js --spec ./test/specs/placeOrder.js > log11.log
//npx cross-env ENV=qa wdio run wdio.conf.js --spec ./test/specs/placeOrder.js
//npm cache clean --force

//const expectChai = require('chai').expect;

const allureReporter = require('@wdio/allure-reporter').default

const homePageVar = require("../../src/pages/homepage");
const basePageVar = require("../../src/pages/basePage");
const searchedResultsPage = require("../../src/pages/SearchResultsPage");
const productDescPageVar = require("../../src/pages/productDescPage");
const finalCartPageVar = require("../../src/pages/cartPage");





describe("This is the test suite for placing order from homepage", async () => {

    it("TC to verify placing order from homepage", async () => {

        
        allureReporter.addStory("StoryID=1001");
        allureReporter.addSeverity("critical");


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