const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
  silent: !process.env.NIGHTWATCH_VERBOSE,
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        port: 4420
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },
    chromeHeadless: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4420']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless', 'disable-gpu']
        }
      }
    },
    chrome: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4420']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          excludeSwitches: ['enable-automation'],
          args: ["disable-gpu","start-fullscreen","--disable-notifications"],
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
        cli_args: ['--port', '4420', '--log', 'debug']
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      }
    }
  }
};