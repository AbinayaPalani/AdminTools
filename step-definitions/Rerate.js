const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');


When('check the rerate section is present', function () {
    
        return client.frame('adminTool')
                .expect.element('li#rerate_li a#rerate')
                .text.to.equal('Re-rate');
        
        
      });


 When('select the rerate section and validate the rerate section', function () {
        
        return client
                    .click('li#rerate_li a#rerate')
                    .expect.element('h4#popupHeader')
                    .text.to.equal('Re-rate');
            
            
});


When('Pass the necessary data to process the rerate', function () {




        return client.pause(5000).execute(function (title) {
                return window.getComputedStyle(document.querySelector('#rerateCreditButtonVoice'),':after').getPropertyValue('content')
            }, function (result) {
                client.assert.equal(result.value, '"This leads to Credit Adjustment Form"');
                client.click('button#rerateCreditButtonVoice.rerate-credit-button');
                client.setValue('#popupURL',"https://wwww.google.com")
                .setValue('#popupDescription', "Automation credit Adjustment");
                
            })
        
     
            
});



Then('acoording to rerate, to activate the credit for that customer', function () {

        return client.getLocationInView("button#formSubmit.submit_btn")
                .pause(1000).assert.visible('#formSubmit')
                .click('#formSubmit').pause(2000);
        



        });


Then('acoording to rerate, to De-activate the credit for that customer', function () {
                
        return client.getLocationInView("button#formClear")
                .pause(1000).assert.visible('#formClear')
                .click('#formClear').pause(4000);
                
                
                
       });
            
       Then('check the validation for whether re-rate credit under the customer it can no re-rate or already is in best plan', function () {
        
        return client.pause(5000).getText('div#popUpMessageVoiceDiv', function(RerateMessage){

                console.log('********************');
                console.log(RerateMessage);
                console.log('********************');

                client.getText('div#popUpMessageVoiceDiv b', function(messsage){
                        console.log('********************');
                        console.log(message);
                        console.log('********************');
                })
        })
           
        });


       
