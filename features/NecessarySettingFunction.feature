
Feature: Additional or Needed functionality

    @accountType
    Scenario: Choosing the Account type

        Given Open the admin tool
        When Check the account type is visible or present
        Then Check whether any account type value is choosen or not and get the information of the account Type
        Then Choose the needed account type
        Then Validate selected Account Type 

    @enableAutoUpgrade
    Scenario: Enable the AutoUpgrade option

        Given Open the admin tool
        When Check whether the AutoUpgrade is present or visible, it should not show for prepaid customer
        Then Enable the autoupgrade option in admintool

    @disableAutoUpgrade
    Scenario: Disable the AutoUpgrade option

        Given Open the admin tool
        When Check whether the AutoUpgrade is present or visible, it should not show for prepaid customer
        Then Disable the autoupgrade option in admintool




    @enableAllowAch
    Scenario: Enable the Allow ACH

        Given Open the admin tool
        When Check whether the allow ach is present or visible
        Then Enable the allow ach option in admintool

    @disableAllowAch
    Scenario: Disable the Allow ACH

        Given Open the admin tool
        When Check whether the allow ach is present or visible
        Then Disable the allow ach option in admintool


     @clearAlertAllowAch
    Scenario: cancel the allow ach alert option

        Given Open the admin tool
        When check whether the allow ach is present or visible
        Then Cancel the allow ach alert with text





    @enableAutoPayWithAutoRe-enable
    Scenario: Enable the Auto Pay with Auto Re-enable 

        Given Open the admin tool
        When Check Whether the auto pay is present or visible
        Then Enable the auto pay option with Auto Re-enable


    @enableAutoPayWithoutAutoRe-enable
    Scenario: Enable the Auto Pay without Auto Re-enable 

        Given Open the admin tool
        When Check Whether the auto pay is present or visible
        Then Enable the auto pay option without Auto Re-enable

    @clearAutoPayONChosenAutoRe-enable
    Scenario: Clear autoPay with chosen of auto re-enable

        Given Open the admin tool
        When Check Whether the auto pay is present or visible
        Then 




    @disableAutoPay
    Scenario: Disable the Auto Pay

        Given Open the admin tool
        When Check whether the auto pay is present or visible
        Then Disable the auto pay option in admintool

    @enableExcludeCollection
    Scenario: Enable the exclude collection
        Given Open the admin tool
        When Check whether exclude collection is present
        Then Enable the exclude collection option

    @disableExcludeCollection
    Scenario: Disable the exclude collection
        Given Open the admin tool
        When Check whether exclude collection is present
        Then Disable the exclude collection option

