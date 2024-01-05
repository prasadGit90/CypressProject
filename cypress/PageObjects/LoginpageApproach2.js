///<reference types="Cypress"/>
class Login
{

    txtUserName="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    LoginBtn='.oxd-button';
    txtverifyOutput='.oxd-topbar-header-breadcrumb > .oxd-text'
    txtVerifyInvalidOutput =".oxd-text.oxd-text--p.oxd-alert-content-text"



    setUserName(username)
    {

        cy.get(this.txtUserName).type(username)
    }

    setPassword(password )
    {
        cy.get(this.txtPassword).type(password) 
    }
   clickOnLoginBtn()
    {
        cy.get(this.LoginBtn).click()
        
    }
    VerifyOutput()
    {
        cy.get(this.txtverifyOutput).should('have.text','Dashboard')
    }
 

}

export default Login
