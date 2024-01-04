

describe('Locators',() =>{

    it('find products',() =>{
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click


    })


})