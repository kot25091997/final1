Feature: To register in the TestMe application
Scenario: To sign up using valid details
Given user opens the test me app
When user enters UserName as "kothaisakthi" 
And FirstName as "kothai" 
And LastName as "Saktthi"
And Password as "abcdefgh123" 
And Confirmpassword as "abcdefgh123" 
And Gender as "Female" 
And Email as "kothhsggh@gmail.com" 
And Mobilenumber as "9875454599" 
And DOB as "07/20/1997" 
And Address as "ooty-98"
And Securityquestion as "What is your Birth Place"
And answer as "Mysore"
And click Register button
Then verify registeration success
