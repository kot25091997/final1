Feature: search product in the testme app

Scenario: user searches a product in testme app
Given user opensthe testme app
When user entersthe username as "shwesam" And password as "password123"
And click submit buttonlogin
And user searches the product ashead and select headphone
And click Find button
And user check for size of cart
Then verify add to cart success
