import { faker } from '@faker-js/faker'
import RegistrationPage from './pages/registration.page';
import LoginPage from './pages/login.page';
import PaymentOptionsPage from '../support/pages/payment-options.page';
import AddressPage from '../support/pages/address.page';
import NavbarPage from '../support/pages/navbar.page';
import DeliveryPage from '../support/pages/delivery.page';
import ProductsPage from './pages/products.page';

export function registration(userR, selectSecurityQuestion = true, clickRegistrationButton = false) {
    cy.log('Navigation to User Registration form');
    cy.visit('/');
    cy.get('button.mat-focus-indicator.mat-primary.ng-star-inserted').click();
    NavbarPage.getAccountButton().click();
    NavbarPage.getLoginButton().click();
    cy.get('#newCustomerLink > a').click();

    cy.log('User Registration form filling');
    userR.email ? RegistrationPage.getEmailInput().type(userR.email) : RegistrationPage.getEmailInput().clear();
    userR.password ? RegistrationPage.getPasswordInput().type(userR.password) : RegistrationPage.getPasswordInput().clear();
    userR.repeatPassword ? RegistrationPage.getRepeatPasswordInput().type(userR.repeatPassword) : RegistrationPage.getRepeatPasswordInput().clear();
    if (selectSecurityQuestion) {
        cy.get('#mat-select-value-3 > span').click();
        cy.get('#mat-option-9 > span').click();
    }
    userR.answer ? RegistrationPage.getSecurityAnswerInput().type(userR.answer) : RegistrationPage.getSecurityAnswerInput().clear();

    if (clickRegistrationButton) {
        cy.log('Clicking on Register button');
        RegistrationPage.getRegistartionButton().click();
    }
}

export function login(userR, clickLogin = false) {
    cy.log('Navigation to Login form');
    cy.visit('/login');
    cy.wait(500);
    cy.get('body').then((body) => {
        if (body.find('button.mat-focus-indicator.mat-primary.ng-star-inserted').length) {
            cy.get('button.mat-focus-indicator.mat-primary.ng-star-inserted').click()
        }
    })
    cy.log('Login form filling');
    if (userR.email) {
        LoginPage.getEmailField().type(userR.email);
    }
    if (userR.password) {
        LoginPage.getPasswordField().type(userR.password);
    }

    cy.log('Clicking on Log in button');
    if (clickLogin) {
        LoginPage.getLoginButton().click();
    }
}

export function setNewAddress(user) {
    AddressPage.getCountryInput().type(user.country);
    AddressPage.getNameInput().type(user.name);
    AddressPage.getNumberInput().type(user.number);
    AddressPage.getZipInput().type(user.zipCode);
    AddressPage.getStreetInput().type(user.streetaAddress);
    AddressPage.getCityInput().type(user.city);
    AddressPage.getSubmitButton().click();
}

export function setNewPayment(user) {
    PaymentOptionsPage.getOpenPaymentListButton().click();
    PaymentOptionsPage.getFullNameInput().type(user.fullName);
    PaymentOptionsPage.getCardNumberInput().type(user.creditCardNumber);
    PaymentOptionsPage.getExpireMonthInput().select('2');
    PaymentOptionsPage.getExpireYearSelect().select('2081');
    PaymentOptionsPage.getSubmitButton().click();
    PaymentOptionsPage.getFirstPaymentFromLit().click();
    PaymentOptionsPage.getContinueButton().click();
}

export function setDelivery(id) {
    DeliveryPage.getDeliveryById(id).click();
    DeliveryPage.getContinueButton().click();
}

export function findProd(productName) {
    ProductsPage.getAllProductsOnPage().each((element) => {
        if (element.text().includes(productName)) {
            cy.wrap(element).find('button').click();
        }
    })
}

export const getRandomUserData = () => {
    const password = faker.internet.password();
    return {
        email: faker.internet.email(),
        password: password,
        repeatPassword: password,
        answer: faker.person.firstName(),
        country: faker.location.country(),
        name: faker.company.name(),
        number: faker.phone.number('### ### ## ##'),
        zipCode: faker.location.zipCode('#####'),
        streetaAddress: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        fullName: faker.person.fullName(),
        noun: faker.word.noun(10),
        creditCardNumber: faker.finance.creditCardNumber('################')
    }
}