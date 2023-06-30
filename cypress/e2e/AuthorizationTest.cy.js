import { getRandomUserData, login, registration } from '../support/helper';

describe('Authorization', () => {
    const userR = getRandomUserData();
    let user = {};
    before(() => {
        user = structuredClone(getRandomUserData());
        registration(user, true, true)
    })

    it('User authorization without Email field', () => {
        login({ ...user, email: null })
        cy.log('Clicking on Log in button');
        cy.get('#loginButton')
            .should('be.disabled');
    })

    it('User authorization without Password field', () => {
        login({ ...user, password: null })
        cy.log('Clicking on Log in button');
        cy.get('#loginButton')
            .should('be.disabled');
    })

    it('User authorization without Email and Password fields', () => {
        login({ ...user, email: null, password: null })
        cy.log('Clicking on Log in button');
        cy.get('#loginButton')
            .should('be.disabled');
    })

    it('User authorization with all required fields', () => {
        login(user, true)
        cy.get('#navbarAccount').click();
        cy.get('#mat-menu-panel-0 > div > button:nth-child(1)').should('contain', user.email);
        cy.get('#navbarAccount').click({ force: true });
    })
})