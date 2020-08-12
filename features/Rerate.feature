
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
       