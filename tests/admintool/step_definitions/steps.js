var config = require('../../../nightwatch.conf.js');
 const { client } = require('nightwatch-cucumber');
 const { Given, Then, When } = require('cucumber');
 var driver = client.page.AccountDetailsPage();
 const chai = require('chai');
 const expect = chai.expect;

  Given('I open the admin tool page', function () {

    //return client.url("http://www.google.com");
    
    console.log(driver);

     return driver.navigate().waitForElementVisible('@body', 1000);

    
  });

  Then('validate the {string} in header', function (_string) {

    return expect(driver.findElement('@AccountDetailHeader').getAttribute('value')).to.eventually.equal('Account Details');
  });
  When('hit the getUserByAccountPin service then get the data', function () {
    
  });

  When('Through the response data to validate in account details', function () {
    
  });
