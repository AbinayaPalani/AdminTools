const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');


When('check the planswap section is present', function () {

    return client.frame('adminTool').assert.visible('li#changePlan_li a.processLink#changePlan');

   // return client.frame('adminTool').assert.waitForElementPresent("//ul[@class='settings']/li/h5[contains(text(),'Account Type')]");
   
});

Then('select the planswap section', function () {
    
    return client.click('#changePlan')
    .waitForElementPresent("h4#popupHeader", 10000).pause(2000)
   .assert.containsText("#popupHeader", "Change Plan")
    //.waitForElementPresent('span#newRequest.newRequest',10000)
    .moveToElement('span#newRequest.newRequest',5,5)
    .doubleClick().pause(1000);    
       // return client.frame('adminTool').assert.waitForElementPresent("//ul[@class='settings']/li/h5[contains(text(),'Account Type')]");
       
});


Then('Assert the live answering title', function () {
    
    return client.waitForElementPresent('div#voicePlanContainer div div.plan-hd h6')
                assert.containsText("div#voicePlanContainer div div.plan-hd h6", "Live Answering");
  
});


Then('choose random plan from the voice plans', function () {
    var randomReasonList;

    // return client.getLocationInView("#popupReasonDropDownButton")
    // .pause(1000).assert.visible('#popupReasonDropDownButton')
    // .click('#popupReasonDropDownButton')
    // .elements("css selector","ul#popupReasonList li", function(reasonList){
        
    return client.getLocationInView('div#voicePlanContainer div div.plan-hd h6')
        .pause(1000).assert.visible('div#voicePlanContainer div div.plan-hd h6')
        .click('div#voicePlanSelectionDetails')
                .elements("css selector",'ul.plans-list#voicePlanList li', function(result){

                    var voicePlanList = result.value.length;
                    console.log("Voice plan size "+ voicePlanList);

                    randomReasonList = Math.floor((Math.random() * voicePlanList) + 1);
                    client.getLocationInView('ul.plans-list#voicePlanList li:nth-child('+randomReasonList+')').pause(500)
                    .click('ul.plans-list#voicePlanList li:nth-child('+randomReasonList+')').pause(3000);
                    

                    //ul.plans-list#voicePlanList li:nth-child(81)

                });
});


Then('choose random plan from the ivr plans', function () {
    var randomReasonList;

    // return client.getLocationInView("#popupReasonDropDownButton")
    // .pause(1000).assert.visible('#popupReasonDropDownButton')
    // .click('#popupReasonDropDownButton')
    // .elements("css selector","ul#popupReasonList li", function(reasonList){
        
    return client.getLocationInView('div#ivrPlanContainer div div.plan-hd h6')
        .pause(1000).assert.visible('div#ivrPlanContainer div div.plan-hd h6')
        .click('div#ivrPlanContainer div div.plan-hd h6')
                .elements("css selector",'ul.plans-list#ivrPlanList li', function(result){

                    var ivrPlanList = result.value.length;
                    console.log("Voice plan size "+ ivrPlanList);

                    randomReasonList = Math.floor((Math.random() * ivrPlanList) + 1);
                    client.getLocationInView('ul.plans-list#ivrPlanList li:nth-child('+randomReasonList+')')
                    .pause(500).click('ul.plans-list#ivrPlanList li:nth-child('+randomReasonList+')').pause(3000);

                });
});



Then('submit the plans', function(){

    return client.getLocationInView("button#formSubmit.submit_btn").pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(2000);
});


Then('Assert the ivr answering title', function () {
    
    return client.waitForElementPresent('div#ivrPlanContainer div div.plan-hd h6')
                assert.containsText("div#ivrPlanContainer div div.plan-hd h6", "IVR");
  
});

Then('Assert the addons title', function () {
    
    return client.waitForElementPresent('div#addonsContainer div div.plan-hd h6')
                assert.containsText("div#addonsContainer div div.plan-hd h6", "Additional Services");
  
});

Then('clear the plans', function () {
    
    return client.getLocationInView("button#formClear").pause(1000).assert.visible('#formClear').click('#formClear').pause(3000);
    
  
});


Then('choose random plan from the addons plans', function () {
    var randomReasonList;

    // return client.getLocationInView("#popupReasonDropDownButton")
    // .pause(1000).assert.visible('#popupReasonDropDownButton')
    // .click('#popupReasonDropDownButton')
    // .elements("css selector","ul#popupReasonList li", function(reasonList){
        
    return client.getLocationInView('div#addonsContainer div div.plan-hd h6')
        .pause(1000).assert.visible('div#addonsContainer div div.plan-hd h6')
        .click('div#addonsContainer')
                .elements("css selector",'ul.plans-list#addonsList li', function(result){

                    var addonsPlanList = result.value.length;
                    console.log("Voice plan size "+ addonsPlanList);

                    randomReasonList = Math.floor((Math.random() * addonsPlanList) + 1);
                    client.getLocationInView('ul.plans-list#addonsList li:nth-child('+randomReasonList+')')
                    .pause(500).click('ul.plans-list#addonsList li:nth-child('+randomReasonList+')').pause(3000);

                });
});



