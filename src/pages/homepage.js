    module.exports = new class homePage{

        get searchBarXpath(){
            return $("//input[@id='twotabsearchtextbox']");
        }

        get searchMagifierIcon(){
            return $("//input[@id='nav-search-submit-button']");
        }

        async searchGivenKeyword(productName){
            await this.searchBarXpath.setValue(productName);
            (await this.searchMagifierIcon).click();
        }
    }