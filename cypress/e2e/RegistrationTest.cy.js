import { getRandomUserData, registration } from "../support/helper";
import RegistrationPage from "../support/pages/registration.page";

describe('Registration', () => {
    let userR = {};
    before(() => {
        userR = getRandomUserData();
    })

    it('Registration without Email field', () => {
        registration({ ...userR, email: null })
        cy.log('Clicking on Register button');
        RegistrationPage.getRegistartionButton().should('be.disabled');
    })

    it('Registration without Password field', () => {
        registration({ ...userR, password: null })
        cy.log('Clicking on Register button');
        RegistrationPage.getRegistartionButton().should('be.disabled');
    })

    it('Registration without Repeat Password field', () => {
        registration({ ...userR, repeatPassword: null })
        cy.log('Clicking on Register button');
        RegistrationPage.getRegistartionButton().should('be.disabled');
    })

    it('Registration without Security Question field', () => {
        registration(userR, false);
        cy.log('Clicking on Register button');
        RegistrationPage.getRegistartionButton().should('be.disabled');
    })

    it('Registration without Answer field', () => {
        registration({ ...userR, answer: null });
        cy.log('Clicking on Register button');
        RegistrationPage.getRegistartionButton().should('be.disabled');
    })

    it('Registration with all required fields', () => {
        registration(userR, true, true);
        cy.log('Clicking on Register button');
        RegistrationPage.getRegistartionButton().click();
        cy.get('body > div.cdk-overlay-container.bluegrey-lightgreen-theme')
            .should('contain', 'Registration completed successfully. You can now log in.');
    })
})  