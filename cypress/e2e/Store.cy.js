import { HomePage } from "./../page-objects/HomePage";

describe("Test shopping functions", () => {
  const homePage = new HomePage();

  const sizes = ["iphone-6", "ipad-2", "macbook-13", "macbook-16", [1024, 768]];

  sizes.forEach((size) => {
    it(`Should get discount on ${size}`, () => {
      if (typeof size != "string") {
        // if one of the values is null/undef/0 run default value
        cy.viewport(size[0] || 1024, size[1] || 768);
      } else {
        cy.viewport(size);
      }
      homePage.navigate("My account");
    });
  });
});
