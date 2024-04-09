import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("{string} are {String}", (value, option) => {
if(option === 'visible')
  cy.get(`[data-test="${LOCATORS[value]}"]`).should("be.visible");
else 
  cy.get(`[data-test="${LOCATORS[value]}"]`).should("not.be.visible");
});

When("user selects {string} from dropdown", (option) => {
  cy.get(`[data-test="${LOCATORS["Product sort dropdown"]}"]`).select(option); // Assuming sort dropdown has `data-test` attribute
});

When("user adds {string} listed product to cart", (position) => {
  cy.get(`[data-test='product-list'] button`).eq(position - 1).click(); // Assuming buttons have `data-test` attribute and use zero-based indexing
});

Then("user enters empty value in {string}", (field) => {
  cy.get(`[data-test="${LOCATORS[field]}"]`).type("{enter}"); // Simulates typing an empty value and submitting
});