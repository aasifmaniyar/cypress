import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LOCATORS from "../locators/login-locators";

Given("navigate to page {string}", (url) => {
  cy.visit(url);
});

Then("verify {string} is {string}", (element, text) => {
    cy.get(`[data-test="${LOCATORS[element]}"]`).should("contain.text", text);
  });

When("user clicks on {string} button", (button) => {
    // cy.get(`button[type="submit"]`).contains(button).click(); // More reliable button selection
    cy.get(`[data-test="${LOCATORS[button]}"]`).click();
  });

When("user enters {string} in {string}", (value, field) => {
    cy.get(`[data-test="${LOCATORS[field]}"]`).type(value);
  });