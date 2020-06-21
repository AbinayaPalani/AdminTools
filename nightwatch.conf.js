const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const seleniumServer = require('selenium-server-standalone-jar');

module.exports = {
  silent: !process.env.NIGHTWATCH_VERBOSE,  
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        port: 4129
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },
    chromeHeadless: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4129']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'goog:chromeOptions': {
          excludeSwitches: ['enable-automation'],
          w3c: false,
          args: ["headless","disable-gpu","window-size=1920,1080","--disable-notifications",'--enable-features=NetworkService,NetworkServiceInProcess'],
          "prefs" : {
            "credentials_enable_service" : false,
            "profile.password_manager_enabled" : false
          }
        }
      }
    },
    chrome: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4129']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          excludeSwitches: ['enable-automation'],
          w3c: false,
          args: ["disable-gpu","start-fullscreen","--disable-notifications",'--enable-features=NetworkService,NetworkServiceInProcess'],
          "prefs" : {
            "credentials_enable_service" : false,
            "profile.password_manager_enabled" : false
          }
        }
      }
    },
    firefox: {
      webdriver: {
        server_path: geckodriver.path,
        cli_args: ['--log', 'debug'],
        "webdriver.gecko.driver" : geckodriver.path,
        "port": 4129
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true,
        acceptInsecureCerts: true
      }
    }
  }
};