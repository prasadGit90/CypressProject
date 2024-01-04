/// <reference types = "Cypress" /> 

describe('Assertions',()=>{

    it('Implicit assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Implicit waits should ,and ************

        // cy.url().should('include','orangehrmlive')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')
        
        //another way of writing ************************

        // cy.url().should('include','orangehrmlive')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrm')

         //another way of writing ******************************

        cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('include','orangehrmlive')
        .and('contain','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','orn123')

        cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible
        .and('exist') //logo exist
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') //provide value into into textbox 

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin') //value
    })
        it('explicit assertions',()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get("input[placeholder='Username']").type("Admin")
            cy.get("input[placeholder='Password']").type("admin123")
            cy.get("button[type='submit']").click



        })
        

    })
