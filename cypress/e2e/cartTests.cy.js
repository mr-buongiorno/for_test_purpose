//https://docs.google.com/document/d/18tEmbvEPevI9lEhgdWSE2TFYwUl80ze1dHjnvuqeQ9U/edit
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

describe("Add cheapest mobile phone to cart" , () => {
  beforeEach(() => {
    cy.visit("/");
    //I am not able to finish this test, because this page does not work as for me POST https://api.demoblaze.com/view net::ERR_FAILED 500 (Internal Server Error)
    //Access to XMLHttpRequest at 'https://api.demoblaze.com/view' from origin 'https://www.demoblaze.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    //Thank you for your time ;-)
  });

  it("should passed successful add a product to a cart", () => {
    cy.intercept("https://api.demoblaze.com/entries").as("getEntries")
    cy.wait("@getEntries")
    loginPage.logInToPage(Cypress.env("user"), Cypress.env("password"));
    cy.wait("@getEntries")
  });
});
