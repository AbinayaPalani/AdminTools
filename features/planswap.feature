Feature: Planswap on admin tool

    Scenario: plan swap on voice plan

        Given Open the admin tool
        When check the planswap section is present
        Then select the planswap section
        Then choose random plan from the voice plans
        And click the Admin Tool section


Scenario: plan swap on ivr plan


       Given Open the admin tool
       When check the planswap section is present
       Then select the planswap section
       Then choose random plan from the ivr plans


Scenario: plan swap on ivr plan


        Given Open the admin tool
        When check the planswap section is present
        Then select the planswap section
        Then choose random plan from the addons plans
