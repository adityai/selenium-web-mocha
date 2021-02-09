module.exports = {
    baseUrl: process.env.BASE_URL || 'http://the-internet.herokuapp.com',
    browser: process.env.BROWSER || 'chrome',
    host: process.env.HOST || 'saucelabs',
    sauce: {
        "browserName": process.env.BROWSER_NAME || 'chrome',
        "browserVersion": process.env.BROWSER_VERSION || '88.0',
        "platformName": process.env.PLATFORM_NAME || 'Windows 10',
        "sauce:options": {
            "username": process.env.SAUCE_USERNAME,
            "accessKey": process.env.SAUCE_ACCESS_KEY,
        }
    }};
