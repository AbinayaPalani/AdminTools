const { Given, Then, When } = require('cucumber');
const { client } = require('nightwatch-api');
var iframe_src, updatedIndustry, pageUrl, AccountPin, BrandId;
var AccountInformationDetailResponse;
var options;
const requestInfo = require('./apiGet');




//Scenario: Validating the account details
Given('Open the admin tool', function () {


     client.frameParent().waitForElementVisible('#main div.modal-window.openmodal.admin-tool-modal div.modal-header h3',5000);
    
   //requestInfo();
    // return client
    //           .assert.visible('#main > div.modal-window.openmodal.admin-tool-modal > div.modal-header > h3');

});

Then('validate the {string} in header', function (string) {

    console.log(string);
    console.log("Account Details");
     client.waitForElementVisible('#adminTool',3000).getAttribute("iframe[id='adminTool']","src", function(srcUrl){
        //console.log(srcUrl.value);
        //iframe_src = srcUrl.value;
    }).pause(10000).frame('adminTool').waitForElementVisible('#accountSummary',50000)
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
   

     client.waitForElementVisible('#accountSummary',500,function(result){
        
        const request = require("request");
        const url = "https://my-json-server.typicode.com/edurekaDemo/noderequest/db";
        request.get(url, (error, response, body) => {
        let json = JSON.parse(body);
        console.log(body);
        });
        
        // console.log('IFRAME URL '+ iframe_src);


        // iframe_src = iframe_src.split('=');
        // AccountPin = iframe_src[1].split("&")[0];
        // BrandId = iframe_src[2].split("&")[0];
      
        // console.log("1");
      
        //     console.log("2");
        //     console.log("BrandId "+BrandId);
        //     console.log("3");
        //     console.log("Account Pin "+ AccountPin);
        //     console.log("4");
 });
});
 

Then('validate the company name', function () {
   
      client.assert.visible('input#teamName');
    
});


Then('validate the primary account number', function () {

     client.assert.visible('input#primaryAccount');
});

Then('validate the account status', function () {

     client.assert.visible('input#userStatus');


});


Then('validate the industry value', function () {

     client.assert.visible('div#industryDiv');
});






// Scenario: Updating the industry value
When('validating the hover of edit option', function () {

     client.frame('adminTool').assert.visible('#editOption button svg g#Page-1').pause(3000)
    .moveToElement('#editOption button svg g#Page-1',5,5);


});

// Scenario: Updating the industry value
When('validating the hover of edit option and should be in account summary page', function () {

     client.frame('adminTool').assert.visible('#editOption button svg g#Page-1')
    .moveToElement('#editOption button svg g#Page-1',5,5);

});


Then('click the edit option', function () {

  // return client.click('button.edit-single.nostyle');


     client.pause(2000).moveToElement('button.edit-single.nostyle',5,5).doubleClick();

});

Then('typing and select the option in an industry', function () {

   
    var random;
    // client.execute('var footerElements = document.getElementsByClassName("footer-partners");' +
    //       'footerElements[0].scrollIntoView(true);')
     client.getLocationInView('button#industryButton').pause(3000).assert.visible('button#industryButton').click('button#industryButton').elements('css selector','#industryList li a', function(industryValue){

       
        //console.log(industryValue.value);
        console.log("Testing"+industryValue.value.length);
        random = Math.floor((Math.random() * industryValue.value.length) + 1);
           client.getText('#industryList > li:nth-child('+random+') > a', function(industryinfo){
            updatedIndustry = industryinfo.value;
              client.setValue("input[id='industryInput']", industryinfo.value).click('#industryList > li:nth-child('+random+') > a');

         });

    });

});

Then('update an industry', function () {

    client.getLocationInView("button#formSubmit.submit_btn").pause(1000).assert.visible('#formSubmit').click('#formSubmit');


});

Then('validate updated value', function () {

     client.waitForElementVisible('#notification',500000)
         .getText('#industryButton #industry', function(result){

                console.log("################");
                console.log("Notification of Industry update"+result.value);
             
                this.assert.equal(result.value, updatedIndustry);
            });

});

//Scenario: Check the close button functionality 

Then('click the close button and validate it', function () {



     client.getLocationInView("button#formClear").pause(1000).assert.visible('#formClear').click('#formClear');



});

// Scenario: Update the GoLiveDate


Then('select the random future date', function () {

    // function randomDate(start, end) {
    //     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    // }
    // var randomDate = randomDate(new Date(2020, 0, 1), new Date());;
    // var goLiveDate = ('0' + randomDate.getDate()).slice(-2)+""+('0' + (randomDate.getMonth()+1)).slice(-2)+""+randomDate.getFullYear()
    // console.log("GoLiveDate"+goLiveDate);

     client.setValue("input[id='goLiveDate']","27112019");

});

Then('udpate the golivedate', function () {

     client.getLocationInView("#formSubmit.submit_btn")
    .assert.visible('#formSubmit').click("button[id='formSubmit']").
             waitForElementVisible('#notification',50000)
             .getText("p[id='notification']", function(notificationResult){
                 console.log("Notification message : "+notificationResult.value);
             });


});

// Scenario: Check the alert for continue in an industry

Then('Move to change status section in an admin tool', function () {

     client.waitForElementVisible("a[id='changeStatus']",3000).click("a[id='changeStatus']");
  
});

When('check the alert for continue', function () {

     client.waitForElementVisible("button[id='moveToPage']",2000)
            .click("button[id='moveToPage']");
  
});

When('validate moved to choosen change status section', function () {
     
     client.waitForElementVisible("a[id='changeStatus']",1000)
                .getText("a[id='changeStatus']", function(changeStatus){
                    this.assert.equal(changeStatus.value, "Change Status");
                });
                
 
});

// Scenario: Check the alert for cancel in an industry

When('check the alert for cancel', function () {

     client.waitForElementVisible("button[id='stayOnPage']",2000)
    .click("button[id='stayOnPage']");
  
});

When('validate it should stay in same section with that changes - industry', function () {

     client.getText("a[id='accountSummary']", function(acccountSummaryText){
       this.assert.equal(acccountSummaryText.value,"Account Details");
    })
  
});

//Scenario: Check the alert for continue in an goLiveDate

Then('Adjust the goLiveDate', function () {
  
});

//Scenario: Check the alert for cancel in an industry 







