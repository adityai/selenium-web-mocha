const { Builder } = require('selenium-webdriver')

class DriverFactory {
    constructor(config) {
        this.config = config
    }

    _configure() {
        let builder = new Builder()
        switch (this.config.host) {
            case 'saucelabs':
                const url = 'https://ondemand.saucelabs.com/wd/hub'
                builder.usingServer(url)
                builder.withCapabilities(this.config.sauce)
                break
            case 'localhost':
                // process.env.PATH +=
                // path.delimiter + path.join(__dirname, '..', 'vendor')
                builder.forBrowser(this.config.browser)
                break
            case 'sauce-W3C':
                const url2 = 'http://ondemand.saucelabs.com:80/wd/hub'
                builder.usingServer(url2)
                builder.withCapabilities(this.config.sauceW3C)
                break
        }
        return builder
    }

    async build(testName) {
        //process.env.PATH += path.delimiter + path.join(__dirname, '..', 'vendor')
        this.testName = testName
        this.driver = await this._configure().build()
        const { id_ } = await this.driver.getSession()
        this.sessionId = id_
    }

    async quit(testPassed) {
        if (this.config.host === 'saucelabs') {
            this.driver.executeScript('sauce:job-name=' + this.testName)
            this.driver.executeScript('sauce:job-result=' + testPassed)
            if (!testPassed) {
                console.log('See a video of the run at https:/saucelabs.com/tests/' + this.sessionId)
            }
        }
        await this.driver.quit()
    }


}

module.exports = DriverFactory
