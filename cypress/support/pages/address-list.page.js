class AddressListPage {
    getAddNewItemButton() {
        return cy.get('.btn-new-address.mat-button.mat-raised-button.mat-button-base.mat-primary');
    }

    getFirstAddressFromList() {
        return cy.get('.mat-row.cdk-row.ng-star-inserted');
    }

    getContinuePage() {
        return cy.get('mat-card > button > span.mat-button-wrapper > mat-icon');
    }
}

export default new AddressListPage();