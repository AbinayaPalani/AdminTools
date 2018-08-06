const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
//const nightwatchCucumber = require('nightwatch-cucumber');



// var nightwatchCucumberConf = {
//   runner: 'nightwatch',
//   featureFiles: './tests/features/support/AccountDetail.feature',
//   stepDefinitions: './tests/features/step_definitions/steps.js',
//   closeSession: 'afterFeature'
// }



require('nightwatch-cucumber')({
  cucumberArgs: ['--require', './tests/admintool/step_definitions/.','--format', 'node_modules/cucumber-pretty', '--format', 'json:reports/cucumber.json', './tests/admintool/features/.']
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  page_objects_path: 'page_objects',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: 'log/',
    host: '127.0.0.1',
    port: 4444
  },
  // test_workers:{
  //   enabled : true,
  //   workers : "auto"
  // },
  test_settings: {
    end_session_on_fail : false,
    skip_testcases_on_fail : false,

    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      end_session_on_fail : false,
    skip_testcases_on_fail : false,
    screenshots : {
          enabled : true,
          on_failure : true,
          on_error : true,
          path : "reports/screenshots"
    },

      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['incognito', '--disable-infobars', 'start-fullscreen']
        }
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    } 
  }
};
