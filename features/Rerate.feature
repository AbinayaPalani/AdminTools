
Feature: Rerate functionality


@re-rateProcess
    Scenario: process the re-rate information

        Given Open the admin tool
        When check the rerate section is present
        Then select the rerate section and validate the rerate section
        And Pass the necessary data to process the rerate
        And acoording to rerate, to activate the credit for that customer


@re-rateClear
    Scenario: clear the re-rate information

        Given Open the admin tool
        When check the rerate section is present
        Then select the rerate section and validate the rerate section
        And Pass the necessary data to process the rerate
        And acoording to rerate, to De-activate the credit for that customer

@re-rateCheck
    Scenario: Check the re-rate information

        Given Open the admin tool
        When check the rerate section is present
        Then check the validation for whether re-rate credit under the customer it can no re-rate or already is in best plan

       