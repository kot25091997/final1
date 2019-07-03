Feature: search product in the testme app

Scenario: user searches a product in testme app
Given user opens the testme app
When user enters the username as "shwesam" And password as "password123"
And click submit button login
And user searches the product as head and select headphone
And clickFind button
Then verify product search success
