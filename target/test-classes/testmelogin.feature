Feature: login of TestMe Application

Scenario: valid login

Given user opens Testme Application
When user enters UserName as "kothaisakthi"
 And FirstName as "Anand" And LastName as "kothai"
  And Password as "Anakothaai" And Confirm Password as "Anakothaai"
And Gender as Female And Email as "abcde@gmail.com" 
And Mobile Number as"9087654321" 
And DOB as "25/09/1997" 
And Address as "Chennai-29"
And Security Question as "Which is your favour color?" 
And Answer as "blue"
And click register button
Then verify valid login 