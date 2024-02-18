describe ('test cammad npx', ()=>{
    it('verify the title', ()=>{
        cy.visit('www.baidu.com')
        cy.title().should('eql','Google')
    })
})