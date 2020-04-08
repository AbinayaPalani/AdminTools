
Feature: Debit functionality
    @debitProcess
    Scenario: process the Debit Adjustment

        Given Open the admin tool
        When check the debit section is present
        Then select the debit section and click create debit link
        And Pass the necessary data to process the debit
        And select the reason list for debit
        Then submit the debit

    @debitFormClear
    Scenario: clear the debit information

         Given Open the admin tool
        When check the debit section is present
        Then select the debit section and click create debit link
        And Pass the necessary data to process the debit
        Then clear the data
        
    

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
