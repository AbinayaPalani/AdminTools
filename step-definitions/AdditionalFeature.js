const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');


When('Check the account type is visible or present', function () {

    return client.frame('adminTool').useXpath().waitForElementPresent("//ul[@class='settings']/li/h5[contains(text(),'Account Type')]");

   // return client.frame('adminTool').assert.waitForElementPresent("//ul[@class='settings']/li/h5[contains(text(),'Account Type')]");
   
});

var randomAccountType;

Then('Check whether any account type value is choosen or not and get the information of the account Type', function(){


    return client.waitForElementPresent("//span[@id='accountType']",5000).getText('css selector', "//span[@id='accountType']", function(result) {
        console.log('getText result', result.value);
      });

});

Then('Choose the needed account type', function () {


    return client.useXpath().waitForElementPresent("//span[@id='accountType']",5000)
                 .click('css selector','button#accountTypeButton span#accountType').elements('css selector','#accountTypeList li a', function(accountTypeList){

                   randomAccountType = Math.floor((Math.random() * accountTypeList.value.length) + 1);

                   console.log("Random number to select the account type : "+randomAccountType);

                    return client.click('css selector', '#accountTypeList li:nth-child('+randomAccountType+') a.accountType');

                        
                });

              return client.waitForElementPresent('#notification', 5000);

   
});

Then('Validate selected Account Type', function(){


   // console.log("Random number of select the account type: "+randomAccountType);

//     return client.getValue('css selector','#accountTypeList > li:nth-child('+randomAccountType+') > a.accountType', function(AccountType) {

//         console.log("AccountType 1: "+AccountType);
//         console.log("AccountType 1: "+AccountType.value);

//        // client.expect.element('#popupReasonDropDownButton').text.to.contain(AccountType.value);

        
// });
return client.getText('css selector','#accountTypeList li a', function(AccountType) {

    console.log("AccountType 2: "+AccountType.value);

   // client.expect.element('#popupReasonDropDownButton').text.to.contain(AccountType.value);

    
});


})


When('Check whether the AutoUpgrade is present or visible, it should not show for prepaid customer', function () {

    return client.frame('adminTool').useXpath().waitForElementPresent("//ul[@class='settings']/li/h5[contains(text(),'Auto Upgrade')]");
                
   
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

    return client.frame('adminTool').useXpath().waitForElementPresent("//ul[@class='settings']/li/h5[contains(text(),'Allow ACH')]");

   
});

Then('Enable the allow ach option in admintool', function () {

   
   //return client.frame('adminTool').waitForElementPresent('span#allowACHtoogle',500).pause(2000).moveToElement('span#allowACHtoogle',5,5).doubleClick();

   return client.pause(200).useCss().getLocationInView('span#allowACHtoogle.togl_butn').pause(500).assert.visible('span#allowACHtoogle.togl_butn').click('span#allowACHtoogle.togl_butn', function(){

     client.waitForElementPresent('textarea#toggleReason',1000).setValue('textarea#toggleReason','Through automation enabling allow ach option').waitForElementPresent('button#closeReason',1000).click('button#closeReason');
   }

);

    // return client.assert.visible('span#allowACHtoogle.togl_butn');
    // client.expect.element('span#allowACHtoogle.togl_butn').click('#allowACHtoogle');
 
     
   
});

Then('Disable the allow ach option in admintool', function () {

    return client.pause(200).useCss().getLocationInView('span#allowACHtoogle.togl_butn.butn_on').pause(500).assert.visible('span#allowACHtoogle.togl_butn.butn_on').click('span#allowACHtoogle.togl_butn.butn_on').click('span#allowACHtoogle.togl_butn.butn_on', function(){

        client.waitForElementPresent('textarea#toggleReason',1000).setValue('textarea#toggleReason','Through automation enabling allow ach option').click('button#proceedToggle');
    });


});

Then('Enable or disable the allow ach option and set the value and then cancel the alert', function(){

    return client.pause(200).useCss().getLocationInView('span#allowACHtoogle.togl_butn').pause(500).assert.visible('span#allowACHtoogle.togl_butn').click('span#allowACHtoogle.togl_butn').click('span#allowACHtoogle.togl_butn', function(){

        client.waitForElementPresent('textarea#toggleReason',1000).setValue('textarea#toggleReason','Through automation enabling allow ach option').click('button#closeReason');
        
       });
 
    

});



When('Check Whether the auto pay is present or visible', function () {

    return client.frame('adminTool').useXpath().waitForElementPresent("//ul[@class='settings']/li/h5[contains(text(),'Auto Pay')]");

   
});

Then('Enable the auto pay option in admintool', function () {

    return client.assert.visible('span#autoPayToogle.togl_butn', function(){

        client.expect.element('span#autoPayToogle.togl_butn').click('#autoPayToogle');
 
     });
   
});

Then('Disable the auto pay option in admintool', function () {

    return client.assert.visible('span#autoPayToogle.togl_butn.butn_on', function(){

        client.expect.element('span#autoPayToogle.togl_butn.butn_on').click('#autoPayToogle');
 
     });
   
   
});

When('Check whether exclude collection is present', function () {

    return client.frame('adminTool').useXpath().waitForElementPresent("//ul[@class='settings']/li/h5[contains(text(),'Exclude Collection')]");

   
});

Then('Enable the exclude collection option', function () {

    return client.assert.visible('span#excludeCollectionToogle.togl_butn', function(){

        client.expect.element('span#excludeCollectionToogle.togl_butn').click('#excludeCollectionToogle');
 
     });
   
});

Then('Disable the exclude collection option', function () {

    return client.assert.visible('span#excludeCollectionToogle.togl_butn.butn_on', function(){

        client.expect.element('span#excludeCollectionToogle.togl_butn.butn_on').click('#excludeCollectionToogle');
 
     });
   
   
});
