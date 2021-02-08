const BasePage = require('./BasePage')
const USERNAME_TEXTBOX = { id: "login_field" }
const PASSWORD_TEXTBOX = { id: 'password' }
const SUBMIT_BUTTON = { name: 'commit' }
const ERROR_MESSAGE = { className: 'container-lg px-2' }
const LOGIN_PAGE = { id: "js-pjax-container"}


class LoginPage extends BasePage {
    constructor(driver) {
        super(driver)
    }

    async load() {
        await this.loadPage('https://github.com/login')
        if (!(await this.driver.findElement(LOGIN_PAGE).isDisplayed()))
            throw new Error('Login page not loaded')
    }

    async authenticate(username, password) {
        await this.type(USERNAME_TEXTBOX, username)
        await this.type(PASSWORD_TEXTBOX, password)
        await this.click(SUBMIT_BUTTON)
    }

    async errorMessageBoxPresent() {
        return await this.driver.findElement(ERROR_MESSAGE).isDisplayed()
    }

    async getErrorMessageText() {
        return await this.driver.findElement(ERROR_MESSAGE).getText()
    }
}

module.exports = LoginPage