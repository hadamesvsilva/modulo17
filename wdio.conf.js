const allure = require('allure-commandline')
const video = import('wdio-video-reporter')
const { join } = require('path')
 

exports.config = {
  baseUrl: 'http://localhost',
  port: 4723,
  path: '/wd/hub',
  specs: [
    './test/specs/**/*.spec.js'
  ],
  services: ['chromedriver'],
  framework: 'mocha',
  capabilities: [{
    platformName: "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "ebac-qe",
    "appium:automationName": "UiAutomator2",
    //"app": join(process.cwd(), 'C:/repositorio/testes-mobile-ebac-shop2/app/android/loja-ebac (1).apk'),
    "appium:appPackage": "com.woocommerce.android",
    "appium:appActivity": ".ui.main.MainActivity",
    "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity",
  }],

  waitForTimeout: 20000,
  mochaOpts: {

    timeout: 300000
  },

  reporters: ['spec',
    ['video', {
      saveAllVideos: true,
      videoSlowdownMultiplier: 50
    }],
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    }]
  ],

  onComplete: function () {
    const reportError = new Error('Could not generate Allure report');
    const generation = allure(['generate', 'allure-results', '--clean']);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(
        () => reject(reportError),
        5000
      );

      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log('Allure report successfully generated');
        resolve();
      });
    });
  },

  afterStep: async function (step, scenario, { error, duration, passed }, context) {
    await driver.takeScreenshot();
  }
}
