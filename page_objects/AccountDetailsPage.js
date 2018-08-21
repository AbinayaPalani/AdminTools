
module.exports = {


    // url: 'http://yahoo.com',
    // elements: {
    //   body: 'body',
    //   searchBar: 'input[name="p"]'
    // }

   // url: 'http://staging.jbilling.a-cti.com:8081/admintool?accountPin=55e6a223-fb4d-49c6-be21-e447c1f5fc44&brandId=5a6e67a6-8bfd-45f5-a774-3462cb0c4e4c',

    elements :{
      body: 'body',
     
        AccountDetailHeader: {
            selector : "#popupHeader"
          },
          AccountDetailTitle : {
              selector : ".//a[@id='accountSummary']"
          },
          CompanyNameHeader : {
            selector : ".//label[contains(text(),'Company Name')]"
          },
          PrimaryAccountNumberHeader : {
              selector : ".//label[contains(text(),'Primary A/C')]"
          },
          customerStatusHeader : {
              selector : "#accountSummaryHolder > div:nth-child(3) > label"
          },
          industryHeader : {
              selector : "#accountSummaryHolder > div:nth-child(4) > label"
          },
          lifeTimeHeader : {
              selector : "#accountSummaryHolder > div:nth-child(5) > label"
          },
          totalPaymetHeader : {
              selector : "#accountSummaryHolder > div:nth-child(6) > label"
          },
          PaymentAndInvoiceHeader : {
              selector : "#accountSummaryHolder > div:nth-child(7) > label"
          },
          TotalCreditsHeader : {
              selector : "#accountSummaryHolder > div:nth-child(8) > label"
          },
          TotalRefundHeader : {
              selector : "#accountSummaryHolder > div:nth-child(9) > label"
          },
          TotalUsageHeader : {
              selector : "#accountSummaryHolder > div:nth-child(10) > label"
          },
          RevenuePerMinHeader : {
              selector : "#accountSummaryHolder > div:nth-child(11) > label"
          },
          CompanyNameValue : {
              selector : ".//input[@id='teamName']"
          },
          AccountNumberValue : {
              selector : ".//input[@id='primaryAccount']"
          },
          CustomerStatusValue : {
              selector : ".//input[@id='userStatus']"
          },
          lifeTimeValue : {
              selector : ".//input[@id='lifeTime']"
          },
          totalPaymentValue : {
              selector : ".//input[@id='totalPayments']"
          },
          totalCreditValue : {
              selector : ".//input[@id='totalCredits']"
          },
          totalRefundValue : {
              selector : ".//input[@id='totalRefunds']"
          },
          totalUsageValue : {
              selector : ".//input[@id='totalUsage']"
          },
          revenueValue : {
              selector : ".//input[@id='revenue']"
          },
    },
           commands: [{

            headerClick: () => {
                return this.click('@AccountDetailHeader');
            }
    
        }]

    

  
};