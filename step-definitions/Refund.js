const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
var urlSource = require('./accountdetails.js')



 When('check the refund section is present', function () {

    return client.frame('adminTool')
                 .assert.visible('#refund');

 });

// Then('check the refund section is present and click the refund section', function () {

//     return client.pause(1000).assert('#refund').click('#refund');
// });

Then('click the refund section and verify the title of refund page', function () {

    return client.click('#refund')
    .waitForElementPresent("h4#popupHeader", 10000).pause(2000)
   .assert.containsText("#popupHeader", "Refund")
    //.waitForElementPresent('span#newRequest.newRequest',10000)
    .moveToElement('span#newRequest.newRequest',5,5)
    .doubleClick();


    //return client.waitForElementPresent("h4#popupHeader", 10000).pause(2000)
    //.assert.containsText("h4#popupHeader", "Refund");
});

Then('check the transaction details for this account with successful status and click the refund link for full transaction', function () {

    console.log(urlSource.value);
    if(urlSource.value.includes('staging')){

        var paymentOptions = {
            url:'https://staging.jbilling.a-cti.com:8443/getPayments/'+AccountPin,
            header:{
                'User-Agent': ''
            }
        }


        function accountInfoCallback(error, response, body){

            if (!error && response.statusCode == 200) {

            var responseUserInfo = JSON.parse(body);
                 console.log(responseBody);

                if(Object.keys(responseBody.success === true)){

                    if(Object.keys(responseBody.payments).length > 0){

                        var lengthOfPayments = Object.keys(responseBody.payments).length;

                        for(var iteration = 0 ; iteration < 1; ++iteration){

                        
                            var payments = Math.floor((Math.random() * lengthOfPayments.value.length) + 1);


                            var remainingAmount = Object.keys(responseBody.payments.remainingAmount);

                            if(remainingAmount > 0){

                                return client.waitForElementPresent('tr:nth-child('+iteration+') a.autoFill',1000).click('tr:nth-child('+iteration+') a.autoFill');

                            }
                            else{
                                    ++iteration;
                            }

                        }

                    }


                }

                 


            }

        }

    }
});


Then('check the transaction details for this account with successful status and click the refund link for partial transaction', function () {

    if(urlSource.includes('staging')){

        var paymentOptions = {
            url:'https://staging.jbilling.a-cti.com:8443/getPayments/'+AccountPin,
            header:{
                'User-Agent': ''
            }
        }


        function accountInfoCallback(error, response, body){

            if (!error && response.statusCode == 200) {

            var responseUserInfo = JSON.parse(body);
                 console.log(responseBody);

                if(Object.keys(responseBody.success === true)){

                    if(Object.keys(responseBody.payments).length > 0){

                        var lengthOfPayments = Object.keys(responseBody.payments).length;

                        for(var iteration = 0 ; iteration < 1; ++iteration){

                        
                            var payments = Math.floor((Math.random() * lengthOfPayments.value.length) + 1);


                            var remainingAmount = Object.keys(responseBody.payments.remainingAmount);

                            if(remainingAmount > 1 ){

                                return client.waitForElementPresent('tr:nth-child('+iteration+') a.autoFill',1000).click('tr:nth-child('+iteration+') a.autoFill')
                                                        .setValue('#popupAmount.validate_blur.validate_press',(remainingAmount/2).toFixed(2));

                            }
                            else if(remainingAmount > 0 || remainingAmount <=1 ){
                                return client.waitForElementPresent('tr:nth-child('+iteration+') a.autoFill',1000).click('tr:nth-child('+iteration+') a.autoFill')
                                .setValue('#popupAmount.validate_blur.validate_press',remainingAmount);

                            }
                            else{
                                    ++iteration;
                            }

                        }

                    }


                }

                 


            }

        }

    }
});




Then('Enter the details to process the refund transaction', function () {

    return client.setValue('input#popupEmail.validate_blur','abinaya.palani@anywhere.co');

});


Then('choose the reason for refund transaction', function () {

    var randomReasonList;
    return client.click('#popupReasonDropDownButton').elements("css selector","ul#popupReasonList li", function(reasonList){
        console.log("Reason List for Debit Page "+reasonList.value.length);
        randomReasonList = Math.floor((Math.random() * reasonList.value.length) + 1);
        console.log("Random number to pick the reason from the list"+randomReasonList);

        if(randomReasonList === 5){
            return client.getLocationInView('#popupReasonList > li:nth-child('+randomReasonList+') > a').pause(500).assert.visible('#popupReasonList > li:nth-child('+randomReasonList+') > a').click('#popupReasonList > li:nth-child('+randomReasonList+') > a')
            .setValue("Testing the Refund in the admin tool via NightWatch JS...!");
        }
        else
        {
            return client.getLocationInView('#popupReasonList > li:nth-child('+randomReasonList+') > a').pause(500).assert.visible('#popupReasonList > li:nth-child('+randomReasonList+') > a').click('#popupReasonList > li:nth-child('+randomReasonList+') > a');
        }

    })


});


Then('submit the refund', function () {

    return client
    .assert.visible('#formSubmit').pause(500).click("button[id='formSubmit']")
    .waitForElementVisible('#notification',50000)
    .getText("p[id='notification']", function(notificationResult){
        console.log("Notification message : "+notificationResult.value);
    });


});





Then('check refund process detail will show in recent transaction with status as pending', function () {



   return client.waitForElementPresent('#refundHistoryBody tr:nth-child(1)',1000).assert.valuesContains("#refundHistoryBody tr:nth-child(1) td:nth-child(6)","Pending");


});
