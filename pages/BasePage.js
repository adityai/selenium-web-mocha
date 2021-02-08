class BasePage {
    constructor(driver) {
        this.driver = driver
    }

    async loadPage(url) {
        await this.driver.get(url)
    }

    find(locator) {
        return this.driver.findElement(locator)
    }

    async click(locator) {
        await this.find(locator).click()
    }

    async getText(locator) {
        return await this.find(locator).getText()
    }

    async type(locator, inputText) {
        await this.find(locator).sendKeys(inputText)
    }

    async isDisplayed(locator) {
        return await this.find(locator).isDisplayed()
    }
}

module.exports = BasePage
