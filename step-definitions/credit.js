const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');



When('check the credit section is present', function () {

    return client.frame('adminTool')
                .assert.visible('#credit');

    // return client.pause(1000).waitForElementVisible("#credit",3000, function(result){
    //    // this.assert.equal(result.value, true);
    //    console.log(result.value);
    // });

});

When('select the credit section and click create credit link', function () {

    return client.click('#credit')
    .waitForElementPresent("#popupHeader", 10000).pause(2000)
   .assert.containsText("#popupHeader", "Credit")
    //.waitForElementPresent('span#newRequest.newRequest',10000)
    .moveToElement('span#newRequest.newRequest',5,5)
    .doubleClick();

});

When('Pass the necessary data to process the credit', function () {

    var randomReasonList;
    return client.setValue('#popupURL',"https://wwww.google.com")
                .setValue('#popupAmount',0.96)
                .setValue('#popupDescription', "Automation credit Adjustment");

});

When('select the reason list for credit', function(){
    var randomReasonList;
    return client.getLocationInView("#popupReasonDropDownButton").pause(1000).assert.visible('#popupReasonDropDownButton').click('#popupReasonDropDownButton').elements("css selector","ul#popupReasonList li", function(reasonList){
        console.log("Reason List for Credit Page "+reasonList.value.length);
        randomReasonList = Math.floor((Math.random() * reasonList.value.length) + 1);
        console.log("Random number to pick the reason from the list "+randomReasonList);
        console.log('#popupReasonList li:nth-child('+randomReasonList+') a.creditReasons');

        if(randomReasonList === 16){
             client.getLocationInView('#popupReasonList li:nth-child('+randomReasonList+') a.creditReasons').pause(500).click('#popupReasonList li:nth-child('+randomReasonList+') a.creditReasons')
            .setValue('textarea#popupReason',"Testing the credit in the admin tool..!");
        }
        else
        {
             client.getLocationInView('#popupReasonList li:nth-child('+randomReasonList+') a.creditReasons').pause(500).click('#popupReasonList li:nth-child('+randomReasonList+') a.creditReasons');
        }

    })


});


Then('submit the credit', function () {

    return client.getLocationInView("button#formSubmit.submit_btn").pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(2000);
    
    
    // return client
    // .assert.visible('#formSubmit').pause(500).click("button[id='formSubmit']")
    // .waitForElementVisible('#notification',50000)
    // .getText("p[id='notification']", function(notificationResult){
    //     console.log("Notification message : "+notificationResult.value);
    // });

});


Then('handle if duplicate credit is present so process the credit', function (){


    return client.pause(1000).waitForElementPresent('div#alertTableDiv.alertTableDiv',5000).waitForElementPresent('div#buttonWrapper button#moveToPage').click('div#buttonWrapper button#moveToPage').pause(3000);

});

// Then('submit the credit and handle if duplicate credit is present so cancel the credit', function (){

//     return client.assert.visible('#formSubmit').pause(500).click("button[id='formSubmit']").waitForElementPresent('div#alertTableDiv',5000).waitForElementPresent('button#stayOnPage').click('button#stayOnPage');
    

// });







Then('clear the data', function () {

    return client.getLocationInView("button#formClear").pause(1000).assert.visible('#formClear').click('#formClear').pause(4000);
    
   
});