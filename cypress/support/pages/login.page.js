class LoginPage {
    visit() {
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
    }

    getEmailField() {
        return cy.get('#email');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getLoginButton() {
        return cy.get('#loginButton');
    }

    LoginForm(email, password) {
        cy.log(`User authorization with email: ${email} and pasword: ${password}`);
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }
}
export default new LoginPage();