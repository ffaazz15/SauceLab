import Login2 from "../PageObject/Login2";

describe('POM', () => { 
    
    it('Login sauce labs', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.fixture('details.json').then((fdata)=>{
        const ln = new Login2();
        ln.setUsername(fdata.name);
        ln.setPassword(fdata.password);
        ln.clickLogin();
        ln.verifySecondPage()
        
    })
  


}); 

})