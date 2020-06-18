
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
         || fromStatusValue.value === 'Active | Notice to Block' | fromStatusValue.value === 'Active | Unpaid'){
   // client.assert.containsText('#accountStatus','Active');

    client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');

    client.pause(1000).click('ul#userStatusList li:nth-child(2) a#delayBilling');


    // client.elements('css selector',"ul#userStatusList li", (listOfStatusSizeResult) => {

    //     console.log("count of the list "+listOfStatusSizeResult.value.length);

    //     for(listOfStatus = 1; listOfStatus < listOfStatusSizeResult.value.length; listOfStatus++){
            
    //          client.waitForElementVisible('ul#userStatusList li:nth-child('+listOfStatus+') a').pause(2000).getText('css selector','ul#userStatusList li:nth-child('+listOfStatus+') a',function(result){



    //              if(result.value === "Delay Billing"){

    //                 console.log("Delay billing get confirmed");

    //                 //client.moveToElement('ul#userStatusList li:nth-child('+listOfStatus+') a',1,1).doubleClick();
    //                 client.pause(1000).click('ul#userStatusList li:nth-child('+listOfStatus+') a#delayBilling');
    //              }

    //         });
    //      }

    //  });

  

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
    
return client.assert.containsText('h4#popupHeader','Delay Billing').getLocationInView("button#formSubmit.submit_btn").pause(1000).assert.visible('#formClear').click('#formClear');
    
});


// Scenario: Return to service from the DELAY-BILLING






Then('get the current status in account status, it should be Active - Delay Billing', function () {


    return client.waitForElementVisible('div#accountStatusContainer > input#accountStatus',3000).assert.valueContains('div#accountStatusContainer > input#accountStatus','Active | Delay Billing');

  
});


Then('select the option of return to service in change status to', function () {
    
    return client.waitForElementVisible('button#accountStatusButton > span#accountStatusChange',3000).pause(1000).click('button#accountStatusButton > span#accountStatusChange').assert.visible('ul#userStatusList > li:nth-child(1) a#returnToService').click('ul#userStatusList > li:nth-child(1) a#returnToService');

    // var listOfStatusSize = client.elements('css selector',"ul#userStatusList li", listOfStatusSizeResult => {

    //     for(listOfStatus = 1; listOfStatus <=  listOfStatusSizeResult.value.length; ++listOfStatus){
            
    //         client.waitForElementVisible('ul#userStatusList li:nth-child('+listOfStatus+') a').getText('css selector','ul#userStatusList > li:nth-child('+listOfStatus+') a',function(result){

    //             if(result === "returnToService"){

    //                 client.click('ul#userStatusList > li:nth-child('+listOfStatus+') a');

    //             }

    //         });
    //     }

    // })
});


Then('pass some data in notes for return to serivce from delay billing to Active', function () {
    
    return client.setValue('div#popupDescriptionDiv textarea#popupDescription', 'Testing the returning to serivce via admintool from delay billing');

});


Then('submit the process', function () {

    return client
    .assert.visible('#formSubmit').pause(2000).click("button[id='formSubmit']")
    .waitForElementVisible('#notification',50000)
    .getText("p[id='notification']", function(notificationResult){
        console.log("Notification message : "+notificationResult.value);
       
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
                .setValue('input#popupDate',"27062020").setValue('textarea#popupDescription','Testing moving to delay billing through automation');
           

        }
        else
        {
             client.assert.visible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn')
                .setValue('textarea#popupDescription','Testing moving to delay billing through automation');
             
        }

    });
   
    
    
});


// Scenario: check the clear funcationality in DORMANCY 

// Scenario: check the alert for continue in DORMANCY 


Then("get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the Dormancy option", function () {
    
    let fromStatusValue;
   return client.getValue("input[id='accountStatus']", function(fromStatusValue){
       fromStatusValue = fromStatusValue.value;
  
   if(fromStatusValue === "Active" || fromStatusValue === 'Active | Past Due' 
        || fromStatusValue === 'Active | Notice to Block' | fromStatusValue === 'Active | Unpaid'){
    client.assert.containsText('#accountStatus','Active');

    client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');

    var listOfStatusSize = client.elements('css selector',"ul#userStatusList li", listOfStatusSizeResult => {

        for(listOfStatus = 1; listOfStatus <=  listOfStatusSizeResult.value.length; ++listOfStatus){
            
            client.waitForElementVisible('ul#userStatusList li:nth-child('+listOfStatus+') a').getText('css selector','ul#userStatusList li:nth-child('+listOfStatus+') a',function(result){

                if(result === "Dormancy"){

                    client.click('ul#userStatusList li:nth-child('+listOfStatus+') a');

                }

            });
        }

    })
}});

  
    
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

    return client.waitForElementVisible('div#popupDescriptionDiv textarea#popupDescription').setValue('div#popupDescriptionDiv textarea#popupDescription', 'A customer move to block due to unpaid invoice');
    
    
});

// Scenario: check the clear funcationality in BLOCK ACCOUNT


// Scenario: check the alert for continue in BLOCK ACCOUNT 

Then('move to refund page', function () {
    
    
});



When('validate moved to choosen refund section', function () {
    
    
});


// Scenario: check the alert for cancel in BLOCK ACCOUNT 


Then('get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the Block option', function () {
    
    
    
});

When('validate it should stay in same section with that changes - Block Account', function () {
    
    
});


// Scenario: Moving to UNBLOCK ACCOUNT state 


Then('select the option of Unblock Account in change status to', function () {

    return client.waitForElementVisible("button[id='accountStatusButton']").click("ul[id='userStatusList'] li a[id='unblock']");
    
    
});

// Scenario: check the clear funcationality in UNBLOCK ACCOUNT 
Then('get the current status in account status, it should be Notice to Block or Block for Non Payment status - {string}', function (string) {

    return client.waitForElementVisible("input[id='accountStatus']").assert.containsText("input[id='accountStatus']",'Active | Blocked for Non-Payment');
    
    
    
});

When('pass the notes to moving to Unblock status', function () {

    return client.waitForElementVisible("textarea[id='popupDescription']").setValue("textarea[id='popupDescription']","Return the customer to active");
    
    
});



//Cancellation Case:


Then('Select the option of cancellation  in change status to', function(){

    return client.waitForElementVisible("ul[id='userStatusList'] li a[id='cancelAccount']").click("ul[id='userStatusList'] li a[id='cancelAccount']");

});

When('pass the needed information to move to cancellation', function(){

    return client.waitForElementVisible("input[id='popupName']").setValue("input[id='popupName']","Abinaya")
    .setValue("input[id='popupNumber']","9839483831").setValue("popupEmail","abinaya.palani@anywhere.co");

});


Then('choose the reason to move for cancellation', function(){
        
    var randomReasonList;
    return client.getLocationInView("span#popupCancellationReason").pause(1000).assert.visible('span#popupCancellationReason').click('span#popupCancellationReason').elements("css selector","div.dropdownmenu.bottom ul#cancellationReasonList li", function(reasonList){
        console.log("Reason List for Credit Page "+reasonList.value.length);
        randomReasonList = Math.floor((Math.random() * reasonList.value.length) + 1);
        console.log("Random number to pick the reason from the list"+randomReasonList);

        if(randomReasonList === 10){
            return client.getLocationInView('ul#cancellationReasonList li:nth-child('+randomReasonList+') a').pause(500).assert.visible('ul#cancellationReasonList li:nth-child('+randomReasonList+') a').click('ul#cancellationReasonList li:nth-child('+randomReasonList+') a')
            .setValue('textarea#cancelReason',"Testing the cancellation in the admin tool..!");
        }
        else
        {
            return client.getLocationInView('ul#cancellationReasonList li:nth-child('+randomReasonList+') a').pause(500).assert.visible('ul#cancellationReasonList li:nth-child('+randomReasonList+') a').click('ul#cancellationReasonList li:nth-child('+randomReasonList+') a');
        }

    })


})
// Scenario: Stop Cancellation

    Then('Select the option of stopCancellation  in change status to', function(){

        return client.waitForElementVisible("ul[id='userStatusList'] li a[id='stopCancellation']").click("ul[id='userStatusList'] li a[id='stopCancellation']");
        

    });
    

    When("pass the neeeded information for stop cancellation", function(){

        return client. waitForElementVisible('textarea#popupDescription').setValue('textarea#popupDescription','Return back to active through stop cancellation option');

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
