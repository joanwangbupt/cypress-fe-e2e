Feature: loginGmail
Scenario: login Gmail with valid credentials

Given open the gmail homePage
When click signIn
And input valid emailAddress
And input valid password
Then get the 2nd step virification message