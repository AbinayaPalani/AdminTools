const {
    client
} = require('nightwatch-api');
const {
    Given,
    Then,
    When
} = require('cucumber');
var config = require('../nightwatch.conf.js');


// Scenario: Login page and fetch the account # features/Login.feature:12


Given('I open the page in CWA with {string} and {string}', function (string, string2) {

     return client.url('https://staging.access.answerconnect.com/')
                .waitForElementVisible("body[id='brand-answerconnectuk']",1000000)
                .waitForElementVisible('input[name="email"]')
                .setValue('input[name="email"]', string)
                .waitForElementVisible('input[name="password"]')
                .setValue('input[name="password"]', string2)
                .waitForElementVisible('button[class="button-primary "]')
                .click('button[class="button-primary "]')
                .waitForElementVisible('#fetchAccountInput',10000000)
                .setValue('#fetchAccountInput',['7011011030',client.Keys.ENTER])
                .keys(client.Keys.ENTER);
   
            
    
});



When('fetch the account details in CWA', function () {

    
    console.log("Am here");

    // return client.url(function(result){
    //     console.log("Test "+ result.value);
    // });   

    //  return client
    //         .waitForElementVisible('#fetchAccountInput',10000000)
    //         .setValue('#fetchAccountInput',['7011011030',client.Keys.ENTER])
    //         .keys(client.Keys.ENTER);

    // console.log("Stopped");
           
                   
            
            
});


Then('select the billing page in CWA', function () {


      return client
             .waitForElementVisible('ul[id="search_Result"] li',50000)
            .click('ul[id="search_Result"] li')
            .waitForElementVisible('li[id="billing"]',50000)
            .click('li[id="billing"]');
            

    
});



Then('click the Admin Tool section', function () {

     return client
             .waitForElementVisible('button[class="nostyle admin-tool-btn"]',8000)
             .click('button[class="nostyle admin-tool-btn"]');

});