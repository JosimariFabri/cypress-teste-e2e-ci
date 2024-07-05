/// <reference types="cypress" />

export const cartPage = {

    productList(){
       return cy.get('[data-testid="home-product-list"] [data-testid="productDetails"]')
    },
   
    openPageProduct(){
        cy.get('[data-testid="home-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(1) > [style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 414px;"] > [data-testid="productDetails"] > .r-cqee49').click() //ingrid
    },
    addToCart(){
        cy.get('[data-testid="addToCart"] > .css-146c3p1').click()
    },

    cart(){
        return cy.get('[data-testid="productName"]')
    },

    removeProduct(){
        cy.get('[data-testid="remove"] > .css-146c3p1').click()
    },

    continueShopping(){
        cy.get('[data-testid="continueShopping"] > .css-146c3p1').click()
    },

    openPageProduct2(){
        cy.get('[data-testid="home-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(2) > [style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 414px;"] > [data-testid="productDetails"] > .r-cqee49').click() //eos
    },

    openCheckoutPage(){
        cy.get('[data-testid="addNewAddress"]').click()
    }
}
