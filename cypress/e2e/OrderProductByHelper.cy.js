import { login, registration, setDelivery, setNewAddress, setNewPayment, getRandomUserData, findProd } from '../support/helper.js'
import NavbarPage from '../support/pages/navbar.page';
import BasketPage from '../support/pages/basket.page';
import AddressListPage from '../support/pages/address-list.page';
import OrderPage from '../support/pages/order.page';

describe('Order Product With Helper', () => {
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
        findProd('Carrot Juice').then(() => {
            cy.log('Navigation to basket');
            NavbarPage.getBasketButton().click();

            cy.log('Navigation to New Address form');
            BasketPage.getCheckoutButton().click();
            AddressListPage.getAddNewItemButton().click();

            cy.log('New Address form filling');
            setNewAddress(user)

            cy.log('Selecting address');
            AddressListPage.getFirstAddressFromList().click();
            AddressListPage.getContinuePage().click();

            cy.log('Delivery Address form filling');
            setDelivery(3);

            cy.log('My Payment Options form filling');
            setNewPayment(user)

            cy.log('Order Summary page');
            OrderPage.getPlaceYourOrderAndPayButton().click();
            cy.get('mat-card:nth-child(1) > div > h1').should('have.text', 'Thank you for your purchase!');
        })
    })
})