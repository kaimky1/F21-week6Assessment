
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking draw button displays id with choices', async () => {
    await driver.findElement(By.css('#draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

test('clicking draw button displays id with choices', async () => {
    await driver.findElement(By.css('#draw')).click()
    await driver.findElement(By.css('.bot-btn')).click()
    //How can i specify which bot to choose?
    
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})