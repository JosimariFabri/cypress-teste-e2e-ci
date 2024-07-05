/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

const { homePage } = require('../support/pages/home.page');
const { profilePage } = require("../support/pages/profile.page");
const { cartPage } = require('../support/pages/cart.page');


describe('Teste de compra', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })


  it('produto deve aparecer no carrinho', () => {
    cy.intercept('GET', '**/public/getCart?userId=6660a6dbcbcbc2a9bb2c9fac', { fixture: 'cart.json'}).as('getCart')
    cartPage.openPageProduct()
    cartPage.addToCart()
    cartPage.cart().should('have.length', 1)
    cartPage.openCheckoutPage()
  })


  it('carrinho deve estar vazio', () => {
    cy.intercept('GET', '**/public/getCart?userId=6660a6dbcbcbc2a9bb2c9fac', { fixture: 'emptyCart.json'}).as('getCart')
    cartPage.openPageProduct()
    cartPage.addToCart()
    cartPage.cart().should('have.length', 0)
    cartPage.removeProduct()
    cartPage.continueShopping()
    cartPage.openPageProduct2()
    cartPage.addToCart()
    cartPage.openCheckoutPage()
  })

  it('lista de produtos deve aparecer na página inicial', () => {
    cy.intercept('GET', '**/public/getProducts?limit=10&skip=0', { fixture: 'products.json'}).as('getProducts')
    cartPage.productList().should('have.length', 4)
    cartPage.openPageProduct()
    cartPage.addToCart()
    cartPage.removeProduct()
    cartPage.continueShopping()
    cartPage.openPageProduct2()
    cartPage.addToCart()
    cartPage.openCheckoutPage()
  })

  afterEach(() => {
    let email = `jositeste${Math.floor(Math.random() * 1000000000)}@ebac.com.br`
    cy.checkout(faker.person.firstName(), faker.person.lastName(), faker.phone.number(), email, 'teste12345', 'teste12345')
    homePage.openMenu()
    profilePage.custumerName().should('contain', 'Profile' )
  })
})