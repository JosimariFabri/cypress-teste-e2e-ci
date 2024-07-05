/// <reference types="cypress" />

export const homePage = {
    openMenu: () => { return cy.get('[href="/Tab/Account?screen=Login"]').click()}
}