/// <reference types="cypress" />

export const profilePage = {
    custumerName: () => { return cy.get('[data-testid="CustomerName"]')}
}