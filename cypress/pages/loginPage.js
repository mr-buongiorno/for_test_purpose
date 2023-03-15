const loginPageLocators = {
  logInLink: "#login2",
  usernameField: "#loginusername",
  passwordField: "#loginpassword",
};

class LoginPage {
  logInToPage(username, password) {
    cy.get(loginPageLocators.logInLink).click();
    cy.get(loginPageLocators.usernameField).type(username); //I am not sure if it is cypress problem, but in stop typing in a random moment :-(
    cy.get(loginPageLocators.passwordField).type(password);
    cy.get("button").contains("Log in").click();
    cy.intercept("https://api.demoblaze.com/login").as("login");
    cy.wait("@login", { timeout: 12000 });
  }
}

export default LoginPage;
