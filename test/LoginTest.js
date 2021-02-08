require('./DriverFactoryHelper')

// const path = require('path')`
const assert = require('assert')
const LoginPage = require('../pages/LoginPage')


describe('Login', function () {
  let login

  beforeEach(async function () {
    login = new LoginPage(this.driver)
    await login.load()
  })

  it('with in-valid credentials', async function() {
    await login.authenticate('incorrect-username', 'YaRight!')
    assert(await login.errorMessageBoxPresent(), "Error message box is displayed")
    assert(await login.getErrorMessageText() == "Incorrect username or password.", "'Incorrect username or password.' is displayed")
  })

})