class PaymentOptionsPage {

    getFullNameInput() {
        return cy.get('#mat-input-16');
    }

    getCardNumberInput() {
        return cy.get('#mat-input-17');
    }

    getExpireMonthInput() {
        return cy.get('#mat-input-18');
    }

    getExpireYearSelect() {
        return cy.get('#mat-input-19');
    }

    getSubmitButton() {
        return cy.get('#submitButton')
    }

    getFirstPaymentFromLit() {
        return cy.get('#mat-radio-44 > label > span.mat-radio-container > span.mat-radio-inner-circle')
    }

    getContinueButton() {
        return cy.get('.mat-button.mat-raised-button.mat-button-base.mat-primary')
    }

    getOpenPaymentListButton() {
        return cy.get('.ng-tns-c150-34.ng-trigger.ng-trigger-indicatorRotate.ng-star-inserted')
    }
}
export default new PaymentOptionsPage();