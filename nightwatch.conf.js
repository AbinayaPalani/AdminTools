const seleniumServer = require('selenium-server-standalone-jar');
const chromeDriver = require('chromedriver');
const SCREENSHOT_PATH = "./screenshots/";

// const geckoDriver = require('geckodriver');
// const ieDriver = require('iedriver');
// const edgeDriver = require('edgedriver');

module.exports = {
  src_folders: ["./step-definitions"],
  output_folder: './reports',
  custom_commands_path: '',
  page_objects_path: '',
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    host: '127.0.0.1',
    port: 8080,
    cli_args: {
      "webdriver.chrome.driver" : chromeDriver.path,
      //"webdriver.gecko.driver" : geckoDriver.path
      //"webdriver.ie.driver" : ieDriver.path,
      //"webdriver.edge.driver" : edgeDriver.path
    }
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['disable-infobars','start-fullscreen','disable-notifications']
        }
      },
        screenshots: {
          enabled: true, // if you want to keep screenshots
          on_failure: true,
          on_error:false,
          path: './screenshots' // save screenshots here
        },
        globals: {
          waitForConditionTimeout: 50000 // sometimes internet is slow so wait.
        }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['disable-infobars']
        }
      }
    // },
    // firefox: {
    //   desiredCapabilities: {
    //     browserName: 'firefox',
    //     javascriptEnabled: true,
    //     acceptSslCerts: true,
    //     marionette: true
    //   }
    // },
    // edge: {
    //   desiredCapabilities: {
    //     browserName: 'MicrosoftEdge',
    //     javascriptEnabled: true,
    //   }
    // },
    // ie: {
    //   desiredCapabilities: {
    //     browserName: 'internet explorer',
    //     javascriptEnabled: true,
    //   }
    }
  }
};

function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count.toString();
}

var FILECOUNT = 0; // "global" screenshot file count
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath (browser) {
  var a = browser.options.desiredCapabilities;
  var meta = [a.platform];
  meta.push(a.browserName ? a.browserName : 'any');
  meta.push(a.version ? a.version : 'any');
  meta.push(a.name); // this is the test filename so always exists.
  var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
  return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;