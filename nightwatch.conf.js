const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
  src_folders : ["step-definitions"],
  silent: !process.env.NIGHTWATCH_VERBOSE,  
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        port: 4119
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },
    chromeHeadless: {
      webdriver: {
        server_path: 'node_modules/.bin/chromedriver',
        cli_args: ['--port=4119']
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
        cli_args: ['--port=4119']
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
        start_process: true,
        server_path: 'node_modules/.bin/geckodriver',
        cli_args: ['--log', 'debug'],
        "port": 4119
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