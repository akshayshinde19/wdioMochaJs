//const expectChai = require('chai').expect;
//const chai = await import('chai');
//import { expect as expectChai } from 'chai'

//const assert = await import('assert');


module.exports = new class cartPage{

    get cartPriceXpath(){

        //span[@id='sc-subtotal-amount-buybox']//span[@class='currencyINR']
//span[@class='a-price sw-subtotal-amount']//span[@class='a-price-whole']
        return $("//span[@id='sc-subtotal-amount-buybox']//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap']");

    }

    async getFinalPriceInCart(prodPrice){
        
        // expectChai(await this.tottalPriceFromCart.getText().trim()).to.equal("  "+priceFromPdp+".00");


        let finalPriceInCart =await this.cartPriceXpath.getText();    
        
        console.log("prodPrice Price = " + prodPrice);
        console.log("finalPriceInCart Price = " + finalPriceInCart);
        
        await expect(this.cartPriceXpath).toHaveText(prodPrice+".00");

    }


}