const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
var urlSource = "staging";
const request = require("request");




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
    .doubleClick().pause(1000);


    //return client.waitForElementPresent("h4#popupHeader", 10000).pause(2000)
    //.assert.containsText("h4#popupHeader", "Refund");
});




Then('Enter the details to process the refund transaction', function () {
    
        //return client.pause(1000).setValue('#popupURL',"https://wwww.google.com");
    
    });
    

Then('check the transaction details for this account with successful status and click the refund link for full transaction', function () {

   
    var AccountPin = "312d46d5-0862-40a8-b03c-b332dcd164ec";
    console.log(AccountPin);
    console.log(urlSource);
    if(urlSource ==='staging'){

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

    return client.waitForElementPresent('tr:nth-child(1) a.autoFill',1000).pause(500).click('tr:nth-child(1) a.autoFill').pause(1000).clearValue('#popupAmount').setValue('#popupAmount',"1").setValue('#popupURL',"https://wwww.google.com");

    // var AccountPin = "312d46d5-0862-40a8-b03c-b332dcd164ec";
    // console.log(AccountPin);
    // console.log("Url"+urlSource);

    //     var paymentOptions = {
    //         url:'https://staging.jbilling.a-cti.com:8443/getPayments/'+AccountPin,
    //         header:{
    //             'User-Agent': ''
    //         }
    //     }

    
    //     request.get(paymentOptions.url, (error, response, body) => {

    //         if (!error && response.statusCode == 200) {

    //         var responseUserInfo = JSON.parse(body);

    //         console.log('REfund transaction')
    //              console.log(responseUserInfo);

    //             if(responseUserInfo.success === true){

    //                 if((responseUserInfo.payments).length > 0){

    //                     var lengthOfPayments = (responseUserInfo.payments).length;

    //                     console.log(lengthOfPayments)

    //                     for(var iteration = 0 ; iteration < 1; ++iteration){

                        
    //                         var payments = Math.floor((Math.random() * lengthOfPayments) + 1);


    //                         var remainingAmount = responseUserInfo.payments[iteration].remainingAmount;

    //                         console.log("RemainingAmount"+remainingAmount);

    //                         if(remainingAmount > 1 ){

    //                             console.log("RemainingAmount"+ (remainingAmount/2).toFixed(2));
    //                             var refundAmount = (remainingAmount/2).toFixed(2);

    //                             var iter = iteration;

                            

    //                             return client.waitForElementPresent('tr:nth-child(1) a.autoFill',1000).pause(500).click('tr:nth-child(1) a.autoFill')
    //                                                     .setValue('#popupAmount',refundAmount).pause(100);

    //                         }
    //                         else if(remainingAmount > 0 && remainingAmount <=1 ){
    //                             var iter = iteration;
    //                             var refundAmount = remainingAmount;
    //                             console.log("RemainingAmount2"+ refundAmount);
    //                             return client.waitForElementPresent('tr:nth-child(1) a.autoFill',1000).pause(500).click('tr:nth-child(1) a.autoFill')
    //                             .setValue('#popupAmount',refundAmount).pause(100);

    //                         }
    //                         else{
    //                                 ++iteration;
    //                         }

    //                     }

    //                 }


    //             }

                 


    //         }

    //     });
});



Then('choose the reason for refund transaction', function () {

    var randomReasonList;
    
    return client.getLocationInView("#popupReasonDropDownButton").pause(1000).assert.visible('#popupReasonDropDownButton').click('#popupReasonDropDownButton').elements("css selector","ul#popupReasonList li", function(reasonList){
        console.log("Reason List for Credit Page "+reasonList.value.length);
        randomReasonList = Math.floor((Math.random() * reasonList.value.length) + 1);
        console.log("Random number to pick the reason from the list "+randomReasonList);
        console.log('#popupReasonList li:nth-child('+randomReasonList+') a.refundReasons');

        if(randomReasonList === 13){
             client.getLocationInView('#popupReasonList li:nth-child('+randomReasonList+') a.refundReasons').pause(500).click('#popupReasonList li:nth-child('+randomReasonList+') a.refundReasons')
            .setValue('textarea#popupReason',"Testing the credit in the admin tool..!");
        }
        else
        {
             client.getLocationInView('#popupReasonList li:nth-child('+randomReasonList+') a.refundReasons').pause(500).click('#popupReasonList li:nth-child('+randomReasonList+') a.refundReasons');
        }

    })



});


Then('submit the refund', function () {


    return client.getLocationInView("button#formSubmit.submit_btn")
        .pause(1000).assert.visible('#formSubmit').click('#formSubmit');
        
    
    // return client
    // .assert.visible('#formSubmit').pause(500).click("button[id='formSubmit']")
    // .waitForElementVisible('#notification',50000)
    // .getText("p[id='notification']", function(notificationResult){
    //     console.log("Notification message : "+notificationResult.value);
    // });


});





Then('process the refund according to the owing balance', function () {


    return client.getLocationInView("button#estimationBtn.EstimationBtn")
    .pause(1000).assert.visible('#estimationBtn').click('#estimationBtn').pause(2000);
    
    //return client.pause(3000).click('button#estimationBtn.EstimationBtn');

   //return client.waitForElementPresent('#refundHistoryBody tr:nth-child(1)',1000).assert.valuesContains("#refundHistoryBody tr:nth-child(1) td:nth-child(6)","Completed");


});
