// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//learning how to create a custom cypress command
Cypress.Commands.add('selectProduct', (productName) => { 
cy.get('h4.card-title').each(($el, index, $list) => {
    if($el.text().includes(productName)) { //includes is better to use cause there can be random spaces you can't catch
        cy.get('button.btn.btn-info').eq(index).click()
    
}
})
})

//this command does not work due to the website
Cypress.Commands.add("LoginAPI", () =>  {
    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login",
    {"userEmail": "rahulshetty@gmail.com","userPassword":"Iamking@00"})
}
)




// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
