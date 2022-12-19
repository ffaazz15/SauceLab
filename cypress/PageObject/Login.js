class Login
{
    setUsername(username){
        cy.get('input[name="username"]').type(username);

    }
    setPassword(password){
        cy.get('input[name="password"]').type(password);

    }
    clickLogin(){
        cy.get('button[type="submit"]').click()
    }


}
export default Login