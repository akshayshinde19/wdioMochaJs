module.exports = new class BasePage{

async navigateToUrl(){
      await browser.url('/');
      browser.maximizeWindow();

     
}

}