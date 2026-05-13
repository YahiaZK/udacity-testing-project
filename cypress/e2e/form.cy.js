describe("Create Set Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3848");
    cy.get("#cardSetPage").click();
    cy.get("[data-cy=toggle_form]").click();
  });

  it("creates a new study set when a valid title is submitted (happy path)", () => {
    const newSetTitle = "JavaScript Fundamentals";

    cy.get("[data-cy=set_form]").within(() => {
      cy.get("#titleInput").type(newSetTitle);
      cy.get("input[type=submit]").click();
    });

    cy.get(".setContainer").should("contain.text", newSetTitle);
    cy.get(".error").should("not.exist");
  });

  it("renders an error when the title input is empty (unhappy path)", () => {
    cy.get("[data-cy=set_form]").within(() => {
      cy.get("input[type=submit]").click();
    });

    cy.get(".error")
      .should("be.visible")
      .and("contain.text", "TITLE CANNOT BE EMPTY");
  });
});

describe("Add Card Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3848");
    cy.get("#cardSetPage").click();
    cy.get("[data-cy=1]").click();
    cy.get("[data-cy=toggle_form]").click();
  });

  it("adds a new card when valid term and description are submitted (happy path)", () => {
    const term = "JavaScript";
    const description = "A high-level programming language";

    cy.get("[data-cy=card_form]").within(() => {
      cy.get("#termInput").type(term);
      cy.get("#descriptionInput").type(description);
      cy.get("input[type=submit]").click();
    });

    cy.get(".term").should("contain.text", term);
    cy.get(".description").should("contain.text", description);
    cy.get(".error").should("not.exist");
  });

  it("renders an error when both term and description are empty (unhappy path)", () => {
    cy.get("[data-cy=card_form]").within(() => {
      cy.get("input[type=submit]").click();
    });

    cy.get(".error")
      .should("be.visible")
      .and("contain.text", "TERM AND DESCRIPTION CANNOT BE EMPTY");
  });

  it("renders an error when only the term is empty (unhappy path)", () => {
    cy.get("[data-cy=card_form]").within(() => {
      cy.get("#descriptionInput").type("Some description");
      cy.get("input[type=submit]").click();
    });

    cy.get(".error")
      .should("be.visible")
      .and("contain.text", "TERM CANNOT BE EMPTY");
  });

  it("renders an error when only the description is empty (unhappy path)", () => {
    cy.get("[data-cy=card_form]").within(() => {
      cy.get("#termInput").type("Some term");
      cy.get("input[type=submit]").click();
    });

    cy.get(".error")
      .should("be.visible")
      .and("contain.text", "DESCRIPTION CANNOT BE EMPTY");
  });
});
