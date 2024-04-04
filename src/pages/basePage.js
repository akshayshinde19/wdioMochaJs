module.exports = new class BasePage{

async navigateToUrl(){
      await browser.url("https://www.amazon.in/");
      await browser.maximizeWindow();
}

}