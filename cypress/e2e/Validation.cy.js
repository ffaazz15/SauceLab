
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

        },
        {
            "book_name":"NeovaS0lutions",
            "isbn":"NSKS",
            "aisle":"420420"

        }
    ]
        
        }).as('bookRetreival')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookRetreival').should(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1)
            
        })
        //cy.get('p').should('have.text','Oops only 1 Book available')
        
   
    });
 })