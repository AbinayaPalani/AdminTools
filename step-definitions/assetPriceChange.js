import { fuchsia } from 'color-name';

const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');


When('check the AssetPrice section is present', function () {

    return client.frame('adminTool')
            .expect.element('li#changeAssetPrice_li a#changeAssetPrice')
            .text.to.equal('Change Asset price');
    
    
  });



  Then('select the AssetPrice section', function () {

    return client.pause(3000).click('li#changeAssetPrice_li a#changeAssetPrice');
               
    
  });


  Then('Check whether asset is present or not and then update the asset price', function () {

    var randomnAssetList;

    return client.assert
                .visible('div#assetInfoDiv table:nth-child(2)#assetTable', function(){

                    if(client.expect.element('div#assetInfoDiv table:nth-child(2)#assetTable tbody tr').to.be.present){
                    client.pause(1000).elements("css selector","div#assetInfoDiv table:nth-child(2)#assetTable tbody tr", function(assetList){

                        randomnAssetList = Math.floor((Math.random() * assetList.value.length) + 1);
                        client.getLocationInView('div#assetInfoDiv table:nth-child(2)#assetTable tr:nth-child('+randomnAssetList+') td:nth-child(3) i').pause(500).click('div#assetInfoDiv table:nth-child(2)#assetTable tr:nth-child('+randomnAssetList+') td:nth-child(3) i')
                        .setValue('div#assetInfoDiv table:nth-child(2)#assetTable tr:nth-child(1) td:nth-child(3) span.editAssetPrice_span',"1.09");

                    });
                }
                else
                {
                    console.log('Asset is not present under a customer')
                }

                });
   
  });

  Then('submit the process for asset price change', function () {

    return client.getLocationInView("button#formSubmit.submit_btn").pause(1000).assert.visible('#formSubmit').click('#formSubmit').pause(2000);
    
    
  });

  Then('cancel the process for asset price change', function () {
      
    return client.getLocationInView("button#formClear").pause(1000).assert.visible('#formClear').click('#formClear').pause(4000);
    
  });

