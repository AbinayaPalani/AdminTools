
Feature: Additional or Needed functionality

    @accountType
    Scenario: Choosing the Account type

        Given Open the admin tool
        When Check the account type is visible or present
        Then Choose the needed account type

    @enableAutoUpgrade
    Scenario: Enable the AutoUpgrade option

        Given Open the admin tool
        When Check whether the AutoUpgrade is present or visible
        Then Enable the autoupgrade option in admintool

    @disableAutoUpgrade
    Scenario: Disable the AutoUpgrade option

        Given Open the admin tool
        When Check whether the AutoUpgrade is present or visible
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

    @enableAutoPay
    Scenario: Enable the Auto Pay

        Given Open the admin tool
        When Check Whether the auto pay is present or visible
        Then Enable the auto pay option in admintool

    @disableAutoPay
    Scenario: Disable the Auto Pay

        Given Open the admin tool
        When Check whether the auto pay is present or visible
        Then Disable the auto pay option in admintool