import { getRandomUserData, login, registration } from '../support/helper';
import PaymentOptionsPage from '../support/pages/payment-options.page';
import AddressPage from '../support/pages/address.page';
import ProductsPage from '../support/pages/products.page';
import NavbarPage from '../support/pages/navbar.page';
import BasketPage from '../support/pages/basket.page';
import AddressListPage from '../support/pages/address-list.page';
import DeliveryPage from '../support/pages/delivery.page';
import OrderPage from '../support/pages/order.page';

describe('Order Product + checking New Address form with empty/all fields', () => {
    const userR = getRandomUserData();
    let user = {};
    before(() => {
        user = structuredClone(getRandomUserData());
        registration(user, true, true)
    })

    beforeEach(() => {
        login(user, true, true);
    })

    it('Order product', () => {
        cy.log('Adding a product to basket');
        ProductsPage.getAddtoCartButtonbyId(2).click({ force: true });
        cy.get('span.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('contain', '1');

        cy.log('Navigation to basket');
        NavbarPage.getBasketButton().click();

        cy.log('Navigation to New Address form');
        BasketPage.getCheckoutButton().click();
        AddressListPage.getAddNewItemButton().click();

        cy.log('New Address form filling');
        AddressPage.getCountryInput().type(userR.country);
        AddressPage.getSubmitButton().should('be.disabled');
        AddressPage.getNameInput().type(userR.name);
        AddressPage.getSubmitButton().should('be.disabled');
        AddressPage.getNumberInput().type(userR.number);
        AddressPage.getSubmitButton().should('be.disabled');
        AddressPage.getZipInput().type(userR.zipCode);
        AddressPage.getSubmitButton().should('be.disabled');
        AddressPage.getStreetInput().type(userR.streetaAddress);
        AddressPage.getSubmitButton().should('be.disabled');
        AddressPage.getCityInput().type(userR.city);
        AddressPage.getSubmitButton().click();

        cy.log('Selecting address');
        AddressListPage.getFirstAddressFromList().click();
        AddressListPage.getContinuePage().click();

        cy.log('Delivery Address form filling');
        DeliveryPage.getDeliveryById(3).click();
        DeliveryPage.getContinueButton().click();

        cy.log('My Payment Options form filling');
        PaymentOptionsPage.getOpenPaymentListButton().click();
        PaymentOptionsPage.getFullNameInput().type(userR.fullName);
        PaymentOptionsPage.getCardNumberInput().type(userR.creditCardNumber);
        PaymentOptionsPage.getExpireMonthInput().select('2');
        PaymentOptionsPage.getExpireYearSelect().select('2081');
        PaymentOptionsPage.getSubmitButton().click();
        PaymentOptionsPage.getFirstPaymentFromLit().click();
        PaymentOptionsPage.getContinueButton().click();

        cy.log('Order Summary page');
        OrderPage.getPlaceYourOrderAndPayButton().click();
        cy.get('mat-card:nth-child(1) > div > h1').should('have.text', 'Thank you for your purchase!');
    })
})