
//  cy.get('input[name="name"]:nth-child(2)').type(data.name)
//  cy.get('#exampleFormControlSelect1').select(data.gender)
//  cy.get(':nth-child(4) > .ng-untouched').should('have.value',data.name)
//  cy.get('#inlineRadio3').should('be.disabled')
//  cy.get('#inlineRadio2').click()
//  cy.get(':nth-child(2) > .nav-link').click()
 
class Framework
{
    txtusername='input[name="name"]:nth-child(2)';
    txtgender='#exampleFormControlSelect1';
    databind=':nth-child(4) > .ng-untouched'
    disabledRadioButton='#inlineRadio3'
    radioclick='#inlineRadio2'
    shopLink=':nth-child(2) > .nav-link'
    SecondPageHeader="h1[class='my-4']"
    PhoneTitle="h4.card-title"
    AddCart="button.btn.btn-info"

    setUsername(username){
        cy.get(this.txtusername).type(username);

    }
    setGender(Gender){
        cy.get(this.txtgender).type(Gender);

    }
    // CheckDataBind(){
    //     cy.get(this.databind).should('have.value',data.name)
    // }
    checkDisabledRadio(){
        cy.get(this.disabledRadioButton).should('be.disabled')
    }
    clickradio(){
        cy.get(this.radioclick).click()
    }
    // clickLogin(){
    //     cy.get(this.btnSubmit).click()
    // }
   clickShop(){
    cy.get(this.shopLink).click()
   }

   VerifySecondPage(){
    cy.get(this.SecondPageHeader).should('have.text','Shop Name')
   }

   SelectPhoneTitle(){
    cy.get(this.PhoneTitle)
   }

   AddToCart(){
    cy.get(this.AddCart)
   }

}
export default Framework