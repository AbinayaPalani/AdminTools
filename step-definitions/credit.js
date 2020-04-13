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
    return client.setValue('#popupEmail',"abinaya.palani@anywhere.co")
                .setValue('#popupAmount',1.12)
                .setValue('#popupDescription', "Automation credit Adjustment");

});

When('select the reason list for credit', function(){
    var randomReasonList;
    return client.getLocationInView("#popupReasonDropDownButton").pause(1000).assert.visible('#popupReasonDropDownButton').click('#popupReasonDropDownButton').elements("css selector","ul#popupReasonList li", function(reasonList){
        console.log("Reason List for Credit Page "+reasonList.value.length);
        randomReasonList = Math.floor((Math.random() * reasonList.value.length) + 1);
        console.log("Random number to pick the reason from the list"+randomReasonList);

        if(randomReasonList === 16){
            return client.getLocationInView('#popupReasonList li:nth-child('+randomReasonList+') a').pause(500).assert.visible('#popupReasonList li:nth-child('+randomReasonList+') a').click('#popupReasonList li:nth-child('+randomReasonList+') a')
            .setValue('textarea#popupReason',"Testing the credit in the admin tool..!");
        }
        else
        {
            return client.getLocationInView('#popupReasonList li:nth-child('+randomReasonList+') a').pause(500).assert.visible('#popupReasonList li:nth-child('+randomReasonList+') a').click('#popupReasonList li:nth-child('+randomReasonList+') a');
        }

    })


});


Then('submit the credit', function () {


    
    return client
    .assert.visible('#formSubmit').pause(500).click("button[id='formSubmit']")
    .waitForElementVisible('#notification',50000)
    .getText("p[id='notification']", function(notificationResult){
        console.log("Notification message : "+notificationResult.value);
    });

});


Then('submit the credit and handle if duplicate credit is present so process the credit', function (){


    return client.assert.visible('#formSubmit').pause(500).click("button[id='formSubmit']").waitForElementPresent('div#alertTableDiv',5000).waitForElementPresent('button#moveToPage').click('button#moveToPage');

});

Then('submit the credit and handle if duplicate credit is present so cancel the credit', function (){

    return client.assert.visible('#formSubmit').pause(500).click("button[id='formSubmit']").waitForElementPresent('div#alertTableDiv',5000).waitForElementPresent('button#stayOnPage').click('button#stayOnPage');
    

});







// When('clear the data', function () {

//     return client.click("button[id='formClear']");
// });