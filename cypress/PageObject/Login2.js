

class Login2
{
    txtusername='input[name="username"]';
    txtpassword='input[name="password"]';
    btnSubmit='button[type="submit"]'
    verifyText='.oxd-topbar-header-breadcrumb > .oxd-text'

    setUsername(username){
        cy.get(this.txtusername).type(username);

    }
    setPassword(password){
        cy.get(this.txtpassword).type(password);

    }
    clickLogin(){
        cy.get(this.btnSubmit).click()
    }
    verifySecondPage(){
        cy.get(this.verifyText).should('have.text','Dashboard')
    }


}
export default Login2