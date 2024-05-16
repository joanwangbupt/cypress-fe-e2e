import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given ('I open homepage of google', () => {
    cy.visit('https://www.google.com/')
})

When ('I input ILoveYou', () =>{
    // cy.get('#kw').type('ILoveYou')
})

Then ('I click search button', ()=>{
    // cy.get('#su').click()
})

Then ('I get the feedback', () =>{
    // cy.contains('我爱你').should('be.visible')
})
