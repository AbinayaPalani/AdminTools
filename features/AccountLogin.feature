@Login
Feature: Login Page for CWA

    Scenario Outline: Login page and fetch the account

        Given I open the page in CWA with '<userName>'
        When fetch the account details in CWA
        Then select the billing page in CWA
        And click the Admin Tool section

        Examples:
            | userName                   | 
            | abinaya.palani@anywhere.co |
