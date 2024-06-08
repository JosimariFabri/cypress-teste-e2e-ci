/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page");
const SignUpPage = require("../support/pages/signup.page");
const { firstName, lastName, phoneNumber, emailAddress, password, rePassword } = require('../fixtures/example.json');
const { profilePage } = require("../support/pages/profile.page");

describe('Criar conta nova', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  });

  it('Deve criar uma conta com sucesso', () => {
    let email = `jositeste${Math.floor(Math.random() * 1000000000)}@ebac.com.br`
    homePage.openMenu('Account')
    SignUpPage.signUp(firstName, lastName, phoneNumber, email, password, rePassword)
    homePage.openMenu('Account')
    profilePage.custumerName().should('contain', 'Cliente Josimari' )

  })
})