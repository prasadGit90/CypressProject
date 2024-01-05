import Login from "../PageObjects/LoginpageApproach2.js";

//page object model 

describe('TestSuit Verify Login Credentials ',()=>{

    it('DataDrivenTest for valid username and password',()=>{

      cy.fixture('testData').then((userdata)=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       
          const ln=new Login()
        ln.setUserName(userdata.username)
        ln.setPassword(userdata.password)  
        ln.clickOnLoginBtn()
        ln.VerifyOutput()


      })

    })

})
