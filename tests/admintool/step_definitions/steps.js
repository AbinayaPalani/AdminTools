var config = require('../../../nightwatch.conf.js');
var assert = require('assert');
 const { client } = require('nightwatch-cucumber');
 const { Given, Then, When, Before } = require('cucumber');
 var driver = client.page.AccountDetailsPage();
 var request = require('request');
 const chai = require('chai');
 const expect = chai.expect;
 var headers = {
  'User-Agent':       'Super Agent/0.0.1',
  'Content-Type':     'application/x-www-form-urlencoded'
}

var urlName = 'http://staging.jbilling.a-cti.com:8081';

Given('I open the admin tool page {string} and {string}', function (string, string2) {
    return client.url(urlName+'/admintool?accountPin='+string+'&brandId='+string2+'')
                 .waitForElementVisible('body', 1000);
});
Then('validate the {string} in header', function (_string) {
  return driver.getText('@AccountDetailHeader', function(result){
           console.log(result.value);
           this.assert.equal(_string,result.value,"Account Details text is not matching in UI, else there is a problem in it");
   });

});

When('hit the getUserByAccountPin service then get the data with {string} and {string}', function (string, string2) {
  
  return request(urlName+'/v1/getUserByAccountPin/accountPin/'+string+'/brandId/'+string2, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }

    console.log("-----------------------------****************----------------------------");
    console.log(res.body);
    var stringfyJson = JSON.stringify(res.body);
    var getUserByAccountPinResJson = JSON.parse(stringfyJson);



    var userInfo = getUserByAccountPinResJson['user'];

    if(userInfo['status'] !== null){

      //assert.deepStrictEqual(,userInfo['communicationAddress']['Statement Name 1'],"Not showing the proper company name")

    }
    else{
      //assert.deepStrictEqual(,userInfo['communicationAddress']['Statement Name 1'],"Not showing the proper company name")

    }

   console.log(driver.getText('@CompanyNameValue'));

    if(userInfo['communicationAddress']['Statement Name 1'] !== null){

      //assert.deepStrictEqual(,userInfo['communicationAddress']['Statement Name 1'],"Not showing the proper company name")

    }
    else{
      //assert.deepStrictEqual(,userInfo['communicationAddress']['Statement Name 1'],"Not showing the proper company name")

    }

    if(userInfo['accountInfo']['Industry'] !== null){


    }
    else{

    }

    if(userInfo['primaryDetails']['primaryAccountNumber'] !== null){


    }


   
    

    console.log("-----------------------------****************----------------------------");

  });

});

When('Through the response data to validate in account details', function () {
 
});

