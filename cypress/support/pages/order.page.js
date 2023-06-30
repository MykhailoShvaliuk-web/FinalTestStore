class OrderPage {
    getPlaceYourOrderAndPayButton() {
        return cy.get('.mat-button-base.mat-primary');
    }
}

export default new OrderPage();