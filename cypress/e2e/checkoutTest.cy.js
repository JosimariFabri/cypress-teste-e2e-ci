/// <reference types="cypress" />

const { firstName, lastName, phoneNumber, emailAddress, password, rePassword } = require('../fixtures/example.json');
const { profilePage } = require("../support/pages/profile.page");

describe('Teste de compra', () => {

  it('Deve adicionar um produto ao carrinho e fazer checkout', () => {
    let email = `jositeste${Math.floor(Math.random() * 1000000000)}@ebac.com.br`
    cy.signup(firstName, lastName, phoneNumber, email, password, rePassword)
    profilePage.custumerName().should('contain', 'Cliente Josimari' )

  })
})