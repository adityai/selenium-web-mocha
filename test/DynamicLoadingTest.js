require('./DriverFactoryHelper')

//const path = require('path')
const assert = require('assert')
const DynamicLoadingPage = require('../pages/DynamicLoadingPage')

describe('Dynamic Loading', function() {
    let dynamicLoadingPage

    beforeEach(async function () {
        // const vendorDirectory =
            // path.delimiter + path.join(__dirname, '..', 'vendor')
            // process.env.PATH += vendorDirectory
        dynamicLoadingPage = new DynamicLoadingPage(this.driver)
    })

    it('hidden element', async function () {
        await dynamicLoadingPage.loadExample('1')
        assert(
            await dynamicLoadingPage.isFinishTextPresent(), true, 'Finish text not displayed'
        )
    })

    it('rendered element', async function() {
        await dynamicLoadingPage.loadExample('2')
        assert(
            await dynamicLoadingPage.isFinishTextPresent(), true, 'Finish text not displayed'
        )
    })
})