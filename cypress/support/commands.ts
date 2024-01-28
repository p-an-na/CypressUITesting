Cypress.Commands.add('login', (email: string, password: string)  => {
   cy.get('input[name="email"]').type(email);
   cy.get('input[name="password"]').type(password);
   cy.get('input[type="submit"]').click();
   cy.url().should('include', '/account')

});

Cypress.Commands.add('logout', () => {
  cy.get('a.list-group-item').contains('Logout')
  .click();
  cy.url().should('include', '/logout')


  })

 Cypress.Commands.add("getBySel", (selector: string, ...args: any) => {
   return cy.get(`[data-id=${selector}]`, ...args);
 });