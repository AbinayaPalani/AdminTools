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

    return client.click('#debit')
    .waitForElementPresent("#popupHeader", 10000).pause(2000)
    .assert.containsText("#popupHeader", "Debit")
    //.waitForElementPresent('span#newRequest.newRequest',10000)
    .moveToElement('span#newRequest.newRequest',5,5)
    .doubleClick();

});

When('Pass the necessary data to process the debit', function () {

    return client.setValue('#popupEmail',"abinaya.palani@anywhere.co")
                .setValue('#popupAmount',1.8)
                .setValue('#popupReason',"Testing the debit adjustment")
                .setValue('#popupDescription', "Automation debit Adjustment");

});

When('submit the debit', function () {

    return client.click("button[id='formSubmit']").
    waitForElementVisible('#notification',50000)
    .getText("p[id='notification']", function(notificationResult){
        console.log("Notification message : "+notificationResult.value);
    });

});

When('clear the data', function () {

    return client.click("button[id='formClear']");
});