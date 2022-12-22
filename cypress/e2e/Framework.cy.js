/// <reference types="Cypress" />
import Framework from "../PageObject/Framework";

describe('testing framework', () => {
    let data;
    before(function() {
    cy.fixture("Newdetails.json").then((fdata)=>
    {
        data = fdata;
    })
})
it('My first test case', () => {
    const fw = new Framework();
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
fw.setUsername(data.name)
    //cy.get('input[name="name"]:nth-child(2)').type(data.name)
    fw.setGender(data.gender)
    //cy.get('#exampleFormControlSelect1').select(data.gender)
    //fw.CheckDataBind()
    //cy.get(':nth-child(4) > .ng-untouched').should('have.value',data.name)
    fw.checkDisabledRadio()
    //cy.get('#inlineRadio3').should('be.disabled')
    fw.clickradio()
    //cy.get('#inlineRadio2').click()
    fw.clickShop()
    //cy.get(':nth-child(2) > .nav-link').click()
    fw.VerifySecondPage()

    fw.SelectPhoneTitle().each(($el1,index,$list)=>{
        if($el1.text().includes(data.phone)){
            fw.AddToCart().eq(index).click()
        }
    })
});

})