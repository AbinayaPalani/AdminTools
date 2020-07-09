const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');


When('Check the account type is visible or present', function () {

    return client.frame('adminTool').assert.visible('ul#sidebar_settings li:nth-child(2) h5');

   // return client.frame('adminTool').assert.waitForElementPresent("//ul[@class='settings']/li/h5[contains(text(),'Account Type')]");
   
});

var randomAccountType;

Then('Check whether any account type value is choosen or not and get the information of the account Type', function(){

    return client.waitForElementPresent("button#accountTypeButton span#accountType",5000).pause(1000).getText("button#accountTypeButton span#accountType", function(result) {
        console.log('getText result', result.value);
      });

});

Then('Choose the needed account type', function () {
    var randomAccountType;
    return client.getLocationInView("button#accountTypeButton span#accountType").
    pause(2000).assert.visible('button#accountTypeButton span#accountType').
    click('button#accountTypeButton span#accountType').elements("css selector","#accountTypeList li", function(reasonList){
        
   // return client.waitForElementPresent("button#accountTypeButton span#accountType",5000).pause(2000)
                // .click('css selector','button#accountTypeButton span#accountType').elements('css selector','#accountTypeList li a', function(accountTypeList){

                    randomAccountType = Math.floor((Math.random() * reasonList.value.length) + 1);

                   console.log("Random number to select the account type : "+randomAccountType);

                     client.click('#accountTypeList li:nth-child('+randomAccountType+') a.accountType').pause(2000);
          
                });


   
});

Then('Validate selected Account Type', function(){


   // console.log("Random number of select the account type: "+randomAccountType);

//     return client.getValue('css selector','#accountTypeList > li:nth-child('+randomAccountType+') > a.accountType', function(AccountType) {

//         console.log("AccountType 1: "+AccountType);
//         console.log("AccountType 1: "+AccountType.value);

//        // client.expect.element('#popupReasonDropDownButton').text.to.contain(AccountType.value);

        
// });
return client.getText('#accountTypeList li a', function(AccountType) {

    console.log("AccountType 2: "+AccountType.value);

   // client.expect.element('#popupReasonDropDownButton').text.to.contain(AccountType.value);

    
});


})


When('Check whether the AutoUpgrade is present or visible, it should not show for prepaid customer', function () {

    return client.frame('adminTool').waitForElementPresent("ul#sidebar_settings li#autoUpgradeToogle_li");
                
   
});

Then('Enable the autoupgrade option in admintool', function () {

    return client.assert.visible('span#autoUpgradeToogle.togl_butn', function(){

       client.expect.element('span#autoUpgradeToogle.togl_butn').click('#autoUpgradeToogle');

    });

   
});

Then('Disable the autoupgrade option in admintool', function () {

    return client.assert.visible('span#autoUpgradeToogle.togl_butn.butn_on', function(){

        client.expect.element('span#autoUpgradeToogle.togl_butn.butn_on').click('#autoUpgradeToogle');
 
     });
});

When('Check whether the allow ach is present or visible', function () {

    return client.frame('adminTool').waitForElementPresent("ul#sidebar_settings li#allowACHtoogle_li h5");

   
});

Then('Enable the allow ach option in admintool', function () {

   
   //return client.frame('adminTool').waitForElementPresent('span#allowACHtoogle',500).pause(2000).moveToElement('span#allowACHtoogle',5,5).doubleClick();

   return client.assert.visible('span#allowACHtoogle').pause(100).click('span#allowACHtoogle').pause(500)
   .assert.containsText("p#alertTextContent", "Reason for Turning AllowACH ON")
   .setValue('div#reasonForToggle textarea#toggleReason','Testing autopay with renewable options')
   .click('div#buttonWrapper button#proceedToggle').pause(1000);


    // return client.assert.visible('span#allowACHtoogle.togl_butn');
    // client.expect.element('span#allowACHtoogle.togl_butn').click('#allowACHtoogle');
 
     
   
});

Then('Disable the allow ach option in admintool', function () {

   
    return client.assert.visible('span#allowACHtoogle').pause(100).click('span#allowACHtoogle').pause(500)
    .assert.containsText("p#alertTextContent", "Reason for Turning AllowACH OFF")
    .setValue('div#reasonForToggle textarea#toggleReason','Testing autopay with renewable options')
    .click('div#buttonWrapper button#proceedToggle').pause(1000);

});

Then('Enable or disable the allow ach option and set the value and then cancel the alert', function(){

    return client.pause(200).useCss().getLocationInView('span#allowACHtoogle.togl_butn').pause(500).assert.visible('span#allowACHtoogle.togl_butn').click('span#allowACHtoogle.togl_butn').click('span#allowACHtoogle.togl_butn', function(){

        client.waitForElementPresent('textarea#toggleReason',1000).setValue('textarea#toggleReason','Through automation enabling allow ach option').click('button#closeReason');
        
       });
 
    

});

When('Check whether the auto pay is present or visible', function () {

    return client.frame('adminTool').assert.visible('li#allowACHtoogle_li h5');
    
   
  });




Then('Enable the auto pay option', function () {

    return client.assert
    .visible('span#autoPayToogle.togl_butn').pause(100)
    .click('span#autoPayToogle.togl_butn')
    .setValue('div#reasonForToggle textarea#toggleReason','Testing auto-pay enable for admin tool').pause(100)
    .click('div#buttonWrapper button#proceedToggle');
 
 
   
});

Then('Disable the auto pay option in admintool with renewable date', function () {

    return client.assert.visible('span#autoPayToogle.togl_butn.butn_on').pause(100).click('span#autoPayToogle.togl_butn.butn_on').pause(500)
        .setValue('div#autoRe-enableDateDiv input#autoRe-enableDate','25072020').pause(100)
        .setValue('div#reasonForToggle textarea#toggleReason','Testing autopay with renewable options')
        .click('div#buttonWrapper button#proceedToggle').pause(1000);
 
  
   
   
});

Then('Cancel the autopay option', function() {
    
        return client.assert.visible('span#autoPayToogle.togl_butn')
            .click('span#autoPayToogle.togl_butn').pause(500)
            .click('div#buttonWrapper button#closeReason').pause(500);
 
    });

    Then('Cancel the allow ach option', function () {
        
            return client.assert.visible('span#allowACHtoogle')
                .click('span#allowACHtoogle').pause(500)
                .click('div#buttonWrapper button#closeReason').pause(500);
     
        });
    

    Then('Cancel the excess usage charges option', function() {
            
                return client.assert.visible('span#excessUsageChargesToogle')
                    .click('span#excessUsageChargesToogle').pause(500)
                    .click('div#buttonWrapper button#closeReason').pause(500);
         
    });



    Then('Cancel the exclude collection option', function() {
        
            return client.assert.visible('span#autoCollectionToogle')
                .click('span#autoCollectionToogle').pause(500)
                .click('div#buttonWrapper button#closeReason').pause(500);
     
});




When('Check whether exclude collection is present', function () {

    return client.frame('adminTool').waitForElementPresent("#sidebar_settings li:nth-child(6) h5");

   
});

Then('Enable the exclude collection option', function () {

    return client.assert.visible('span#autoCollectionToogle').pause(100).click('span#autoCollectionToogle').pause(500)
    .setValue('div#reasonForToggle textarea#toggleReason','Testing autopay with renewable options')
    .click('div#buttonWrapper button#proceedToggle').pause(2000);

   
});

Then('Disable the exclude collection option', function () {

    return client.assert.visible('span#autoCollectionToogle').pause(100).click('span#autoCollectionToogle').pause(500)
    .setValue('div#autoRe-enableDateDiv input#autoRe-enableDate','25072020').pause(100)
    .setValue('div#reasonForToggle textarea#toggleReason','Testing autopay with renewable options')
    .click('div#buttonWrapper button#proceedToggle').pause(2000);
   
});



Then('Check whether excess usage charges is present', function () {
   
    return client.frame('adminTool').waitForElementPresent("#sidebar_settings li:nth-child(7) h5");
           
});

    Then('Disable the excess usage charges option', function () {
        
        return client.assert.visible('span#excessUsageChargesToogle').pause(100).click('span#excessUsageChargesToogle').pause(500)
        .setValue('div#autoRe-enableDateDiv input#autoRe-enableDate','25072020').pause(100)
        .setValue('div#reasonForToggle textarea#toggleReason','Testing autopay with renewable options')
        .click('div#buttonWrapper button#proceedToggle').pause(2000);
        
        
});
     

Then('Enable the excess usage charges option', function () {
    
    return client.assert.visible('span#excessUsageChargesToogle').pause(100).click('span#excessUsageChargesToogle').pause(500)
    .setValue('div#reasonForToggle textarea#toggleReason','Testing autopay with renewable options')
    .click('div#buttonWrapper button#proceedToggle').pause(2000);
    
    
});


Then('During enabling with excess usage charges option on this case if there is no autopay enable means do the enable of autopay and then enable the excessusage', function () {
    
    return client.assert.visible('span#excessUsageChargesToogle').pause(100).click('span#excessUsageChargesToogle').pause(500)
    .assert.containsText("p#alertTextContent", "Please make sure the 'Auto Pay' should be enabled before proceeding.") 
    .pause(1000)
    .click('div#buttonWrapper button#closeAlertButton')   
     .assert.visible('span#autoPayToogle.togl_butn').pause(100)
    .click('span#autoPayToogle.togl_butn')
    .setValue('div#reasonForToggle textarea#toggleReason','Testing auto-pay enable for admin tool').pause(100)
    .click('div#buttonWrapper button#proceedToggle').pause(3000)
    .click('span#excessUsageChargesToogle').pause(500)
    .setValue('div#reasonForToggle textarea#toggleReason','Testing autopay with renewable options')
    .click('div#buttonWrapper button#proceedToggle').pause(2000);
    
    
});

