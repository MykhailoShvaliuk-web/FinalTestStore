class RegistrationPage {
    getRegistartionButton() {
        return cy.get('#registerButton')
    }

    getEmailInput() {
        return cy.get('#emailControl');
    }

    getPasswordInput() {
        return cy.get('#passwordControl')
    }

    getRepeatPasswordInput() {
        return cy.get('#repeatPasswordControl')
    }

    getSecurityAnswerInput() {
        return cy.get('#securityAnswerControl')
    }
}
export default new RegistrationPage();