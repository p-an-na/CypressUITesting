declare namespace Cypress {
    interface Chainable {
        getBySel(dataTestAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;
        login(email: string, password: string): void
        logout(): void
    }
}