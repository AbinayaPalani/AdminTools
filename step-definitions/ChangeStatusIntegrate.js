const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');



Given('check the account status is in Active', function () {
    
    return client.frame('adminTool')
            .expect.element('#changeStatus')
            .text.to.equal('Change Status').pause(3000).click('#changeStatus');
        
    });

When('check change status to list to verify that list of status for active case', function () {
    
    let fromStatusValue;
    return client.pause(2000).getValue("input[id='accountStatus']", function(fromStatusValue){
        console.log("Get the status value from the ui 2 "+fromStatusValue.value);
        if(fromStatusValue.value === "Active" || fromStatusValue.value === 'Active | Past Due' 
          || fromStatusValue.value === 'Active | Notice to Block' || fromStatusValue.value === 'Active | Unpaid'){
 
                client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');
                client.pause(2000).click('a#delayBilling.userStatuses').pause(2000);
 
            }
    
        });
    });

Then('choose Delay billing status in Change Status To', function () {
        
        return client.pause(2000).click('a#delayBilling.userStatuses').pause(2000);
    });

Then('move the customer for delay billing and enter the fields', function () {
        
    var randomDatePicker,datePickerValue;
    
       
    
        return client.elements("css selector","ul#datePeriod li button", function(datePicker){
            console.log("DatePicker length"+datePicker.value.length);
            datePickerValue = datePicker.value.length;
            console.log(datePicker);
            randomDatePicker = Math.floor((Math.random() * datePickerValue) + 1);
            console.log("choose the random date picker"+randomDatePicker);              
            if(randomDatePicker === 6){   
                 client.assert.visible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn')
                    .setValue('input#popupDate',"27072020").setValue('textarea#popupDescription','Testing the admintool on nightwatch js');
            }
            else{
                 client.assert.visible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn')
                    .setValue('texwtarea#popupDescription','Testing the admintool on nightwatch js');  
            }
            client
            .getLocationInView("button#formSubmit.submit_btn")
            .pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
        });   
    });

Then('check the status in account summary, if in case failed in delay billing we will be in changes status and then it has to be created a task link in the top', function () {

        return client
                    .execute(function status(){
                        let element = document.getElementById('userStatus').value;
                        console.log("Status in"+ element);
                        if(element.length == 0 && element == ""){
                            console.log('Element is empty')
                        }
        },[]);
    });

Given('check the account status is in Delay billing', function () {
        
        return client
                    .expect.element('#changeStatus')
                    .text.to.equal('Change Status').pause(3000).click('#changeStatus');
       
    });

When('check changes status to list to verify that list of status for delay billing', function () {
        
        return client.waitForElementVisible('div#accountStatusContainer input#accountStatus',3000)
                    .assert.valueContains('div#accountStatusContainer input#accountStatus','Active | Delay Billing');
    });

Then('choose return to service in Change Status To', function () {
        
        return client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000)
                    .pause(1000).click('button#accountStatusButton span#accountStatusChange')
                    .assert.visible('a#returnToService.userStatuses')
                    .click('a#returnToService.userStatuses');
    });

Then('move the customer for delay billing to active and enter the fields', function () {
        
        return client
                    .pause(2000)
                    .setValue('div#popupDescriptionDiv textarea#popupDescription','Testing the returning to serivce via admintool from delay billing');
    
    });

Then('check the status in account summary, if in case failed in delay billing to active we will be in change status and then it has to be created a task link in the top', function () {
        
    return client
                .getLocationInView("button#formSubmit.submit_btn", function(){

                    client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
                    if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
                        console.log('Customer moved to Active: Test Case is passed');
                    }
                    else{
                        console.log('Customer doesnt moved to Active, some thing broke during move to active');
                    }
                })
    });

Given('check the account status is in Active', function () {
        
        if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
            client
                .expect.element('#changeStatus')
                .text.to.equal('Change Status').pause(3000).click('#changeStatus');    
        }
        else{
            console.log('Existing test case is failed, so that you are in same section');
        } 

    });

When('check change status to list to veriffy that list of status for active case', function () {
     
    let fromStatusValue;
    return client.pause(2000).getValue("input[id='accountStatus']", function(fromStatusValue){
        console.log("Get the status value from the ui 2 "+fromStatusValue.value);
        if(fromStatusValue.value === "Active" || fromStatusValue.value === 'Active | Past Due' 
          || fromStatusValue.value === 'Active | Notice to Block' | fromStatusValue.value === 'Active | Unpaid'){
            client.pause(1000).waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');
            client.pause(2000).click('a#dormancy.userStatuses').pause(2000);
          }
        });
    });

Then('choose dormancy status in Change Status To', function () {
        
    return client.pause(2000).click('a#dormancy.userStatuses').pause(2000);    
    });

Then('move the customer for dormancy and enter the fields', function () {
        
    return client.elements("css selector","ul#datePeriod li button", function(datePicker){
        console.log("DatePicker length"+datePicker.value.length);
        datePickerValue = datePicker.value.length;
        console.log(datePicker);
        randomDatePicker = Math.floor((Math.random() * datePickerValue) + 1);
        console.log("choose the random date picker"+randomDatePicker);      
        if(randomDatePicker === 6){
            client.assert.visible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn')
                .setValue('input#popupDate',"27072020").setValue('textarea#popupDescription','Testing the admintool for Dormancy');
        }
        else{
            client.assert.visible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn')
                .setValue('textarea#popupDescription','Testing the admintool for Dormancy');
             
        }
        });   
    });

Then('currently Dormancy will be holded for billing cycle end date, that we can check the note in account summary, if it is failed  it will be created a task in the top', function () {
        
    return client.pause(3000).getText('#popupDateInfoDiv #popupDateInfo', function(result){
            console.log("Dormancy note value : "+result.value);
            client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
            if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
                console.log('Customer moved to Dormancy and then it will be holded for billing cycle end date: Test Case is passed');
            }
            else{
                console.log('Customer doesnt moved to Dormancy, some thing broke during move to active');                
            }
        });
    
    });

Given('check the account status is in Active | Dormancy', function () {
        
        if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
            client
                .expect.element('#changeStatus')
                .text.to.equal('Change Status').pause(3000).click('#changeStatus');   
        }
        else{
            console.log('Existing test case is failed, so that you are in same section');            
        }          
    });

When('choose change status to list to verify that list of status for dormancy case', function () {
        
    let fromStatusValue;
    return client.pause(2000).getValue("input[id='accountStatus']", function(fromStatusValue){
        console.log("Get the status value from the ui 2 "+fromStatusValue.value);
        if(fromStatusValue.value === "Active" || fromStatusValue.value === 'Active | Past Due' 
            || fromStatusValue.value === 'Active | Notice to Block' || fromStatusValue.value === 'Active | Unpaid'
            || fromStatusValue.value === 'Active | Dormancy' ){
             client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');
            }
        });      
    });

Then('move the customer for stop dormancy and enter the fields', function () {
          
    return client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000)
                .pause(1000).click('button#accountStatusButton span#accountStatusChange')
                .assert.visible('a#stopDormancy.userStatuses')
                .click('a#stopDormancy.userStatuses')
                .setValue('textarea#popupDescription', 'Testing stop dormancy for admintool..!');
    });

Then('check the status in account summary, if in case failed in stop dormancy', function () {
        
    return client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
        if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
            console.log('Customer moved to Dormancy and then it will be holded for billing cycle end date: Test Case is passed');
        }
        else{
            console.log('Customer doesnt moved to Dormancy, some thing broke during move to active');                
        }
        
    });
    
Given('check the account status is in Low Utilization', function () {
        
        if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
            client
                .expect.element('#changeStatus')
                .text.to.equal('Change Status').pause(3000).click('#changeStatus');   
        }
        else{
            console.log('Existing test case is failed, so that you are in same section');            
        }     
    });

When('check change status to verify to list of status for Low Utilization', function () {
        
    return client.pause(2000)
                .click('button#accountStatusButton')
                .waitForElementVisible("a#lowUtilizationPlan.userStatuses");
                
    });

When('choose low utilization in Change Status To and enter the fields', function () {

    var randomDatePicker,datePickerValue;    
    return client.pause(2000)
                .click("a#lowUtilizationPlan.userStatuses")
                .elements("css selector","ul#datePeriod li button", function(datePicker){
                    console.log("DatePicker length"+datePicker.value.length);
                    datePickerValue = datePicker.value.length;
                    console.log(datePicker);
                    randomDatePicker = Math.floor((Math.random() * datePickerValue) + 1);
                    console.log("choose the random date picker"+randomDatePicker);  
                    if(randomDatePicker === 6){
                         client.assert.visible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn')
                            .setValue('input#popupDate',"27072020").setValue('textarea#popupDescription','Testing the admintool on nightwatch js');
                    }
                    else{
                         client.assert.visible('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn').click('#datePeriodDiv ul#datePeriod.datePeriods li:nth-child('+randomDatePicker+').datePeriod button.datePeriodButton.radio-btn')
                            .setValue('textarea#popupDescription','Testing the admintool on nightwatch js');           
                    }
            
        });
    });

Then('move the customer to low utilization', function () {
                
    return client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
         if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
                console.log('Customer moved to Dormancy and then it will be holded for billing cycle end date: Test Case is passed');
        }
        else{
                console.log('Customer doesnt moved to Dormancy, some thing broke during move to active');                
        }
                
    });

Then('currently low utilization will be holded for billing cycle end date, that we can check the note in account summary, if it is failed  it will be created a task in the top', function () {
        
    return client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
            if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
                console.log('Customer moved to Dormancy and then it will be holded for billing cycle end date: Test Case is passed');
            }
            else{
                console.log('Customer doesnt moved to Dormancy, some thing broke during move to active');                
            }
        
    });

Given('check the account status is in holded Low Utilization', function(){

        if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
             client
                .expect.element('#changeStatus')
                .text.to.equal('Change Status').pause(3000).click('#changeStatus');   
            }
            else{
                console.log('Existing test case is failed, so that you are in same section');            
            }  
    });

When('check change status to list to verify that list of status for Low Utilization', function(){

    return client.pause(2000)
                .click('button#accountStatusButton');
                      
    });

Then('choose the customer for stop low utilization', function(){
    
    return client.assert.visible('#formSubmit').click('#stopLowUtilizationPlan')
                    .setValue('textarea#popupDescription','Testing the admintool on nightwatch js');
                       
    });

Then('check the status in account summary, if in case failed in stop dormancy', function(){
        
    return client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
    if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
        console.log('Customer moved to Dormancy and then it will be holded for billing cycle end date: Test Case is passed');
    }
    else{
        console.log('Customer doesnt moved to Dormancy, some thing broke during move to active');                
    }                     
    });

Given('check the account status is in dormancy or active or past due or active', function(){
        
    if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
        client
           .expect.element('#changeStatus')
           .text.to.equal('Change Status').pause(3000).click('#changeStatus');   
    }
    else{
           console.log('Existing test case is failed, so that you are in same section');            
    }                          
    });

When('check change status to list to verify that list of status for block account', function(){
        
    let fromStatusValue;
    return client.pause(2000).getValue("input[id='accountStatus']", function(fromStatusValue){
        console.log("Get the status value from the ui 2 "+fromStatusValue.value);
        if(fromStatusValue.value === "Active" || fromStatusValue.value === 'Active | Past Due' 
            || fromStatusValue.value === 'Active | Notice to Block' || fromStatusValue.value === 'Active | Unpaid'
            || fromStatusValue.value === 'Active | Dormancy' ){
             client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');
            }
        });                         
    });

Then('choose the customer for block account and enter the fields', function(){
    
        client.pause(2000).click('a#blockAccount.userStatuses').pause(2000)
                    .setValue('textarea#popupDescription','Testing the admintool on nightwatch js');           
    });


Then('check the status in account summary, if in case failed in block account we will be in changes status and then it has to be created a task link in the top', function(){
        
    return client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
    if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
        console.log('Customer moved to Dormancy and then it will be holded for billing cycle end date: Test Case is passed');
    }
    else{
        console.log('Customer doesnt moved to Dormancy, some thing broke during move to active');                
    } 
    });

Given('check the account status is in block status', function(){
        
    return client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
    if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
        console.log('Customer moved to Dormancy and then it will be holded for billing cycle end date: Test Case is passed');
    }
    else{
        console.log('Customer doesnt moved to Dormancy, some thing broke during move to active');                
    } 
    });

When('check change status to list to verify that list of status for unblock account', function(){
        
    let fromStatusValue;
    return client.pause(2000).getValue("input[id='accountStatus']", function(fromStatusValue){
        console.log("Get the status value from the ui 2 "+fromStatusValue.value);
        if(fromStatusValue.value === "Active | Blocked for Non-Payment"){
             client.waitForElementVisible('button#accountStatusButton span#accountStatusChange',3000).click('button#accountStatusButton span#accountStatusChange');
            }
        });
    });

Then('choose unblock in Change Status To and enter the fields', function(){
        
    return client.waitForElementVisible("button[id='accountStatusButton']").click("a#unblock.userStatuses")
                 .setValue('textarea#popupDescription','Testing the admintool on nightwatch js');             
    });

Then('move the customer for unblock', function(){
        
    return client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
    if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
           console.log('Customer moved to Dormancy and then it will be holded for billing cycle end date: Test Case is passed');
   }
   else{
           console.log('Customer doesnt moved to Dormancy, some thing broke during move to active');                
   }
});

Then('move the customer for unblock', function(){
    
return client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
       console.log('Customer moved to Dormancy and then it will be holded for billing cycle end date: Test Case is passed');
}
else{
       console.log('Customer doesnt moved to Dormancy, some thing broke during move to active');                
}
});

Then('check the status in account summary, if in case failed in unblock we will be in change status and then it has to be created a task link in the top', function(){
    
return client.pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(20000);
if(client.expect.element('h4#popupHeader').text.to.equal('Account Details')){
       console.log('Customer moved to Dormancy and then it will be holded for billing cycle end date: Test Case is passed');
}
else{
       console.log('Customer doesnt moved to Dormancy, some thing broke during move to active');                
}
});