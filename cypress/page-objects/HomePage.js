export class HomePage {
  navigate() {
    cy.log("Going home");
  }

  navigate(linkText) {
    cy.log("Going home");
    cy.visit("/");

    if (!linkText) return;
    cy.log(`Going to ${linkText}`);

    cy.get("#site-navigation-menu-toggle")
      .then(($menu) => {
        if ($menu.is(":visible")) {
          return true;
        }
        return false;
      })
      .then((mobile) => {
        if (mobile) {
          cy.log("Clicking on mobile menu");
          cy.get("#site-navigation-menu-toggle").click();
          cy.get("div.menu a").contains(linkText).click();
          return;
        }
        cy.get("#menu-main a").contains(linkText).click();
      });
  }
}
