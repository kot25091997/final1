$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/case1.feature");
formatter.feature({
  "name": "To register in the TestMe application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To sign up using valid details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens the test me app",
  "keyword": "Given "
});
formatter.match({
  "location": "Case1.user_opens_the_test_me_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters UserName as \"kothaisakthi\"",
  "keyword": "When "
});
formatter.match({
  "location": "Case1.user_enters_UserName_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "FirstName as \"kothai\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.firstname_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "LastName as \"Saktthi\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.lastname_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Password as \"abcdefgh123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirmpassword as \"abcdefgh123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.confirmpassword_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Gender as \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.gender_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email as \"kothhsggh@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Mobilenumber as \"9875454599\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.mobilenumber_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DOB as \"07/20/1997\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.dob_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Address as \"ooty-98\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.address_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Securityquestion as \"What is your Birth Place\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.securityquestion_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "answer as \"Mysore\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.answer_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Case1.click_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify registeration success",
  "keyword": "Then "
});
formatter.match({
  "location": "Case1.verify_registeration_success()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/main/resources/case2.feature");
formatter.feature({
  "name": "SignIn page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Different user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens SignIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click submit button as login",
  "keyword": "And "
});
formatter.step({
  "name": "verify login success",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "shwesam",
        "password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Different user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens SignIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "Case2.user_opens_SignIn_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"shwesam\"",
  "keyword": "When "
});
formatter.match({
  "location": "Case2.user_enter_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password as \"password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Case2.password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit button as login",
  "keyword": "And "
});
formatter.match({
  "location": "Case2.click_submit_button_as_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify login success",
  "keyword": "Then "
});
formatter.match({
  "location": "Case2.verify_login_success()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/main/resources/case3.feature");
formatter.feature({
  "name": "search product in the testme app",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user searches a product in testme app",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens the testme app",
  "keyword": "Given "
});
formatter.match({
  "location": "Case3.user_opens_the_testme_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the username as \"shwesam\" And password as \"password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Case3.user_enters_the_username_as_And_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit button login",
  "keyword": "And "
});
formatter.match({
  "location": "Case3.click_submit_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches the product as head and select headphone",
  "keyword": "And "
});
formatter.match({
  "location": "Case3.user_searches_the_product_as_head_and_select_headphone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clickFind button",
  "keyword": "And "
});
formatter.match({
  "location": "Case3.clickfind_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify product search success",
  "keyword": "Then "
});
formatter.match({
  "location": "Case3.verify_product_search_success()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/main/resources/case4.feature");
formatter.feature({
  "name": "search product in the testme app",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user searches a product in testme app",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opensthe testme app",
  "keyword": "Given "
});
formatter.match({
  "location": "Case4.user_opensthe_testme_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entersthe username as \"shwesam\" And password as \"password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Case4.user_entersthe_username_as_And_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit buttonlogin",
  "keyword": "And "
});
formatter.match({
  "location": "Case4.click_submit_buttonlogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches the product ashead and select headphone",
  "keyword": "And "
});
formatter.match({
  "location": "Case4.user_searches_the_product_ashead_and_select_headphone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Find button",
  "keyword": "And "
});
formatter.match({
  "location": "Case4.click_Find_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check for size of cart",
  "keyword": "And "
});
formatter.match({
  "location": "Case4.user_check_for_size_of_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify add to cart success",
  "keyword": "Then "
});
formatter.match({
  "location": "Case4.verify_add_to_cart_success()"
});
formatter.result({
  "status": "passed"
});
});