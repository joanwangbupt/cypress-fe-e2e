import {Given,Then} from '@badeball/cypress-cucumber-preprocessor';

Given ('open Google homePage', ()=>{
        cy.visit('www.google.com')
    })

Then ('validate the title', ()=>{
        cy.get("img.lnXdpd[alt='Google']").should('be.visible')
    })