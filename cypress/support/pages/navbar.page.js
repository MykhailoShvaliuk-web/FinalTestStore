class NavbarPage {
    getBasketButton() {
        return cy.get('.mat-focus-indicator.buttons.mat-button.mat-button-base.ng-star-inserted')
    }

    getAccountButton() {
        return cy.get('#navbarAccount');
    }

    getLoginButton() {
        return cy.get('#navbarLoginButton');
    }
}

export default new NavbarPage();