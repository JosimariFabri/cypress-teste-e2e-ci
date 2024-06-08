
import SignUpPage from "./pages/signup.page"

Cypress.Commands.add('signup', (firstName, lastName, phoneNumber, emailAddress, password, rePassword) => { 
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    cy.get('[data-testid="home-popular-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(2) > [style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 414px;"] > [data-testid="productDetails"] > .r-cqee49').click()
    cy.get('[data-testid="addToCart"] > .css-146c3p1').click()
    cy.get('[data-testid="addNewAddress"]').click()
    SignUpPage.signUp(firstName, lastName, phoneNumber, emailAddress, password, rePassword)
})