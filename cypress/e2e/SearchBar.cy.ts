import { all } from "cypress/types/bluebird";
import allPages from "../pages/allPages";
import { homePageUrl } from  "../support/pagesUrl"

describe("E2E - Searchbar", () => {
    before(() => {
        cy.visit(homePageUrl);
        cy.url().should('include', '/home')
    })
    it("Should search for a phrase at the given maximum price" ,  () => {
        allPages.searchPhraseAndCheckDropdownElement('MacBook', 0)
        allPages.searchTitle.should('contain', 'Search - MacBook')

    })

})


     
