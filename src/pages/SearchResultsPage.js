module.exports = new class SearchResultsPage {

    get ProductsXpath() {
        return $("//div[@data-cy='title-recipe']//*[contains(text(),'NOOSY')]");
    }

    async clickOnSearchedProduct() {

        let parentWindowId = browser.getWindowHandle();

        console.log("Parent Id = " + parentWindowId);


        await this.ProductsXpath.click();

        return parentWindowId;
    }



}