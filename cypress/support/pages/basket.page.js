class BasketPage {
    getCheckoutButton() {
        return cy.get('.mat-focus-indicator.checkout-button.mat-raised-button.mat-button-base.mat-primary');
    }
}

export default new BasketPage();