import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'


describe('My Second Test Suite', function()
{

    before (function() {
        //runs once before all tests in the block

        //allows us to talk to the fixtures folder, we can get the data from that folder
        cy.fixture('example').then(function(data) {

            this.data = data //cannot be accessed from outside

        })
    })

    it('My FirstTest case', function() {
    

    const homePage = new HomePage()
    const productPage = new ProductPage()
    //check cypress.json. you can also take a base site and have other tabs be opened 
        cy.visit(Cypress.env('url')+"/angularpractice/")
        
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', 2)
        homePage.getEntrepreneur().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 8000)
        homePage.getShopTab().click()




        //commenting this out as now we want to work with JS classes
        /* cy.get('input[name="name"]:nth-child(2)').type(this.data.name) //now I can use the data file and pull props
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', 2) //using jQuery to clarify an attribute
        cy.get('#inlineRadio3').should('be.disabled') //checking if a checkbox is diabled
        cy.pause() //useful when debugging, can also use cy.debug()
        cy.get(':nth-child(2) > .nav-link').click() */

        this.data.productName.forEach(function(element) { //function using array and forEach command from developer mozilla
            cy.selectProduct(element)
        });

        productPage.checkOutButton().click()
        var sum = 0 //declaring sum as 0 initially

        //below we are working with JS and jQuery

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>
        {
            const amount = $el.text()
            var res = amount.split(" ");
            res = res[1].trim()
            sum = Number(sum) + Number(res) //adding the sums
        })
        .then(function()
        {
            cy.log(sum)
        })


        //checking if the money amount is correct
        cy.get('h3 strong').then(function(element)
        {
            const amount = element.text()
            var res = amount.split(" ");
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)



        })
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true}) //due to the error, you can forcefully change it
        cy.get('input[type="submit"]').click() 
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        //^^this line of code is not working because there are extra invisible characters, we will troubleshoot
        cy.get('.alert').then(function(element) {

            const actualText = element.text()
            expect (actualText.includes('Success')).to.be.true
        }) //ALTERNATE WAY TO CHECK IF TEXT IS MATCHING WHAT YOU WANT IT TO MATCH


        
        // cy.selectProduct('Blackberry') //this is a custom command, check out support - commands.js
        // cy.selectProduct('Nokia Edge') //this is a custom command, check out support - commands.js


    })




  }) 