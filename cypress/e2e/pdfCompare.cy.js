//https://docs.google.com/document/d/18tEmbvEPevI9lEhgdWSE2TFYwUl80ze1dHjnvuqeQ9U/edit

describe("Compare two pdf files", () => {
  beforeEach(() => {
    cy.fixture("success.pdf", null).as("successFile");
    cy.fixture("successCopy.pdf",null).as("successCopyFile");
    //cy.fixture("failure.pdf", null).as("successCopyFile"); // for task check purpose if it works
  });

  it("should passed after compare the same files", () => {
    cy.get("@successFile").then((successFile) => {
      cy.get("@successCopyFile").then((successCopyfile) => {
        expect(successFile).to.eql(successCopyfile);
      });
    });
  });
});
