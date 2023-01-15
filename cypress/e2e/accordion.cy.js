context('should list accordion with subtasks', () => {
	beforeEach(() => {
		cy.visit(Cypress.env('baseUrl'));
		cy.get('[data-testid="bar"]').as('progress-bar');
		cy.get('[data-testid="headers"]').as('group-headers');    
	});

	it('should have General Info and 4 tasks', () => {
		cy.get('@group-headers').should('have.length', 4);
		cy.get('@progress-bar').contains('36%');

		cy.get('@group-headers')
			.eq(0)
			.contains('General Infos');

		cy.get('@group-headers')
			.eq(0)
			.click();

		cy.get('@group-headers')
			.eq(0)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"] :checked')
					.eq(0)
					.should('be.checked')
					.and('have.value', 'Add name and surname');
			});

		cy.get('@group-headers')
			.eq(0)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"]')
					.eq(1)
					.contains('Add email');
				cy.get('[type="checkbox"]')
					.eq(1)
					.check();
			});

		cy.get('@progress-bar').contains('42%');

		cy.get('@group-headers')
			.eq(0)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"]')
					.eq(2)
					.contains('Add linkedin profile');
				cy.get('[type="checkbox"]')
					.eq(2)
					.check();
			});

		cy.get('@progress-bar').contains('46%');

		cy.get('@group-headers')
			.eq(0)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"] :checked')
					.eq(3)
					.should('be.checked')
					.and('have.value', 'Provide websites page url');
			});

		cy.get('@progress-bar').contains('46%');

		cy.get('@group-headers')
			.eq(0)
			.click();
	});

	it('should have Accomiplishment and 5 tasks', () => {
		cy.get('@progress-bar').contains('36%');

		cy.get('@group-headers')
			.eq(1)
			.contains('Accomiplishment');

		cy.get('@group-headers')
			.eq(1)
			.click();

		cy.get('@group-headers')
			.eq(1)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"]').should('have.length', 5);
				cy.get('[data-testid="grouped-tasks"]')
					.eq(0)
					.contains('Wrote a small poem about the birthdate');
				cy.get('[type="checkbox"]')
					.eq(0)
					.check();
			});

		cy.get('@group-headers')
			.eq(1)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"] :checked')
					.eq(1)
					.should('be.checked')
					.and('have.value', 'Jump three time with one leg');
			});

		cy.get('@progress-bar').contains('46%');

		cy.get('@group-headers')
			.eq(1)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"]')
					.eq(2)
					.contains('Avoid the annoying neighbor');
				cy.get('[type="checkbox"]')
					.eq(2)
					.check();
			});

		cy.get('@progress-bar').contains('47%');

		cy.get('@group-headers')
			.eq(1)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"]')
					.eq(3)
					.contains('Say hello to a random person');
				cy.get('[type="checkbox"]')
					.eq(3)
					.check();
			});

		cy.get('@progress-bar').contains('56%');

		cy.get('@group-headers')
			.eq(1)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"] :checked')
					.eq(4)
					.should('be.checked')
					.and('have.value', 'Fill the description in at least 3 places');
			});

		cy.get('@group-headers')
			.eq(1)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"]')
					.eq(4)
					.contains('Fill the description in at least 3 places');
				cy.get('[type="checkbox"]')
					.eq(4)
					.uncheck()
			});

		cy.get('@progress-bar').contains('51%');

		cy.get('@group-headers')
			.eq(1)
			.within(() => {
				cy.get('[type="checkbox"]')
					.eq(4)
					.check()
			});

		cy.get('@progress-bar').contains('56%');

		cy.get('@group-headers')
			.eq(1)
			.click();
	});

	it('should have Personal retrospective and 2 tasks', () => {    
		cy.get('@group-headers')
			.eq(2)
			.contains('Personal retrospective');

		cy.get('@group-headers')
			.eq(2)
			.click();

		cy.get('@group-headers')
			.eq(2)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"]').should('have.length', 2);
				cy.get('[data-testid="grouped-tasks"] :checked')
					.eq(0)
					.should('be.checked')
					.and('have.value', 'Remember a dream');
				});

			cy.get('@group-headers')
			.eq(2)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"] :checked')
				.eq(1)
				.should('be.checked')
				.and('have.value', 'Have a crush');
			});

			cy.get('@group-headers')
				.eq(2)
				.click();
	});

	it('should have Things before leaving and 3 tasks', () => {    
		cy.get('@group-headers')
			.eq(3)
			.contains('Things before leaving');

		cy.get('@group-headers')
			.eq(3)
			.click();

		cy.get('@group-headers')
			.eq(3)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"]').should('have.length', 3);
				cy.get('[data-testid="grouped-tasks"]')
					.eq(0)
					.contains('Tell what you feel to all the people you know');
				cy.get('[type="checkbox"]')
					.eq(0)
					.check();
			});

		cy.get('@progress-bar').contains('54%');

		cy.get('@group-headers')
			.eq(3)
			.within(() => {
				cy.get('[data-testid="grouped-tasks"]')
					.eq(1)
					.contains('Have a pet');
				cy.get('[type="checkbox"]')
					.eq(1)
					.check();
			});

			cy.get('@progress-bar').contains('64%');

			cy.get('@group-headers')
				.eq(3)
				.within(() => {
					cy.get('[data-testid="grouped-tasks"]')
						.eq(2)
						.contains('Buy a fashion shirt');
					cy.get('[type="checkbox"]')
						.eq(2)
						.check();
				});

			cy.get('@progress-bar').contains('70%');

			cy.get('@group-headers')
				.eq(3)
				.click();
	});
});
