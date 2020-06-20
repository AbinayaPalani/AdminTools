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

     client.url('https://staging.access.answerconnect.com/')
                .waitForElementVisible('body',1000000)
                .setValue('input[name="email"]', string)
                .setValue('input[name="password"]', string2)
                .click('button[class="button-primary "]');
            
    
});



When('fetch the account details in CWA', function () {

    
    console.log("Am here");

    client.url(function(result){
        console.log("Test "+ result.value);
    });   

     client
            .waitForElementVisible('#fetchAccountInput',10000000)
            .setValue('#fetchAccountInput',['7011011030',client.Keys.ENTER])
            .keys(client.Keys.ENTER);

    console.log("Stopped");
           
                   
            
            
});


Then('select the billing page in CWA', function () {


     client
             .waitForElementVisible('ul[id="search_Result"] li',50000)
            .click('ul[id="search_Result"] li')
            .waitForElementVisible('li[id="billing"]',50000)
            .click('li[id="billing"]');
            

    
});



Then('click the Admin Tool section', function () {

     client
             .waitForElementVisible('button[class="nostyle admin-tool-btn"]',8000)
             .click('button[class="nostyle admin-tool-btn"]');

});