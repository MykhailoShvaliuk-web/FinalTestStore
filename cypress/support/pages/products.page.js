class ProductPage {
    getAddtoCartButtonbyId(id) {
        return cy.get(`div > mat-grid-tile:nth-child(${id}) > div > mat-card > div:nth-child(${id}) > button`)
    }

    getAllProductsOnPage() {
        return cy.get('mat-grid-tile');
    }
}

export default new ProductPage();