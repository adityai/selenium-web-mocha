const USERNAME_TEXTBOX = { id: "login_field" }
const PASSWORD_TEXTBOX = { id: 'password' }
const SUBMIT_BUTTON = { name: 'commit' }
const ERROR_MESSAGE = { className: 'container-lg px-2' }
const LOGIN_PAGE = { id: "js-pjax-container"}

class LoginPage {
    constructor(driver) {
        this.driver = driver
    }

    async load() {
        await this.driver.get('https://github.com/login')
        if (!(await this.driver.findElement(LOGIN_PAGE).isDisplayed()))
            throw new Error('Login page not loaded')
    }

    async authenticate(username, password) {
        await this.driver.findElement(USERNAME_TEXTBOX).sendKeys(username)
        await this.driver.findElement(PASSWORD_TEXTBOX).sendKeys(password)
        await this.driver.findElement(SUBMIT_BUTTON).click()
    }

    async errorMessageBoxPresent() {
        return await this.driver.findElement(ERROR_MESSAGE).isDisplayed()
    }

    async getErrorMessageText() {
        return await this.driver.findElement(ERROR_MESSAGE).getText()
    }
}

module.exports = LoginPage