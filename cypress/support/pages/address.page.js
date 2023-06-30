class AddressPage {
    getCountryInput() {
        return cy.get('#mat-input-9');
    }

    getNameInput() {
        return cy.get('#mat-input-10');
    }

    getNumberInput() {
        return cy.get('#mat-input-11');
    }

    getZipInput() {
        return cy.get('#mat-input-12');
    }

    getStreetInput() {
        return cy.get('#address');
    }

    getCityInput() {
        return cy.get('#mat-input-14');
    }

    getSubmitButton() {
        return cy.get('#submitButton')
    }
}

export default new AddressPage();