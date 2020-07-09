
Feature: Additional or Needed functionality
##Account type update
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


##Allow ACH

    @enableAllowAch
    Scenario: Enable the Allow ACH

        Given Open the admin tool
        When Check whether the allow ach is present or visible
        Then Enable the allow ach option in admintool


    @enableAllowAchWithCancel
    Scenario: Cancel the Enable of Allow ACH

        Given Open the admin tool
        When Check whether the allow ach is present or visible
        Then Cancel the allow ach option

    @disableAllowAch
    Scenario: Disable the Allow ACH

        Given Open the admin tool
        When Check whether the allow ach is present or visible
        Then Disable the allow ach option in admintool

    @disableAllowAchWithCancel
    Scenario: Cancel the Enable of Allow ACH

        Given Open the admin tool
        When Check whether the allow ach is present or visible
         Then Cancel the allow ach option





###AUTOPAY

    @enableAutoPayCancel
    Scenario: Disable the Auto Pay with renewable date

        Given Open the admin tool
        When Check whether the auto pay is present or visible
        Then Cancel the autopay option

    @enableAutoPay
    Scenario: Enable the Auto Pay with Auto Re-enable 

        Given Open the admin tool
        When Check whether the auto pay is present or visible
        Then Enable the auto pay option



    @disableAutoPayOnCancel
    Scenario: cancel the disable for auto-pay

        Given Open the admin tool
        When Check whether the auto pay is present or visible
        Then Cancel the autopay option

    @disableAutoPayWithRenewableDate
    Scenario: Disable the Auto Pay with renewable date

        Given Open the admin tool
        When Check whether the auto pay is present or visible
        Then Disable the auto pay option in admintool with renewable date

         
    
##Exclude 


    @enableExcludeCollection
    Scenario: Enable the exclude collection
        Given Open the admin tool
        When Check whether exclude collection is present
        Then Enable the exclude collection option

        @enableExcludeCollectionWithCancel
    Scenario: Enable the exclude collection
        Given Open the admin tool
        When Check whether exclude collection is present
         Then Cancel the exclude collection option

    @disableExcludeCollection
    Scenario: Disable the exclude collection
        Given Open the admin tool
        When Check whether exclude collection is present
        Then Disable the exclude collection option

    @disableExcludeCollectionWithCancel
    Scenario: Disable the exclude collection
        Given Open the admin tool
        When Check whether exclude collection is present
       Then Cancel the exclude collection option

##ExcessUsage 


    @enableExcessUsageOnAutoPayON
    Scenario: Enable the excess usage charges and if there is not auto pay enable and enable it and then process it
        Given Open the admin tool
        When Check whether excess usage charges is present
        Then During enabling with excess usage charges option on this case if there is no autopay enable means do the enable of autopay and then enable the excessusage 


  @disableExcessUsageWithCancel
    Scenario: Cancel the excess usage charges
        Given Open the admin tool
        When Check whether excess usage charges is present
       Then Cancel the excess usage charges option


        @enableExcessUsageWithCancel
    Scenario: Cancel the excess usage charges
        Given Open the admin tool
        When Check whether excess usage charges is present
         Then Cancel the excess usage charges option


    @enableExcessUsage
    Scenario: Enable the excess usage charges
        Given Open the admin tool
        When Check whether excess usage charges is present
        Then Enable the excess usage charges option


    @disableExcessUsage
    Scenario: Disable the excess usage charges
        Given Open the admin tool
        When Check whether excess usage charges is present
        Then Disable the excess usage charges option

