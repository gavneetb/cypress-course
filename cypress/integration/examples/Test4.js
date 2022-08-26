
describe('My Second Test', function()
{

    it('My FirstTest case', function() {

        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert
        cy.on('window:alert',(str) =>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
    
        cy.on('window:confirm',(str) =>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //switching tab example: we will test this new webpage that opens on a different tab, on the current webpage
        // invoke the removeAttr function and the second thing will be what you want to remove
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        //retriving current url of the page that is active
        cy.url().should('include','rahulshettyacademy')
        
        //want to go back to the original page
        cy.go('back')

  }) 
})