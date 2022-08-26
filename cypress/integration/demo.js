/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe"/>
import "cypress-iframe"

describe ('Frames Test', function() {
    it('Demo example',function() {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')
        })
         
         
        })
        