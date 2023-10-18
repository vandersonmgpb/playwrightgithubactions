const { chromium } = require('playwright');
const { test } = require('@playwright/test');

test('basic test', async () => {
    const browser = await chromium.launch({headless:true})
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'fulanodetall@email.com')
    await page.press('input[type = "email"]', 'Tab')
    await page.fill('input[type = "password"]', '123456')
    await page.click("form >> 'Sign in'")

    const html = await page.innerHTML('.feed-toggle')

    // Screenshot
    await page.screenshot({path: 'SignIng.png', fullPage: true})

    await browser.close()
})