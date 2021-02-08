const { Builder } = require('selenium-webdriver')
// const path = require('path')`
const assert = require('assert')
const LoginPage = require('../pages/LoginPage')

function takeScreenshot(image, err) {
  require('fs').writeFile('out.png', image, 'base64', function (err) {
    console.log(err)
  })
}

describe('Login', function () {
  this.timeout(30000)
  let driver
  let login

  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build()
    login = new LoginPage(driver)
    await login.load()
  })

  afterEach(async function () {
    if (this.currentTest.state == 'failed') {
      driver.takeScreenshot().then(function (data) {
        takeScreenshot(data, 'failed.png')
      })
    }
    await driver.quit()
  })


  it('with in-valid credentials', async function() {
    await login.authenticate('incorrect-username', 'YaRight!')
    assert(await login.errorMessageBoxPresent(), "Error message box is displayed")
    assert(await login.getErrorMessageText() == "Incorrect username or password.", "'Incorrect username or password.' is displayed")
  })

})