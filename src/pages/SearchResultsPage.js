module.exports = new class SearchResultsPage {

    get ProductsXpath() {
        //return $("//div[@data-cy='title-recipe']//*[contains(text(),'NOOSY')]");
        //return $$("//div[@data-component-type='s-search-result']//img")[12];
        return $$("//div[@data-cy='title-recipe']")[1];
    }

    async clickOnSearchedProduct() {

        let parentWindowId = browser.getWindowHandle();

        console.log("Parent Id = " + parentWindowId);


        await this.ProductsXpath.click();

        return parentWindowId;
    }



}