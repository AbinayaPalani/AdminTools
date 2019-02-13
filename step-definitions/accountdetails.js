const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
var request = require('request');
var iframe_src, updatedIndustry;


//Scenario: Validating the account details
Given('Open the admin tool', function () {


    return client.frameParent().waitForElementVisible('#main > div.modal-window.openmodal.admin-tool-modal > div.modal-header > h3',5000);
    // return client
    //           .assert.visible('#main > div.modal-window.openmodal.admin-tool-modal > div.modal-header > h3');

});

Then('validate the {string} in header', function (string) {

    console.log(string);
    console.log("Account Details");
    return client.waitForElementVisible('#adminTool',3000).getAttribute("iframe[id='adminTool']","src", function(srcUrl){
        console.log(srcUrl.value);
        iframe_src = srcUrl.value;
    }).pause(5000).frame('adminTool').waitForElementVisible('#accountSummary',50000)
        .assert.containsText("#accountSummary", string);
    

       
        
        


    
   /* client.execute(function testing1() {
        let element = document.getElementById('teamName').value;
        console.log(element);
           if(element.length == 0 && element === ""){
           console.log('Element is empty')
     }
 }, [])


});*/

});

When('hit the getUserByAccountPin service and compare data with response data', function () {

    var pageUrl = "";
        return client.url(function(result) {
        pageUrl = result.value;

        console.log(pageUrl);
         
        // client.getAttribute('#adminTool', src, function(result){

        //     console.log("Iframe src value as "+src.value);
        // });

        console.log('IFRAME URL '+ iframe_src);
            iframe_src = iframe_src.split('=');
            var AccountPin = iframe_src[1].split("&")[0];
            var BrandId = iframe_src[2].split("&")[0];
            console.log("BrandId"+BrandId);
            

    if(pageUrl.includes('staging')){
        request('https://staging.jbilling.a-cti.com:8443/v1/getUserByAccountPin/accountPin/'+AccountPin+'/brandId/'+BrandId, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.

        var responseBody = JSON.parse(body);
        console.log(responseBody);
        console.log(responseBody.user);
        console.log(responseBody.user.primaryDetails['Account PIN']);
       
        if(Object.keys(responseBody.user.communicationAddress).includes('Statement Name 1')){
        console.log(responseBody.user.communicationAddress['Statement Name 1']);
        client.waitForElementVisible("#accountSummaryHolder > div:nth-child(1) > label",5000)
        .waitForElementVisible('#teamName', 5000).getValue("#teamName", function(teamName){
            console.log("**********************"+teamName.value);
            this.assert.equal(teamName.value, responseBody.user.communicationAddress['Statement Name 1']);
        });}
        if(Object.keys(responseBody.user.primaryDetails).includes('primaryAccountNumber')){
        client.getValue("input[id='primaryAccount']", function(accountNumber){
         this.assert.equal(accountNumber.value, responseBody.user.primaryDetails['primaryAccountNumber']);
        });}

        // if(Object.keys(responseBody.user).includes('status')){
        // client.getValue("input[id='userStatus']", function(status){
        //     this.assert.equal(status.value,responseBody.user.status);
        // });}


        // if(Object.keys(responseBody.user.accountInfo).includes('Industry')){
        // client.getValue("div[id='industryDiv']", function(industryValue){
        //     console.log("**********Industry************"+industryValue.value);
        // });}
        
           
          //  client.assert.valueContains('#industry', responseBody.user.accountInfo['Industry'], "Doesn't match the content in an Industry value")
        
        });    
        
        request('https://staging.jbilling.a-cti.com:8443/userReport/'+AccountPin, function (error, response, body) {

            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.

            var userReportResponse = JSON.parse(body);

            if(Object.keys(userReportResponse.userInfo).includes('credit')){

                client.expect.element('#totalCredits').text.to.contain(userReportResponse.userInfo.credit);
            }
            //console.log("Testing 1212121"+userReportResponse.userInfo['invoiceAmount']);
            //console.log(userReportResponse.userInfo['invoiceAmount'] != null) ;
            if(userReportResponse.userInfo['invoiceAmount'] != null && Object.keys(userReportResponse.userInfo).includes('invoiceAmount')){

                client.expect.element('#totalInvoices').text.to.contain(userReportResponse.userInfo.invoiceAmount);
            }

            if(Object.keys(userReportResponse.userInfo).includes('refund')){
                
                client.expect.element('#totalRefunds').text.to.contain(userReportResponse.userInfo.refund);

            }

            if(Object.keys(userReportResponse.userInfo).includes('payment')){
                
                client.expect.element('#totalPayments').text.to.contain(userReportResponse.userInfo.payment);

            }

        });
    }


    else{
        request('https://access.jbilling.a-cti.com/v1/getUserByAccountPin/accountPin/'+string+'/brandId/'+string2, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.

        });
    } 


});

});

// Scenario: Updating the industry value
When('validating the hover of edit option', function () {

    return client.frame('adminTool').assert.visible('#editOption button svg g#Page-1')
    .moveToElement('#editOption button svg g#Page-1',5,5);


});

// Scenario: Updating the industry value
When('validating the hover of edit option and should be in account summary page', function () {

    return client.frame('adminTool').click("#accountSummary").assert.visible('#editOption button svg g#Page-1')
    .moveToElement('#editOption button svg g#Page-1',5,5);


});


Then('click the edit option', function () {

    return client.pause(2000).click('#editOption button svg g#Page-1');

});

Then('typing and select the option in an industry', function () {

   
    var random;
    return client.click('#industryButton').elements('css selector','#industryList li a', function(industryValue){

       
        console.log(industryValue.value);
        console.log(industryValue.value.length);
        random = Math.floor((Math.random() * industryValue.value.length) + 1);
          client.getText('#industryList > li:nth-child('+random+') > a', function(industryinfo){
            updatedIndustry = industryinfo.value;
             client.setValue("input[id='industryInput']", industryinfo.value).click('#industryList > li:nth-child('+random+') > a');

         });

    });

   
});

Then('update an industry', function () {

    return client.click("button[id='formSubmit']").pause(3000);

});

Then('validate updated value', function () {

    return client.waitForElementVisible('#notification',50000)
         .getText('#industryButton #industry', function(result){

                console.log("################");
                console.log(result.value);
             
                this.assert.equal(result.value, updatedIndustry);
            });

});

//Scenario: Check the close button functionality 

Then('click the close button and validate it', function () {

    return client.click("button#formClear");

});

// Scenario: Update the GoLiveDate


Then('select the random future date', function () {

    // function randomDate(start, end) {
    //     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    // }
    // var randomDate = randomDate(new Date(2020, 0, 1), new Date());;
    // var goLiveDate = ('0' + randomDate.getDate()).slice(-2)+""+('0' + (randomDate.getMonth()+1)).slice(-2)+""+randomDate.getFullYear()
    // console.log("GoLiveDate"+goLiveDate);

    return client.pause(5000).setValue("input[id='goLiveDate']","27112019");

});

Then('udpate the golivedate', function () {

    return client.click("button[id='formSubmit']").
             waitForElementVisible('#notification',50000)
             .getText("p[id='notification']", function(notificationResult){
                 console.log("Notification message : "+notificationResult.value);
             });


});

// Scenario: Check the alert for continue in an industry

Then('Move to change status section in an admin tool', function () {

    return client.waitForElementVisible("a[id='changeStatus']",3000).click("a[id='changeStatus']");
  
});

When('check the alert for continue', function () {

    return client.waitForElementVisible("button[id='moveToPage']",2000)
            .click("button[id='moveToPage']");
  
});

When('validate moved to choosen change status section', function () {
     
    return client.waitForElementVisible("a[id='changeStatus']",1000)
                .getText("a[id='changeStatus']", function(changeStatus){
                    this.assert.equal(changeStatus.value, "Change Status");
                });
                
 
});

// Scenario: Check the alert for cancel in an industry

When('check the alert for cancel', function () {

    return client.waitForElementVisible("button[id='stayOnPage']",2000)
    .click("button[id='stayOnPage']");
  
});

When('validate it should stay in same section with that changes - industry', function () {

    return client.getText("a[id='accountSummary']", function(acccountSummaryText){
       this.assert.equal(acccountSummaryText.value,"Account Details");
    })
  
});

//Scenario: Check the alert for continue in an goLiveDate

Then('Adjust the goLiveDate', function () {
  
});

//Scenario: Check the alert for cancel in an industry 







