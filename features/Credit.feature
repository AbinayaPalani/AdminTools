
Feature: Credit functionality


    @creditProcess
    Scenario: process the Credit Adjustment

        Given Open the admin tool
        When check the credit section is present
        Then select the credit section and click create credit link
        And Pass the necessary data to process the credit
        And select the reason list for credit
        Then submit the credit 

    @creditFormClear
    Scenario: clear the credit information

        Given Open the admin tool
        When check the credit section is present
        #Then select the credit section and click create credit link
        And Pass the necessary data to process the credit
        And select the reason list for credit
        Then clear the data
        

    @duplicateCreditSubmit
    Scenario: process the Credit Adjustment with duplicate credit amount


        Given Open the admin tool
        When check the credit section is present
       # Then select the credit section and click create credit link
        And Pass the necessary data to process the credit
        And select the reason list for credit
        Then submit the credit
        Then handle if duplicate credit is present so process the credit


    @duplicateCreditCancel

    Scenario: Cancel the duplicate credit adjustment
        Given Open the admin tool
        When check the credit section is present
        Then select the credit section and click create credit link
        And Pass the necessary data to process the credit
        And select the reason list for credit
        Then submit the credit and handle if duplicate credit is present so cancel the credit


    

#  Scenario Outline: Credit Adjustment in live

#         Given Open the admin tool
#         When check the credit section is present
#         Then select the credit section
#         And select the credit section and click create credit link
#         Then  process the credit with "<creditAmount>"
#         Then submit the credit

#         Examples:
#             | creditAmount |
#             | 1            |
