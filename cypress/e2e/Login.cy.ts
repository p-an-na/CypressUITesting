import { loginPageUrl } from "../support/pagesUrl"

describe('Verify login and logout', () => {
  before(() => {
    cy.visit(loginPageUrl);
})
  it('Should login into web app and logout', () => {    
     cy.login('lambdatest.Cypress@disposable.com', 'Cypress123!!');
     cy.logout()

  })
})