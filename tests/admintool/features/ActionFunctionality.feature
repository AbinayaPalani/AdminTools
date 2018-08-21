Feature: Action functionality

Scenario: To test the action functionality in admin tool

  Given Verify and validate is in "Change Status" section
  And If user is in active status
  When Check account status is in visible and enabled or not
  Then Click the account status, and check the list
  When Check whether necessary list as showing when the customer is in Active state - cancel account, delay billing, dormancy, and block account
  Then verify list of action is in enabled or not
  And Hover the particular action, check whether it is hovering or not
  When Click the Cancel Account, Header is to "Delay Billing", and Account Status name as "Delay Billing"
  Then send the 
  When Click the Cancel Account, Header is to "Cancel Account", and Account Status name as "Cancel Account"


