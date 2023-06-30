class CustomerFeedbackPage {

    getCommentInput() {
        return cy.get('#comment');
    }

    getRating() {
        return cy.get('#rating');
    }

    getExpireMonthInput() {
        return cy.get('#captcha');
    }

    getSubmitButton() {
        return cy.get('#submitButton');
    }
}
export default new CustomerFeedbackPage();