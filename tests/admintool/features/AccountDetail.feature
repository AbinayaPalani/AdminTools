Feature: Account Details

  Scenario Outline: Testing the account detail with relevant customer

    Given I open the admin tool page '<accountPin>' and '<brandId>'
    Then validate the "Account Details" in header
    When hit the getUserByAccountPin service then get the data with '<accountPin>' and '<brandId>'
    And Through the response data to validate in account details

    Examples:
      | accountPin                           | brandId                              |
      | 55e6a223-fb4d-49c6-be21-e447c1f5fc44 | 5a6e67a6-8bfd-45f5-a774-3462cb0c4e4c |