/// <reference types="cypress" />

class SignUpPage {
    get #signup() { return cy.get('[data-testid="signUp"]')}
    get #firstName() { return cy.get('[data-testid="firstName"]')}
    get #lastName() { return cy.get('[data-testid="lastName"]')}
    get #phoneNumber() { return cy.get('[data-testid="phone"]')}
    get #emailAddress() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')}
    get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')}
    get #rePassword() { return cy.get('[data-testid="repassword"]')}
    get #create() { return cy.get('[data-testid="create"] > .css-146c3p1')}

    signUp(firstName, lastName, phoneNumber, emailAddress, password, rePassword){
        this.#signup.click()
        this.#firstName.type(firstName)
        this.#lastName.type(lastName)
        this.#phoneNumber.type(phoneNumber)
        this.#emailAddress.type(emailAddress)
        this.#password.type(password)
        this.#rePassword.type(rePassword)
        this.#create.click()
    }

}

module.exports = new SignUpPage();

