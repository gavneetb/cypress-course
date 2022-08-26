
describe('My Second Test Suite', function()
{

    it('My FirstTest case', function() {

        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //when using jQuery, "show" method should be applied on immediate parent of a hidden element
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

        //another method: 
        //cy.contains('Top').click({force: true})
        //cy.url().should('include','top')
        
    })



  }) 
