describe("Navigation menu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3848");
  });

  it("navigates to the Card Sets page when 'Card Sets' is clicked", () => {
    cy.get("#cardSetPage").click();
    cy.get("[data-cy=study-set-header]")
      .should("be.visible")
      .and("contain.text", "Study Set Library");
  });

  it("navigates to the About page when 'About' is clicked", () => {
    cy.get("#aboutPage").click();
    cy.get("[data-cy=about_page]")
      .should("be.visible")
      .and("contain.text", "About Study Night");
  });

  it("navigates to the Home page when 'Home' is clicked", () => {
    cy.get("#aboutPage").click();
    cy.get("#homePage").click();
    cy.get("[data-cy=home_header]")
      .should("be.visible")
      .and("contain.text", "Study Night");
  });
});
