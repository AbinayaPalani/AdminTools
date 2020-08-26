
Feature: Change the status according to status change for each step actions


    Scenario: changes status functionalities

    Given check the account status is in Active
    When check change status to list to verify that list of status for active case
    Then choose Delay billing status in Change Status To 
    Then move the customer for delay billing and enter the fields
    Then check the status in account summary, if in case failed in delay billing we will be in changes status and then it has to be created a task link in top 
    Given check the account status is in Delay billing
    When check changes status to list to verify that list of status for delay billing
    Then choose return to service in Change Status To
    Then move the customer for delay billing to active and enter the fields
    Then check the status in account summary, if in case failed in delay billing to active we will be in change status and then it has to be created a task link in top
    Given check the account status is in Active
    When check change status to list to veriffy that list of status for active case
    Then choose dormancy stauts in Change Status To 
    Then move the customer for dormancy and enter the fields
    Then currently Dormancy will be holded for billing cycle end date, that we can check the note in account summary, if it is failed  it will be created a task in top
    Given check the account status is in Active | Dormancy
    When choose change status to list to verify that list of status for dormancy case
    Then move the customer for stop dormancy and enter the fields
    Then check the status in account summary, if in case failed in stop dormancy
    Given check the account status is in Low Utilization
    When check change status to verify to list of status for Low Utilization
    Then choose low utilization in Change Status To and enter the fields
    Then move the customer to low utilization
    Then currently low utilization will be holded for billing cycle end date, that we can check the note in account summary, if it is failed  it will be created a task in top
    Given check the account status is in holded Low Utilization
    When check change status to list to verify that list of status for Low Utilization
    Then choose the customer for stop low utilization
    Then check the status in account summary, if in case failed in stop dormancy
    Given check the account status is in dormancy or active or past due
    When check change status to list to verify that list of status for dormancy or active or pastDue
    Then choose the customer for block account and enter the fields
    Then check the 



    

