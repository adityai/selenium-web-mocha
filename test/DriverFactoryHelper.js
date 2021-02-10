const DriverFactory = require('../lib/DriverFactory')
const config = require('../lib/config.js')
const driverFactory = new DriverFactory(config)

beforeEach(async function() {
    const testName = this.currentTest.fullTitle()
    await driverFactory.build(testName)
    this.driver = driverFactory.driver
})

afterEach(async function () {
    const testPassed = this.currentTest.state === 'passed'
    if (!testPassed) {
        driver.takeScreenshot().then(function (data) {
            takeScreenshot(data, 'failed.png')
        })
    }
    await driverFactory.quit(testPassed)
})

function takeScreenshot(image, err) {
    require('fs').writeFile('out.png', image, 'base64', function (err) {
        console.log(err)
    })
}
