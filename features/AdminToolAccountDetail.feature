Feature: Account Details
    @accountDetail
    Scenario: Validating the account details

        Given Open the admin tool
        Then validate the "Account Details" in header
        When hit the getUserByAccountPin service and compare data with response data
        Then validate the company name
        Then validate the primary account number
        Then validate the account status
        Then validate the industry value
        

        # Examples:
        #     | accountPin                           | brandId                              |
        #     | 3ede6ca3-fded-45b5-8795-2dea89a47f23 | b2f8613c-0d56-40ae-a41d-55aceca62e86 |

    @updateIndustry
    Scenario: Updating the industry value

        Given Open the admin tool
        When validating the hover of edit option
        Then click the edit option
        And typing and select the option in an industry
        Then update an industry
        Then validate updated value

    @closefunc
    Scenario: Check the close button functionality

        Given Open the admin tool
        When validating the hover of edit option
        Then click the edit option
        And click the close button and validate it

    # @updateGoLiveDate
    # Scenario: Update the GoLiveDate

    #     Given Open the admin tool
    #     When validating the hover of edit option
    #     Then click the edit option
    #     And select the random future date
    #     Then udpate the golivedate
        
    # @cancelButton
    # Scenario: Check the alert for cancel in a choosen of industry

    #     Given Open the admin tool
    #     When validating the hover of edit option and should be in account summary page
    #     Then click the edit option
    #     And typing and select the option in an industry
    #     Then Move to change status section in an admin tool
    #     When check the alert for cancel
    #     And validate it should stay in same section with that changes - industry

    # @continueButton
    #  Scenario: Check the alert for continue in a choosen of industry

    #     Given Open the admin tool
    #     When validating the hover of edit option and should be in account summary page
    #     Then click the edit option
    #     And typing and select the option in an industry
    #     Then Move to change status section in an admin tool
    #     When check the alert for continue
    #     And validate moved to choosen change status section

    # Scenario: Check the alert for continue in an goLiveDate

    #     Given Open the admin tool
    #     When validating the hover of edit option
    #     Then click the edit option
    #     And Adjust the goLiveDate
    #     Then Move to change status section in an admin tool
    #     When check the alert for continue
    #     And validate moved to choosen change status section

    # Scenario: Check the alert for cancel in an industry

    #     Given Open the admin tool
    #     When validating the hover of edit option
    #     Then click the edit option
    #     And Adjust the goLiveDate
    #     Then Move to change status section in an admin tool
    #     When check the alert for cancel
    #     And validate it should stay in same section with that changes - industry