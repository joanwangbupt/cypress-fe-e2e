import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given ('open the gmail homePage', () => {
    cy.visit('https://mail.google.com')
})

When ('click signIn', () =>{
    cy.get(‘.button.button--medium.button--mobile-before-hero-only’).click()
})

Then ('input valid emailAddress', () =>{
    cy.get(’input[type='email']‘).type('mekingfun86@gmail.com')
    cy.get('.VfPpkd-vQzf8d').click()
})

Then ('input valid password', () =>{
    cy.get('.g98c7c').type('1983216wl!@#')
    cy.get('.VfPpkd-vQzf8d').click()
})

Then ('get the 2nd step virification message', () =>{
    cy.get('.xh7Wmd TrZEUc').should('be.visible')
})