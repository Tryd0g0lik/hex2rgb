import puppeteer, { Locator } from 'puppeteer-core';
const time = new Date();
const hours = time.getHours().toString().padStart(2, 0);
const minutes = time.getMinutes().toString().padStart(2, 0);
const seconds = time.getSeconds().toString().padStart(2, 0);

const response = describe.each([
  ['#FFFFFF'],
  ['#795548 '],
  [' #795548'],
  ['#3f51b5 #3c51c5'],
  ['#03a9f4, #3f51b5, #3c51c5'],
  ['#ff5722'],
  ['#f-f5722'],
  ['#%ff5722%'],
  ['#%ff5722'],
  ['#795548'],

]);

response('Form input testing ' + `%s`, (a) => {

  let browser;
  let page;

  beforeEach(async () => {
    const executablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
    browser = await puppeteer.launch({
      executablePath,
      headless: false, // показывать реальный браузер

      slowMo: 200,
      devtools: false,
    });
    page = await browser.newPage();

    await Promise.all([
      page.coverage.startCSSCoverage(),
      page.coverage.startJSCoverage()
    ])
  });

  test('Test', async () => { 
    const sreenWidth = 1920;
    const width = Math.floor(sreenWidth * 0.4);

    await page.setViewport({ width: width, height: 900 });
    await page.goto('http://localhost:8080/');
    const input = await page.$(".block input[type='text']");
    await input.click();
    // await page.getDefaultTimeout(3000)
    await input.type(a);
    await page.waitForTimeout(1000);
    // await page.screenshot({ path: `.\\__tests__\\__component-test__\\screen\\sreen_${a}_${hours}_${minutes}_${seconds}_.png`, overwrite: true });

  }, 20000);

  afterEach(async () => {

    await browser.close()
  });

})
