const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');



When('check the debit section is present', function () {

    return client.frame('adminTool')
                .assert.visible('li#debit_li a#debit.processLink');

    // return client.pause(1000).waitForElementVisible("#credit",3000, function(result){
    //    // this.assert.equal(result.value, true);
    //    console.log(result.value);
    // });

});

When('select the debit section and click create debit link', function () {

    return client.pause(1000).moveToElement('li#debit_li a#debit.processLink',1,1).doubleClick()
    .waitForElementPresent("#popupHeader", 10000).pause(5000)
   .assert.containsText("#popupHeader", "Debit")
    //.waitForElementPresent('span#newRequest.newRequest',10000)
    .moveToElement('span#newRequest.newRequest',5,5)
    .doubleClick();
});

When('Pass the necessary data to process the debit', function () {

    return client.setValue('#popupURL',"https://www.google.com")
                .setValue('#popupAmount',2.29)
                .setValue('#popupDescription', "Automation debit Adjustment");

});

When('select the reason list for debit', function(){
    var randomReasonList;
    

    return client.getLocationInView("#popupReasonDropDownButton").pause(1000).assert.visible('#popupReasonDropDownButton').click('#popupReasonDropDownButton').elements("css selector","ul#popupReasonList li", function(reasonList){
        console.log("Reason List for Credit Page "+reasonList.value.length);
        randomReasonList = Math.floor((Math.random() * reasonList.value.length) + 1);
        console.log("Random number to pick the reason from the list "+randomReasonList);
        console.log('#popupReasonList li:nth-child('+randomReasonList+') a.debitReasons');

        if(randomReasonList === 5){
             client.getLocationInView('#popupReasonList li:nth-child('+randomReasonList+') a.debitReasons').pause(500).click('#popupReasonList li:nth-child('+randomReasonList+') a.debitReasons')
            .setValue('textarea#popupReason',"Testing the credit in the admin tool..!");
        }
        else
        {
             client.getLocationInView('#popupReasonList li:nth-child('+randomReasonList+') a.debitReasons').pause(500).click('#popupReasonList li:nth-child('+randomReasonList+') a.debitReasons');
        }

    })


});



Then('submit the debit', function () {

    return client.getLocationInView("#formSubmit.submit_btn")
    .assert.visible('#formSubmit').pause(500)
    .click("button[id='formSubmit']")
    .waitForElementVisible('#notification',50000)
    .getText("p[id='notification']", function(notificationResult){
        console.log("Notification message : "+notificationResult.value);
    });

});



Then('submit the debit and handle if duplicate debit is present so process the debit adjustment', function() {

    return client.waitForElementPresent('div#alertTableDiv',5000).waitForElementPresent('button#moveToPage').click('button#moveToPage');
    
});
