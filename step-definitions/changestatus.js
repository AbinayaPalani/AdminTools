const {
    client
} = require('nightwatch-api');
const {
    Given,
    Then,
    When
} = require('cucumber');

// Scenario: Moving to DELAY-BILLING state

When('select the status change', function () {


});

Then('get the current status in an account status, it should be Active or Dormancy status - {string}', function (string) {

});

Then('select the option of delay billing in change status to', function () {

});

When('pass relevant data', function () {

});



Then('validate the status in account detail - {string}', function (string) {

});

// Scenario: check the clear funcationality in DELAY-BILLING 



Then('clear the process', function () {
    
    
});


// Scenario: check the alert for continue in DELAY-BILLING 




When('pass some data over there', function () {
    
    
});


Then('move to credit page', function () {
    
    
});

When('validate moved to choosen credit section', function () {
    
    
});


// Scenario: check the alert for cancel in DELAY-BILLING 

When('validate it should stay in same section with that changes - delay billing', function () {
    
    
});


// Scenario: Return to service from the DELAY-BILLING




Then('get the current status in account statuss, it should be Active - Delay Billing  - {string}', function (string) {
    
    
});


Then('select the option of return to service in change status to', function () {
    
    
});


Then('pass some data in notes for return to serivce from delay billing to Active', function () {
    
    
});


Then('submit the process', function () {
    
    
});



Then('check the status in account detail - {string}', function (string) {
    
    
});


// Scenario: Checking the clear functionality Return to Service 

// Scenario: Moving to DORMANCY state

Then('select the option of Dormancy in change status to', function () {
    
    
});


When('select the period and pass note', function () {
    
    
});


// Scenario: check the clear funcationality in DORMANCY 

// Scenario: check the alert for continue in DORMANCY 


Then('get the current status in account status, it should be Active status - {string}', function (string) {
    
    
});

When('select the needed data', function () {
    
    
});



Then('move to debit page', function () {
    
    
});


When('validate moved to choosen debit section', function () {
    
    
});


// Scenario: check the alert for cancel in DORMANCY 


Then('get the current status in an account status, it should be Active status - {string}', function (string) {
    
    
});

When('validate it should stay in same section with that changes - Dormancy', function () {
    
    
});


// Scenario: Moving to BLOCK ACCOUNT state



Then('get the current status in account status, it should be Active or Dormancy or Delay Billing or Notice to Block status - {string}', function (string) {
    
    
});



Then('select the option of Block Account in change status to', function () {
    
    
});



When('pass the notes to moving to block status', function () {
    
    
});

// Scenario: check the clear funcationality in BLOCK ACCOUNT


// Scenario: check the alert for continue in BLOCK ACCOUNT 

Then('move to refund page', function () {
    
    
});



When('validate moved to choosen refund section', function () {
    
    
});


// Scenario: check the alert for cancel in BLOCK ACCOUNT 


Then('get the current status in an account status, it should be Active or Dormancy or Delay Billing or Notice to Block status - {string}', function (string) {
    
    
});

When('validate it should stay in same section with that changes - Block Account', function () {
    
    
});


// Scenario: Moving to UNBLOCK ACCOUNT state 


Then('select the option of Unblock Account in change status to', function () {
    
    
});

// Scenario: check the clear funcationality in UNBLOCK ACCOUNT 
Then('get the current status in account status, it should be Notice to Block or Block for Non Payment status - {string}', function (string) {
    
    
});

When('pass the notes to moving to Unblock status', function () {
    
    
});


// Scenario: check the alert for continue in UNBLOCK ACCOUNT 

When('pass the notes', function () {
    
    
});

Then('move to rerate page', function () {
    
    
});




When('validate moved to choosen rerate section', function () {
    
    
});


// Scenario: check the alert for cancel in UNBLOCK ACCOUNT 


Then('get the current status in an account status, it should be Notice to Block or Block for Non Payment status - {string}', function (string) {
    
    
});


When('validate it should stay in same section with that changes - Unblock Account', function () {
    
    
});


// Scenario: Moving to Active through return to service 
