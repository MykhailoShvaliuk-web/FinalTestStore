class DeliveryPage {
    getDeliveryById(id) {
        return cy.get(`mat-row:nth-child(${id}) > mat-cell.mat-cell.cdk-cell.cdk-column-Name.mat-column-Name.ng-star-inserted`)
    }

    getContinueButton() {
        return cy.get('.mat-button.mat-raised-button.mat-button-base.mat-primary');
    }
}

export default new DeliveryPage();