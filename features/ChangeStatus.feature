Feature: Change the status functionality


    ### DELAY BILLING CASES

    Scenario: Moving to DELAY-BILLING state

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Dormancy status - "Status"
        And select the option of delay billing in change status to
        When pass relevant data
        Then submit the process
        And validate the status in account detail - "Active | Active - Delay Billing"


    Scenario: check the clear funcationality in DELAY-BILLING

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Dormancy status - "Status"
        And select the option of delay billing in change status to
        When pass relevant data
        Then clear the process

    Scenario: check the alert for continue in DELAY-BILLING

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Dormancy status - "Status"
        And select the option of delay billing in change status to
        When pass some data over there
        Then move to credit page
        When check the alert for continue
        And validate moved to choosen credit section


    Scenario: check the alert for cancel in DELAY-BILLING

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Active or Dormancy status - "Status"
        And select the option of delay billing in change status to
        When pass some data over there
        Then move to credit page
        When check the alert for cancel
        And validate it should stay in same section with that changes - delay billing

    Scenario: Return to service from the DELAY-BILLING

        Given Open the admin tool
        When select the status change
        Then get the current status in account statuss, it should be Active - Delay Billing  - "Status"
        And select the option of return to service in change status to
        Then pass some data in notes for return to serivce from delay billing to Active
        And submit the process
        Then check the status in account detail - "Active"


    Scenario: Checking the clear functionality Return to Service

        Given Open the admin tool
        When select the status change
        Then get the current status in account statuss, it should be Active - Delay Billing  - "Status"
        And select the option of return to service in change status to
        Then pass some data in notes for return to serivce from delay billing to Active
        Then clear the process

    ### DORMANCY CASES

    Scenario: Moving to DORMANCY state

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Active status - "Status"
        And select the option of Dormancy in change status to
        When select the period and pass note
        Then submit the process
        And validate the status in account detail - "Active | Active - Dormancy"

    Scenario: check the clear funcationality in DORMANCY

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Active status - "Status"
        And select the option of Dormancy in change status to
        When select the period and pass note
        Then clear the process

    Scenario: check the alert for continue in DORMANCY

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Active status - "Status"
        And select the option of Dormancy in change status to
        When select the needed data
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
        And validate it should stay in same section with that changes - Dormancy


    ### BLOCK ACCOUNT CASES

    Scenario: Moving to BLOCK ACCOUNT state

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Active or Dormancy or Delay Billing or Notice to Block status - "Status"
        And select the option of Block Account in change status to
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

    Scenario: Moving to UNBLOCK ACCOUNT state

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Notice to Block or Block for Non Payment status - "Status"
        And select the option of Unblock Account in change status to
        When pass the notes to moving to Unblock status
        Then submit the process
        And validate the status in account detail - "Active"

    Scenario: check the clear funcationality in UNBLOCK ACCOUNT

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Notice to Block or Block for Non Payment status - "Status"
        And select the option of Unblock Account in change status to
        When pass the notes to moving to Unblock status
        Then clear the process

    Scenario: check the alert for continue in UNBLOCK ACCOUNT

        Given Open the admin tool
        When select the status change
        Then get the current status in account status, it should be Notice to Block or Block for Non Payment status - "Status"
        And select the option of Unblock Account in change status to
        When pass the notes
        Then move to rerate page
        When check the alert for continue
        And validate moved to choosen rerate section

    Scenario: check the alert for cancel in UNBLOCK ACCOUNT

        Given Open the admin tool
        When select the status change
        Then get the current status in an account status, it should be Notice to Block or Block for Non Payment status - "Status"
        And select the option of Unblock Account in change status to
        When pass the notes
        Then move to rerate page
        When check the alert for cancel
        And validate it should stay in same section with that changes - Unblock Account


    ### RETURN TO SERVICE CASES

    # Scenario: Moving to Active through return to service

    #     Given Open the admin tool
    #     When select the status change
    #     Then get the current status in account status, it should be Notice to Block or Block for Non Payment status - "Status"
    #     And select the option of return to service  in change status to
    #     When pass the notes to moving to active status
    #     Then submit the process
    #     And validate the status in account detail - "Active"
