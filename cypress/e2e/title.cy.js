context('Component title', () => {
    it('should have title', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('[data-testid="title"]').contains('Lodgify Grouped Tasks');
    });
});
