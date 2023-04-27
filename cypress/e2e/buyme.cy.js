describe("homePage", () => {
  it("open homePage and verify elements", () => {
    cy.visit("https://buyme.co.il/");
    cy.url().should("eq", "https://buyme.co.il/");
    cy.get("#ember1020 > img").should("exist");
    cy.get(".buttons > :nth-child(1) > a > span").should("exist");
    cy.get('[data-ember-action="1008"] > a').should("exist");
    cy.get(".notSigned > a").should("exist");
  });
});
