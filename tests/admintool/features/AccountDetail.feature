Feature: Account Details

Scenario: Testing the account detail with relevant customer

  Given I open the admin tool page
  Then validate the "Account Details" in header 
  When hit the getUserByAccountPin service then get the data
  And Through the response data to validate in account details
