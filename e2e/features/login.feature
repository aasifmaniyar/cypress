Feature: Verify login functionality

    Background:
        Given navigate to page "https://www.saucedemo.com/"


    Scenario: TC1: verification of login functionality
        When user enters "standard_user" in "Username"
        And user enters "secretsauce" in "Password"
        And user clicks on "Login" button
        Then verify "Error message" is "Epic sadface: Username and password do not match any user in this service" 