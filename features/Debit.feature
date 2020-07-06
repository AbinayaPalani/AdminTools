
Feature: Debit functionality


@debitFormClear
    Scenario: clear the debit information

         Given Open the admin tool
        When check the debit section is present
        Then select the debit section and click create debit link
        And Pass the necessary data to process the debit
        And select the reason list for debit
        Then clear the data


    @debitProcess
    Scenario: process the Debit Adjustment

        Given Open the admin tool
        When check the debit section is present
       ## Then select the debit section and click create debit link
        And Pass the necessary data to process the debit
        And select the reason list for debit
        Then submit the debit
        
    @duplicateDebitSubmit
    Scenario: process the Debit Adjustment with duplicate Debit amount


         Given Open the admin tool
        When check the debit section is present
        Then select the debit section and click create debit link
        And Pass the necessary data to process the debit
        And select the reason list for debit
        Then submit the debit and handle if duplicate debit is present so process the debit adjustment


    @duplicateDebitCancel

    Scenario: Cancel the duplicate Debit adjustment
        Given Open the admin tool
        When check the debit section is present
        Then select the debit section and click create debit link
        And Pass the necessary data to process the debit
        And select the reason list for debit
        Then submit the debit and handle if duplicate debit is present so cancel the debit adjustment

    

#  Scenario Outline: Debit Adjustment in live

#         Given Open the admin tool
#         When check the debit section is present
#         Then select the debit section
#         And select the debit section and click create debit link
#         Then  process the debit with "<debitAmount>"
#         Then submit the debit

#         Examples:
#             | debitAmount |
#             | 1            |
