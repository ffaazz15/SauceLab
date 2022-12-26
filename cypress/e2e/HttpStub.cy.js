
/// <reference types="Cypress" />
describe('This is example of stubbing & intercept', () => { 

    it('My first TestCase', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        
        cy.intercept({
            //requestObject
        method: 'GET',
        url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',

        
        },
        
        {
            //responseObject
        statusCode: 200,
        body:[{
            "book_name":"MyLifeStory",
            "isbn":"MF420",
            "aisle":"786786"

        }]
        
        }).as('bookRetreival')
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('p').should('have.text','Oops only 1 Book available')
        cy.wait('@bookRetreival') //works well even when commented
        
        
   
    });
 })