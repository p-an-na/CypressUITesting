class AllPages{

    get searchInput() {
        return cy.get('input[placeholder="Search For Products"]').eq(0)
    }

    get searchButton() {
        return cy.get('button.type-text')
    }

    get searchTitle() {
        return cy.getBySel('212456')
    }

    public dropDownElement(index: number) {
        return cy.get('ul.dropdown-menu > li > div.caption > h4').eq(index)
    }

    public checkDropDownElement(index: number, phrase: string) {
        this.dropDownElement(index).contains(phrase)
    }

    public searchPhrase(phrase: string): void {
        this.searchInput.type(phrase)
        this.searchButton.click()
    }

    public searchPhraseAndCheckDropdownElement(phrase: string, index: number): void {
        this.searchInput.type(phrase)
        this.checkDropDownElement(index, phrase)
        this.searchButton.click()
    }
}
export default new AllPages();