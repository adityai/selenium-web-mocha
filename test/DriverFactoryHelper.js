const DriverFactory = require('../lib/DriverFactory')
const config = require('../lib/config.js')
const driverFactory = new DriverFactory(config)

beforeEach(async function() {
    await driverFactory.build()
    this.driver = driverFactory.driver
})

afterEach(async function() {
    await driverFactory.quit()
})

afterEach(async function () {
    if (this.currentTest.state == 'failed') {
        driver.takeScreenshot().then(function (data) {
            takeScreenshot(data, 'failed.png')
        })
    }
})

function takeScreenshot(image, err) {
    require('fs').writeFile('out.png', image, 'base64', function (err) {
        console.log(err)
    })
}
