import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    specPattern: "cypress/e2e/*.cy.ts"
  },
})