
describe('My Second Test Suite', function()
{

    it('My FirstTest case', function() {

        //check boxes
        cy.visit(Cypress.env('url')+"/AutomationPractice/")



        //cannot mix cypress and non cypress code like cy.get and .prop()
        cy.get('#opentab').then(function (el)
        {
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
    })



  }) 
