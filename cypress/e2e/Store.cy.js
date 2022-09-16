import { HomePage } from "./../page-objects/HomePage";

describe("Test shopping functions", () => {
  const homePage = new HomePage();

  const sizes = ["iphone-6", "ipad-2", "macbook-13", "macbook-16"];

  sizes.forEach((size) => {
    it(`Should work on ${size}`, () => {
      cy.viewport(size);
      homePage.navigate("My account");
    });
  });
});
