module.exports = new class productDescPage{

    //div[@id='apex_desktop_dealsAccordionRow']//span[@class='a-price-whole']

    get priceXpath(){
        //span[normalize-space()='1,999']
        //span[normalize-space()='2,588']
        return $("//div[@id='corePriceDisplay_desktop_feature_div']//span[@class='a-price-whole']");
    }


    //a[@title='Add to Cart']
    get addToCartXPath(){
        return $("//input[@value='Add to Cart']");
    }

    //a[@href='/cart?ref_=sw_gtc']
    //a[@class='a-button-text']//*[contains(text(),'Go to')]")
    //div[@data-cy='title-recipe']//*[contains(text(),'NOOSY')]
    get goToCartXpath(){
        return $("//div[@id='sw-atc-buy-box']//span[@class='a-button-inner']/a[@class='a-button-text' or contains(text(),'Go to Cart')]");
    }

    async addProductToCartAndReturnThePrice(parentwinId){
        browser.pause(5000);
       // let allWindowHandles =  browser.windowHandles();
        let allWindowHandles  = await browser.getWindowHandles();

        for (let i of allWindowHandles){
            console.log("Wind Handle i= "+ i);
            if(i!=parentwinId){
                await browser.switchToWindow(i);
                break;
            }
        }

        let price=await this.priceXpath.getText();
        
        console.log("Price from inside = " + price);
        await this.addToCartXPath.click();
        browser.pause(5000);

        return price;


    }

    async goToCart(){
        await this.goToCartXpath.click();
    }

}