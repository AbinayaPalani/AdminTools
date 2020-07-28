const {
    client
} = require('nightwatch-api');
const {
    Given,
    Then,
    When
} = require('cucumber');

var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style


// Scenario: Moving to DELAY-BILLING state

When('select the status change', function () {

    return client.frame('adminTool')
                .assert.visible('#changeStatus').click('#changeStatus');


});

Then('get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the delay billing option', function() {
    let fromStatusValue;
   return client.pause(2000).getValue("input[id='accountStatus']", function(fromStatusValue){

   
       //fromStatusValue = fromStatusValue.value;
       console.log("Get the status value from the ui 2 "+fromStatusValue.value);

       //client.
  
    if(fromStatusValue.value === "Active" || fromStatusValue.value === 'Active | Past Due' 
         || fromStatusValue.value === 'Active | Notice to Block' || fromStatusValue.value === 'Active | Unpaid'){

    client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');

    client.pause(2000).click('a#delayBilling.userStatuses').pause(2000);

 }
   
});

});


// When('pass relevant data', function () {

//     var randomDatePicker;
//      client.elements("css selector","ul#datePeriod li button", function(datePicker){
//         console.log("DatePicker length "+datePicker.value.length);
//         var datePicker = datePicker.value.length;
//         randomDatePicker = Math.floor((Math.random() * datePicker) + 1);
//         console.log("choose the random date picker "+randomDatePicker);
//         randomDatePicker = 6;
//         var isDone = false;
// for(randomDatePicker = randomDatePicker; randomDatePicker = randomDatePicker; randomDatePicker++ ){
//         if(randomDatePicker === 6){
//             var customDateValue = new Date();
//             var currentDate = customDateValue.getDate()+10;
//             var currentMonth;
//             if(currentDate.length === 1){
//                 currentDate = '0'+currentDate;
//             }
//             if(currentDate >= 20 && currentDate <=20){
//                  currentMonth = customDateValue.getMonth();
//             }
//             else{
//                 currentMonth = customDateValue.getMonth() + 1;
//             }
//             if(currentMonth < 10){
//                 currentMonth = '0'+currentMonth;
//             }
//             if(currentMonth >= 12){
//                 var currentYear = customDateValue.getFullYear()+1;

//             }
//             var currentYear = customDateValue.getFullYear();

//             console.log(currentMonth.length);
//             console.log(currentDate+' '+currentMonth+' '+currentYear);

//             console.log("#datePeriodDiv ul#datePeriod.datePeriods li:nth-child(4).datePeriod button")

//             return client.waitForElementVisible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button')
//                 .setValue('input#popupDate.validate_blur',currentDate+''+currentMonth+''+currentYear).setValue('textarea#popupDescription','Testing moving to delay billing through automation');
//               break;
//         }
  

//     else{

//             return client.waitForElementVisible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button')
//             .setValue('textarea#popupDescription','Testing moving to delay billing through automation');

//         break;
            
//         }
//     }

//     });

    

// });



Then('validate the status in account detail - {string}', function (string) {

    return client.pause(3000).waitForElementVisible("input[id='userStatus']",1000).getValue("input[id='userStatus']", function(resultStatus){


        console.log('status'+resultStatus.value);
        console.log(string);
        client.assert.valueContains("input[id='userStatus']", string);
    })
});

// Scenario: check the clear funcationality in DELAY-BILLING 



Then('clear the process', function () {
    
    return client.click("button[id='formClear']");
    
});


// Scenario: check the alert for continue in DELAY-BILLING 




When('pass some data over there', function () {
    
    
});


Then('move to credit page', function () {
    
    return client.waitForElementVisible('a#credit',1000).click('a#credit');
    
});

When('validate moved to choosen credit section', function () {
    
    return client.waitForElementVisible('div h4#popupHeader',3000).getText('div h4#popupHeader', function(creditResult){

        console.log("validate moved to choosen credit section "+creditResult.value);

         client.assert.containsText('div h4#popupHeader',creditResult.value);
    });
});


// Scenario: check the alert for cancel in DELAY-BILLING 
// When('check the alert for cancel', function(){

//     return client.waitForElementVisible('div#alert-container > div > h3',1000).click('div#buttonWrapper > button#stayOnPage');

// });

When('validate it should stay in same section with that changes - delay billing and clear the info', function () {
    
return client.assert.containsText('h4#popupHeader','Delay Billing').getLocationInView("button#formSubmit.submit_btn").pause(1000).assert.visible('#formClear').click('#formClear').pause(3000);
    
});


// Scenario: Return to service from the DELAY-BILLING






Then('get the current status in account status, it should be Active - Delay Billing', function () {


    return client.waitForElementVisible('div#accountStatusContainer > input#accountStatus',3000).assert.valueContains('div#accountStatusContainer > input#accountStatus','Active | Delay Billing');

  
});


Then('select the option of return to service in change status to', function () {
    
    return client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000)
    .pause(1000).click('button#accountStatusButton span#accountStatusChange')
    .assert.visible('a#returnToService.userStatuses')
    .click('a#returnToService.userStatuses');

   
});


Then('pass some data in notes for return to serivce from delay billing to Active', function () {
    
    return client.setValue('div#popupDescriptionDiv textarea#popupDescription', 'Testing the returning to serivce via admintool from delay billing');

});


Then('submit the process', function () {

    return client
    .getLocationInView("button#formSubmit.submit_btn").
    pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);

    
});



Then('get the current status in account status, it should be Active | Dormancy', function () {

    let fromStatusValue;
    return client.pause(2000).getValue("input[id='accountStatus']", function(fromStatusValue){
 
    
        //fromStatusValue = fromStatusValue.value;
        console.log("Get the status value from the ui 2 "+fromStatusValue.value);
 
        //client.
   
     if(fromStatusValue.value === "Active" || fromStatusValue.value === 'Active | Past Due' 
          || fromStatusValue.value === 'Active | Notice to Block' || fromStatusValue.value === 'Active | Unpaid'
        || fromStatusValue.value === 'Active | Dormancy' ){
 
     client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');
  
  }
    
 });

   
  });

// When('check the alert for continue', function(){

//     return client.waitForElementVisible('div#alert-container > div > h3',1000).click('div#buttonWrapper > button#moveToPage');

// });



Then('check the status in account detail - {string}', function (string) {

    return client.pause(3000).waitForElementVisible('#userStatus',1000).getValue('#userStatus', function(resultStatus){


        console.log('status'+resultStatus.value);
        console.log(string);
        client.assert.valueContains("#userStatus", string);
    });
    
    
});


// Scenario: Checking the clear functionality Return to Service 

// Scenario: Moving to DORMANCY state



When('select the period and pass note', function () {

    var randomDatePicker,datePickerValue;

   

    return client.elements("css selector","ul#datePeriod li button", function(datePicker){
        console.log("DatePicker length"+datePicker.value.length);
        datePickerValue = datePicker.value.length;
        console.log(datePicker);
        randomDatePicker = Math.floor((Math.random() * datePickerValue) + 1);
        console.log("choose the random date picker"+randomDatePicker);
  
  
          
        if(randomDatePicker === 6){
            // var customDateValue = new Date();
            // var currentDate = customDateValue.getDate()+10;
            // if(currentDate >= 20 && currentDate <=20){
            //     var currentMonth = customDateValue.getMonth();
            // }
            // else{
            //     var currentMonth = customDateValue.getMonth() + 1;
            // }
            // if(currentMonth >= 12){
            //     var currentYear = customDateValue.getFullYear()+1;

            // } else{
            // var currentYear = customDateValue.getFullYear();
            // }


             client.assert.visible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn')
                .setValue('input#popupDate',"27072020").setValue('textarea#popupDescription','Testing the admintool on nightwatch js');
           

        }
        else
        {
             client.assert.visible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn')
                .setValue('textarea#popupDescription','Testing the admintool on nightwatch js');
             
        }

    });
   
    
    
});


// Scenario: check the clear funcationality in DORMANCY 

// Scenario: check the alert for continue in DORMANCY 


Then("get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the Dormancy option", function () {
    


    let fromStatusValue;
    return client.pause(2000).getValue("input[id='accountStatus']", function(fromStatusValue){
 
    
        //fromStatusValue = fromStatusValue.value;
        console.log("Get the status value from the ui 2 "+fromStatusValue.value);
 
        //client.
   
     if(fromStatusValue.value === "Active" || fromStatusValue.value === 'Active | Past Due' 
          || fromStatusValue.value === 'Active | Notice to Block' | fromStatusValue.value === 'Active | Unpaid'){
 
     client.pause(1000).waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');
 
     client.pause(2000).click('a#dormancy.userStatuses').pause(2000);
 
  }
    
 });

//     let fromStatusValue;
//    return client.getValue("input[id='accountStatus']", function(fromStatusValue){
//        fromStatusValue = fromStatusValue.value; 
//    if(fromStatusValue === "Active" || fromStatusValue === 'Active | Past Due' 
//         || fromStatusValue === 'Active | Notice to Block' | fromStatusValue === 'Active | Unpaid'){
//     client.assert.containsText('#accountStatus','Active');

//     client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');

//     var listOfStatusSize = client.elements('css selector',"ul#userStatusList li", listOfStatusSizeResult => {

//         for(listOfStatus = 1; listOfStatus <=  listOfStatusSizeResult.value.length; ++listOfStatus){
            
//             client.waitForElementVisible('ul#userStatusList li:nth-child('+listOfStatus+') a').getText('css selector','ul#userStatusList li:nth-child('+listOfStatus+') a',function(result){

//                 if(result === "Dormancy"){

//                     client.click('ul#userStatusList li:nth-child('+listOfStatus+') a');

//                 }

//             });
//         }

//     })


  
    
});

When('select the needed data', function () {
    
    
});



Then('move to debit page', function () {

    return client.waitForElementVisible('li#debit_li > a#debit',2000).click('li#debit_li > a#debit');
    
    
});


When('validate moved to choosen debit section', function () {
    
    return client.waitForElementVisible('div > h4#popupHeader',3000).getText('div > h4#popupHeader', function(creditResult){

        return client.assert.valueContains('div > h4#popupHeader',creditResult);
    });

});


// Scenario: check the alert for cancel in DORMANCY 



Then('pass some data in notes for return to serivce from dormancy to Active', function () {

    return client.waitForElementVisible('div#popupDescriptionDiv textarea#popupDescription').setValue('div#popupDescriptionDiv textarea#popupDescription', 'Testing the returning to serivce via admintool from Dormancy');
    
});


Then('get the current status in an account status, it should be Active status - {string}', function (string) {
    
    
});

When('validate it should stay in same Dormancy section', function () {
    
    return client.assert.visible('h4#popupHeader').getText('h4#popupHeader', function(dormancyHeader){

        client.valueContains('h4#popupHeader','Dormancy');

    });

});


// Scenario: Moving to BLOCK ACCOUNT state



Then('get the current status in account status, it should be Active or Dormancy or Delay Billing or Notice to Block status - {string}', function (string) {
    

    
});



Then('select the option of Block Account in change status to', function () {
    
    
});



When('pass the notes to moving to block status', function () {

    return client.pause(2000).waitForElementVisible('div#popupDescriptionDiv textarea#popupDescription').setValue('div#popupDescriptionDiv textarea#popupDescription', 'A customer move to block due to unpaid invoice');
    
    
});

// Scenario: check the clear funcationality in BLOCK ACCOUNT


// Scenario: check the alert for continue in BLOCK ACCOUNT 

Then('move to refund page', function () {
    
    
});



When('validate moved to choosen refund section', function () {
    
    
});


// Scenario: check the alert for cancel in BLOCK ACCOUNT 


Then('get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the Block option', function () {
    
    let fromStatusValue;
    return client.pause(2000).getValue("input[id='accountStatus']", function(fromStatusValue){
 
    
        //fromStatusValue = fromStatusValue.value;
        console.log("Get the status value from the ui 2 "+fromStatusValue.value);
 
        //client.
   
     if(fromStatusValue.value === "Active" || fromStatusValue.value === 'Active | Past Due' 
          || fromStatusValue.value === 'Active | Notice to Block' || fromStatusValue.value === 'Active | Unpaid'
        || fromStatusValue.value === "Active | Dormancy" || fromStatusValue.value === 'Active | Delay Billing'){
 
     client.pause(1000).waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');
 
     client.pause(2000).click('a#blockAccount.userStatuses').pause(2000);
 
  }
});

    
    
});

When('validate it should stay in same section with that changes - Block Account', function () {
    
    
});


// Scenario: Moving to UNBLOCK ACCOUNT state 


Then('select the option of Unblock Account in change status to', function () {

    return client.waitForElementVisible("button[id='accountStatusButton']").click("a#unblock.userStatuses");
    
    
});

// Scenario: check the clear funcationality in UNBLOCK ACCOUNT 
Then('get the current status in account status, it should be Notice to Block or Block for Non Payment status', function () {

    return client.pause(2000).waitForElementVisible("input[id='accountStatus']")
        .assert.visible('button#accountStatusButton span#accountStatusChange')
        .click('button#accountStatusButton span#accountStatusChange');
        
    
    
    
});

When('pass the notes to moving to Unblock status', function () {

    return client.waitForElementVisible("textarea[id='popupDescription']").setValue("textarea[id='popupDescription']","Return the customer to active");
    
    
});



//Cancellation Case:


Then('Select the option of cancellation  in change status to', function(){

    return client.pause(2000).click('button#accountStatusButton').waitForElementVisible("a#cancelAccount.userStatuses").click("a#cancelAccount.userStatuses");

});

When('pass the needed information to move to cancellation', function(){

    return client.waitForElementVisible("input[id='popupName']").setValue("input[id='popupName']","Abinaya")
    .setValue("input[id='popupNumber']","9839483831")
    .setValue("#popupEmail","abinaya.palani@anywhere.co")
    .setValue('div#popupDescriptionDiv textarea#popupDescription', 'Testing the cancellation on nightwatch js');

});


Then('choose the reason to move for cancellation', function(){
        
    var randomReasonList;
    return client.pause(1000).getLocationInView("span#popupCancellationReason").pause(2000).assert.visible('span#popupCancellationReason').click('span#popupCancellationReason').elements("css selector","div.dropdownmenu.bottom ul#cancellationReasonList li", function(reasonList){
        console.log("Reason List for Credit Page "+reasonList.value.length);
        randomReasonList = Math.floor((Math.random() * reasonList.value.length) + 1);
        console.log("Random number to pick the reason from the list"+randomReasonList);

        if(randomReasonList === 10){
             client.pause(2000).getLocationInView('ul#cancellationReasonList li:nth-child('+randomReasonList+') a')
             .pause(2000).assert.visible('ul#cancellationReasonList li:nth-child('+randomReasonList+') a')
             .click('ul#cancellationReasonList li:nth-child('+randomReasonList+') a').pause(1000)
            .setValue('textarea#cancelReason',"Testing the cancellation in the admin tool..!");
        }
        else
        {
             client.pause(2000).getLocationInView('ul#cancellationReasonList li:nth-child('+randomReasonList+') a')
                .pause(2000).assert.visible('ul#cancellationReasonList li:nth-child('+randomReasonList+') a')
                .click('ul#cancellationReasonList li:nth-child('+randomReasonList+') a');
        }

    })


})
// Scenario: Stop Cancellation

    Then('Select the option of stopCancellation  in change status to', function(){

        return client.pause(2000).click('button#accountStatusButton').waitForElementVisible("a#stopCancellation.userStatuses").click("a#stopCancellation.userStatuses");
        
        

    });
    

    When("pass the neeeded information for stop cancellation", function(){

        return client.pause(1000).waitForElementVisible('textarea#popupDescription').setValue('textarea#popupDescription','Return back to active through stop cancellation option');

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

When('unblock the customer and validate that customer', function () {

    
    return client.pause(3000).waitForElementVisible('#userStatus',1000).getValue('#userStatus', function(resultStatus){
        
                var status = 'Active'
                console.log('status'+resultStatus.value);
                console.log(status);
                client.assert.valueContains("#userStatus", status);
            });
    
    
});


Then('validate in account Summary page', function () {
    
        
        return client.pause(3000).waitForElementVisible('#userStatus',1000).getValue('#userStatus', function(resultStatus){
            
                    var status = 'Cancelled | Customer Request'
                    console.log('status'+resultStatus.value);
                    console.log(status);
                    client.assert.valueContains("#userStatus", status);
                });
        
        
    });
    


Then('validate in account Summary page for stop cancellation', function () {
    
        
        return client.pause(3000).waitForElementVisible('#userStatus',1000).getValue('#userStatus', function(resultStatus){
            
                    var status = 'Active'
                    console.log('status'+resultStatus.value);
                    console.log(status);
                    client.assert.valueContains("#userStatus", status);
                });
        
        
    });


    Then('get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the low utilization option', function () {
        
            
        return client.pause(2000)
            .click('button#accountStatusButton')
            .waitForElementVisible("a#lowUtilizationPlan.userStatuses")
            .click("a#lowUtilizationPlan.userStatuses");
        
            
            
        });
    





    //Return to service step defintion


    Then('get the current status in an account status, it should be Cancellation | Dormancy | Return to service and then select the return to service', function () {
        
       return client.pause(2000)
                .click('button#accountStatusButton')
                .waitForElementVisible('a#returnToService.userStatuses')
                .click('a#returnToService.userStatuses');
            
    });
    


    Then('Assert the title of Return to service', function () {
        
    //    return client.pause(2000)
    //             .assert.valueContains("div.modal-header h4#popupHeader", "Return To Service");
         
    return client.pause(2000).expect.element('div.modal-header h4#popupHeader').text.to.equal('Return To Service');
            
    });

    Then('Choose the plan', function () {
        var randomReasonList;
        return client.pause(2000).getLocationInView('div#voicePlanContainer div div.plan-hd h6')
        .pause(2000).assert.visible('div#voicePlanContainer div div.plan-hd h6')
        .click('div#voicePlanContainer')
                .elements("css selector",'ul.plans-list#voicePlanList li', function(result){

                    var voicePlanList = result.value.length;
                    console.log("Voice plan size "+ voicePlanList);

                    randomReasonList = Math.floor((Math.random() * voicePlanList) + 1);
                    client.getLocationInView('ul.plans-list#voicePlanList li:nth-child('+randomReasonList+')').pause(3000)
                    .click('ul.plans-list#voicePlanList li:nth-child('+randomReasonList+')').pause(3000);
                    

                    //ul.plans-list#voicePlanList li:nth-child(81)

                });
    });


    Then('submit the plan choosen', function(){
        
            return client.getLocationInView("button#formSubmit.submit_btn").pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(2000);
        });
        

    Then('Select the asset and choose the primary asset and if he had adjustment pay the amount', function () {
        
        var randomAssetList;
     
        return client.pause(2000).click('button#addButton')
                        .elements("css selector",'ul#activeAssetListVoice li', function(result){

                            var assertList = result.value.length;
                            console.log("Voice plan size "+ assertList);
                            randomAssetList = Math.floor((Math.random() * assertList) + 1);

                            client.getLocationInView('ul#activeAssetListVoice li:nth-child('+randomAssetList+')').pause(500)
                                    .click('ul#activeAssetListVoice li:nth-child('+randomAssetList+')').pause(3000)
                                    .click('button#nextButton');

                            if( client.expect.element('button#payBtn').to.be.visible){

                                client.pause(3000).click('button#payBtn');
                                if(client.expect.element('li#existingCard').to.be.visible){

                                    client
                                    .getLocationInView("button#formSubmit.submit_btn").
                                    pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
                                

                                }

                                else{

                                    client.pause(1000).setValue('input#cardNumber', '4217651111111119')
                                            .setValue('input#cardName', 'Abinaya')
                                            .setValue('input#expiryMonth', '12')
                                            .setValue('input#expiryYear', '2021')
                                            .setValue('input#cvv', '331')
                                            .setValue('input#address', '10 SE Street')
                                            .setValue('div#countryDiv button#countryButton', 'United States')
                                            .setValue('input#state', 'Portland')
                                            .setValue('input#city', 'Oregon')
                                            .setValue('input#zip', '923211').pause(2000)
                                            .getLocationInView("button#formSubmit.submit_btn").
                                            pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
                                }

                            }
        });
            
    });


    Then('Return to service with reason', function () {
        
       return client.pause(2000).getLocationInView('textarea.validate_blur#notes')
                .setValue('textarea.validate_blur#notes', 'Return to service on automation process')
                .getLocationInView('button#returnToActiveButton')
                .click('button#returnToActiveButton').pause(20000);
                
            
    });



    //Then('Return to service with reason', function () {
        
    //    return client.pause(2000)
    //             .setValue('textarea.validate_blur#notes', 'Return to service on automation process')
    //             .click('button#returnToActiveButton').pause(10000);
                
            
    // });


    Then('validate the status in account detail', function () {
        
          
        return client.pause(3000).waitForElementVisible('#userStatus',1000).getValue('#userStatus', function(resultStatus){
            
                    var status = 'Active'
                    console.log('status'+resultStatus.value);
                    console.log(status);
                    client.assert.valueContains("#userStatus", status);
                });
        
            
    });