
// it('google test',() =>{


// })

describe('My First Test',()=>{

it('Login test',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
    cy.get('.oxd-button').click
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.wait(2000)
    
})

it('Verify title-Nagive test',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('not.equal','OrangeHRM123')
})


//driver.findElement(By.cssSelector("input[placeholder='Username']"))

//driver.findElement(By.cssSelector("input[placeholder='Password']"))
//driver.findElement(By.cssSelector("button[type='submit']"))
//driver.findElement(By.cssSelector(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"))


"input[placeholder='Username']"
"input[placeholder='Password']"
"button[type='submit']"
".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

})