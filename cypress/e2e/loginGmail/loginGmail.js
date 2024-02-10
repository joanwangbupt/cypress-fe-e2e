import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given ('open the gmail homePage', () => {
    cy.visit('https://mail.google.com')
})

When ('input valid emailAddress', () =>{
    cy.get('input[type="email"]').type('mekingfun86@gmail.com')
    cy.get('span[jsname="V67aGc"]').click()
})

Then ('input valid password', () =>{
    cy.get('input[type="password"]').type('1983216wl!@#')
    cy.get('span[jsname="V67aGc"]').click()
})

Then ('get the 2nd step virification message', () =>{
    cy.get('.xh7Wmd TrZEUc').should('be.visible')
})