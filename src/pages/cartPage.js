//const expectChai = require('chai').expect;
//const chai = await import('chai');
//import { expect as expectChai } from 'chai'

//const assert = await import('assert');


module.exports = new class cartPage{

    get cartPriceXpath(){

        //span[@id='sc-subtotal-amount-buybox']//span[@class='currencyINR']

        return $("//span[@id='sc-subtotal-amount-buybox']//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap']");

    }

    async getFinalPriceInCart(prodPrice){
      //await expectChai(await this.cartPriceXpath.getText().to.equal(prodPrice));    
      //  expect(await this.cartPriceXpath.getText()).to.equal(prodPrice);  
        
        //assert.equal(await this.cartPriceXpath.getText(), prodPrice);

       // await expect($button).toBeDisplayed()
        await expect((await this.cartPriceXpath.getText()).toHaveText(prodPrice));
    }


}