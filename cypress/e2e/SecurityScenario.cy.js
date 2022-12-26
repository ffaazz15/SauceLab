describe('test1', () => { 
it('testing URL with security perspective', () => {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
 (req)=>
 {
    req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Fazil"
    req.continue((res)=>{
        expect(res.statusCode).to.equal(404)
    }) 
 }
 ).as("dummyUrl")
 cy.get('button[class="btn btn-primary"]').click()
 cy.wait("@dummyUrl")
});

 })