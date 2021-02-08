const { Builder } = require('selenium-webdriver')
// const path = require('path')`
const assert = require('assert')

function takeScreenshot(image, err) {
  require('fs').writeFile('out.png', image, 'base64', function (err) {
    console.log(err)
  })
}

describe('Login', function () {
  this.timeout(30000)
  let driver

  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build()
  })

  afterEach(async function () {
    if (this.currentTest.state == 'failed') {
      driver.takeScreenshot().then(function (data) {
        takeScreenshot(data, 'failed.png')
      })
    }
    await driver.quit()
  })

  it('with in-valid credentials', async function () {
    await driver.get('https://github.com/login')
    await driver.findElement({ id: "login_field" }).sendKeys("incorrect-username")
    await driver.findElement({ id: "password" }).sendKeys("tester")
    await driver.findElement({ xpath: '//*[@id="login"]/div[4]/form/input[14]' }).click()
    errorBoxElement = await driver.findElement({ xpath: '//*[@id="js-flash-container"]/div' })
    assert(await errorBoxElement.isDisplayed())
    console.log(await errorBoxElement.getText())
    // assert(errorBoxElement.getText() == "Incorrect username or password")
  })
})

