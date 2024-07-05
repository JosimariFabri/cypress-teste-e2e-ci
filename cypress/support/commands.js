
import SignUpPage from "./pages/signup.page"

Cypress.Commands.add('checkout', (firstName, lastName, phoneNumber, emailAddress, password, rePassword) => { 
    SignUpPage.signUp(firstName, lastName, phoneNumber, emailAddress, password, rePassword)
})