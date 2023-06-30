import { faker } from '@faker-js/faker'

it('Customer Feedback', () => {
    cy.log('Navigation to Customer Feedback form');
    cy.visit('http://juice-shop-sanitarskyi.herokuapp.com/#/contact');
    cy.get('button.mat-focus-indicator.mat-primary.ng-star-inserted').click();

    cy.log('Customer Feedback form filling');
    cy.get('#comment').type(faker.number.int());

    cy.get('#rating').invoke("val", 3)
        .trigger("change")
        .click({ force: true })

    cy.get('#captcha')
        .invoke('text')
        .then((value) => {
            cy.get('#captchaControl').type(eval(value));
            cy.get('#submitButton').click();
        })
})