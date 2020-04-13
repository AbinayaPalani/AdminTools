const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');



When('check the debit section is present', function () {

    return client.frame('adminTool')
                .assert.visible('#debit');

    // return client.pause(1000).waitForElementVisible("#credit",3000, function(result){
    //    // this.assert.equal(result.value, true);
    //    console.log(result.value);
    // });

});

When('select the debit section and click create debit link', function () {

    return client.pause(1000).click('#debit')
    .waitForElementPresent("#popupHeader", 10000).pause(2000)
    .assert.containsText("#popupHeader", "Debit")
    //.waitForElementPresent('span#newRequest.newRequest',10000)
    .moveToElement('span#newRequest.newRequest',5,5)
    .doubleClick();

});

When('Pass the necessary data to process the debit', function () {

    return client.setValue('#popupEmail',"abinaya.palani@anywhere.co")
                .setValue('#popupAmount',1.8)
                .setValue('#popupDescription', "Automation debit Adjustment");

});

When('select the reason list for debit', function(){
    var randomReasonList;
    return client.getLocationInView("#popupReasonDropDownButton").pause(1000).assert.visible('#popupReasonDropDownButton').click('#popupReasonDropDownButton').elements("css selector","ul#popupReasonList li", function(reasonList){
        console.log("Reason List for Debit Page "+reasonList.value.length);
        randomReasonList = Math.floor((Math.random() * reasonList.value.length) + 1);
        console.log("Random number to pick the reason from the list"+randomReasonList);

        if(randomReasonList === 16){
            return client.getLocationInView('#popupReasonList li:nth-child('+randomReasonList+') a').pause(500).assert.visible('#popupReasonList li:nth-child('+randomReasonList+') a').click('#popupReasonList li:nth-child('+randomReasonList+') a')
            .setValue('textarea#popupReason',"Testing the Debit adjustment in the admin tool via NightWatch JS...!");
        }
        else
        {
            return client.getLocationInView('#popupReasonList li:nth-child('+randomReasonList+') a').pause(500).assert.visible('#popupReasonList li:nth-child('+randomReasonList+') a').click('#popupReasonList li:nth-child('+randomReasonList+') a');
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

When('clear the data', function () {

    return client.waitForElementPresent('div#alertTableDiv',5000).waitForElementPresent('button#moveToPage').click('button#moveToPage');
    
});


Then('submit the debit and handle if duplicate debit is present so process the debit adjustment', function() {

    return client.waitForElementPresent('div#alertTableDiv',5000).waitForElementPresent('button#moveToPage').click('button#moveToPage');
    
});
