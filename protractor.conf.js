const chromeDriverPath = '/path/to/chromedriver';
const geckoDriverPath = '/path/to/geckodriver';

exports.config = {
  directConnect: true,
  chromeDriver: chromeDriverPath,
  geckoDriver: geckoDriverPath,
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['e2e/**/*.e2e-spec.js'],
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(true);
  }
};
