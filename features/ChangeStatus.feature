Feature: Change the status functionality


    ### DELAY BILLING CASES
  @clearDelayBilling
    Scenario: check the clear funcationality in DELAY-BILLING

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the delay billing option
        When select the period and pass note
        Then clear the process

    @continueToChange
    Scenario: check the alert for continue to change the someother page  while in DELAY-BILLING section

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the delay billing option
        When select the period and pass note
        Then move to credit page
        When check the alert for continue
        And validate moved to choosen credit section

    @alertToCancelDB
    Scenario: check the alert to cancel to change the someother page and it should be stay  in DELAY-BILLING

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the delay billing option       
        When select the period and pass note
        Then move to credit page
        When check the alert for cancel
        And validate it should stay in same section with that changes - delay billing and clear the info


    @delayBilling
    Scenario: Move to DELAY-BILLING state

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the delay billing option
        When select the period and pass note
        Then submit the process
        And validate the status in account detail - "Active | Delay Billing"


    @delayBillingToActiveToClear
    Scenario: Checking the clear functionality Return to Service from Delay Billing

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Active - Delay Billing
        And select the option of return to service in change status to
        Then pass some data in notes for return to serivce from delay billing to Active
        Then clear the process


    @delayBillingToActive
    Scenario: Return to service from the DELAY-BILLING

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Active - Delay Billing
        And select the option of return to service in change status to
        Then pass some data in notes for return to serivce from delay billing to Active
        And submit the process
        Then check the status in account detail - "Active"


    ### DORMANCY CASES


    @Dormancy
    Scenario: Move to DORMANCY state

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the Dormancy option
        When select the period and pass note
        Then submit the process
        And validate the status in account detail - "Active | Dormancy"

    Scenario: check the clear funcationality in DORMANCY

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the Dormancy option
        When select the period and pass note
        Then clear the process

    Scenario: check the alert for continue in DORMANCY

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the Dormancy option
        When  select the period and pass note
        Then move to debit page
        When check the alert for continue
        And validate moved to choosen debit section

    Scenario: check the alert for cancel in DORMANCY

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active status - "Status"
        And select the option of Dormancy in change status to
        When pass some data over there
        Then move to debit page
        When check the alert for cancel
        And validate it should stay in same Dormancy section 

    @DorToActive
    Scenario: Return to service from the Dormancy

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Active | Dormancy
        And select the option of return to service in change status to
        Then pass some data in notes for return to serivce from dormancy to Active
        And submit the process
        Then check the status in account detail - "Active"


    Scenario: Checking the clear functionality Return to Service from Dormancy

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Active - Delay Billing
        And select the option of return to service in change status to
        Then pass some data in notes for return to serivce from delay billing to Active
        Then clear the process


    ### BLOCK ACCOUNT CASES

    @blockAccount
    Scenario: Move to BLOCK ACCOUNT state

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the Block option
        When pass the notes to moving to block status
        Then submit the process
        And validate the status in account detail - "Active | Blocked for Non-Payment"

    Scenario: check the clear funcationality in BLOCK ACCOUNT

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Active or Dormancy or Delay Billing or Notice to Block status - "Status"
        And select the option of Block Account in change status to
        When pass the notes to moving to block status
        Then clear the process

    Scenario: check the alert for continue in BLOCK ACCOUNT

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Active or Dormancy or Delay Billing or Notice to Block status - "Status"
        And select the option of Block Account in change status to
        When pass the notes
        Then move to refund page
        When check the alert for continue
        And validate moved to choosen refund section

    Scenario: check the alert for cancel in BLOCK ACCOUNT

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Dormancy or Delay Billing or Notice to Block status - "Status"
        And select the option of Block Account in change status to
        When pass the notes
        Then move to refund page
        When check the alert for cancel
        And validate it should stay in same section with that changes - Block Account


    ### UNBLOCK ACCOUNT CASES
    @Unblock
    Scenario: Move to UNBLOCK ACCOUNT state

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Notice to Block or Block for Non Payment status
        And select the option of Unblock Account in change status to
        When pass the notes to moving to Unblock status
        Then submit the process
        And unblock the customer and validate that customer

    Scenario: check the clear funcationality in UNBLOCK ACCOUNT

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Notice to Block or Block for Non Payment status
        And select the option of Unblock Account in change status to
        When pass the notes to moving to Unblock status
        Then clear the process

    Scenario: check the alert for continue in UNBLOCK ACCOUNT

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Notice to Block or Block for Non Payment status
        And select the option of Unblock Account in change status to
        When pass the notes
        Then move to rerate page
        When check the alert for continue
        And validate moved to choosen rerate section

    Scenario: check the alert for cancel in UNBLOCK ACCOUNT

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Notice to Block or Block for Non Payment status
        And select the option of Unblock Account in change status to
        When pass the notes
        Then move to rerate page
        When check the alert for cancel
        And validate it should stay in same section with that changes - Unblock Account


### Move to Cancellation

    @cancellation
    Scenario: Move to cancellation

        Given Open the admin tool
        When select the status change
        Then Select the option of cancellation  in change status to
        When pass the needed information to move to cancellation
        Then choose the reason to move for cancellation
        Then submit the process
        Then validate in account Summary page




### Stop Cancellation

    @stopCancellation
    Scenario: Move to stopCancellation

        Given Open the admin tool
        When select the status change
        Then Select the option of stopCancellation  in change status to
        When pass the neeeded information for stop cancellation
        Then submit the process
        Then validate in account Summary page for stop cancellation



### RETURN TO SERVICE CASES

# Scenario: Moving to Active through return to service

#     Given Open the admin tool
#     When select the status change
#     Then get the current status in account status, it should be Notice to Block or Block for Non Payment status - "Status"
#     And select the option of return to service  in change status to
#     When pass the notes to moving to active status
#     Then submit the process
#     And validate the status in account detail - "Active"


## Move to Low-Utilization


 @lowUtilization
    Scenario: Move to low-utilization state

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Active | Past Due or Active | Notice to Block or Active | Unpaid and choose the low utilization option
        When select the period and pass note
        Then submit the process
        And validate the status in account detail - "Active | Low Utilization Plan"