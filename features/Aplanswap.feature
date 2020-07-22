Feature: Planswap on admin tool

@voicePlan
Scenario: plan swap on voice plan

Given Open the admin tool
When check the planswap section is present
Then select the planswap section
Then Assert the live answering title
Then choose random plan from the voice plans
Then submit the plans

@ivrPlan
Scenario: plan swap on ivr plan

Given Open the admin tool
When check the planswap section is present
Then select the planswap section
Then Assert the ivr answering title
Then choose random plan from the ivr plans
Then submit the plans

@addon
Scenario: plan swap on addons plan


Given Open the admin tool
When check the planswap section is present
Then select the planswap section
Then Assert the addons title
Then choose random plan from the addons plans
Then submit the plans

@clearPlan
Scenario: clear the selected plan

Given Open the admin tool
When check the planswap section is present
Then select the planswap section
Then Assert the live answering title
Then choose random plan from the voice plans
Then clear the process

