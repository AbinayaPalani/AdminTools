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

    return client.setValue('#popupEmail',"abinaya.palani@anywhere.co")
                .setValue('#popupAmount',1.12)
                .setValue('#popupReason',"Testing the credit adjustment")
                .setValue('#popupDescription', "Automation credit Adjustment");

});

When('submit the credit', function () {

    return client.click("button[id='formSubmit']").
    waitForElementVisible('#notification',50000)
    .getText("p[id='notification']", function(notificationResult){
        console.log("Notification message : "+notificationResult.value);
    });

});

// When('clear the data', function () {

//     return client.click("button[id='formClear']");
// });