Feature: Refund Processing functionality
    @refundProcessWithFullAmount
    Scenario: process the refund Adjustment with Full Amount

        Given Open the admin tool
        When check the refund section is present
        Then click the refund section and verify the title of refund page
        Then check the transaction details for this account with successful status and click the refund link for full transaction
        Then Enter the details to process the refund transaction
        Then choose the reason for refund transaction
        Then submit the refund
        Then check refund process detail will show in recent transaction with status as pending

@refundProcessWithPartialAmount
Scenario: process the refund Adjustment with partial Amount

        Given Open the admin tool
        When check the refund section is present
        Then click the refund section and verify the title of refund page
        Then check the transaction details for this account with successful status and click the refund link for partial transaction
        Then Enter the details to process the refund transaction
        Then choose the reason for refund transaction
        Then submit the refund
        Then check refund process detail will show in recent transaction with status as pending


    @RecentRefundTransaction
Scenario: verify the recent refund transaction

        Given Open the admin tool
        When check the refund section is present
        Then verify recent refund transaction 
        
       

    @refundFormClear
    Scenario: clear the refund information

         Given Open the admin tool
        When check the refund section is present
        Then select the debit section and click create debit link
        And Pass the necessary data to process the debit
        Then clear the data