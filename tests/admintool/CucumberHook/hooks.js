const { Before, After } = require('cucumber');
const { client } = require('nightwatch-cucumber');

Before(() => new Promise(resolve => {
  console.log('Before start');

   // return client.init().url('http://staging.jbilling.a-cti.com:8081/admintool?accountPin=55e6a223-fb4d-49c6-be21-e447c1f5fc44&brandId=5a6e67a6-8bfd-45f5-a774-3462cb0c4e4c').waitForElementVisible('body', 1000);

  setTimeout(() => {
    console.log('Before end');
    resolve();
  }, 1000);
}));

After(() => new Promise(resolve => {

  client.url("/Users/abinaya/Desktop/NightWatch/reports/cucumber_report.html");

  client
     .end()
     .perform(function() {
       done();
    });
  console.log('After start');
  setTimeout(() => {
    console.log('After end');
    resolve();
  }, 1000);
}));
