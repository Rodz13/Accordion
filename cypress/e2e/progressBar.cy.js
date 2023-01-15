context('Component progress bar', () => {
    it('should have a progress bar', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('[data-testid="bar"]').contains('36%');
    });
});
