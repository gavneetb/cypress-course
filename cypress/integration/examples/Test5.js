
describe('My Second Test Suite', function()
{

    it('My FirstTest case', function() {

        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


        //here we are working with elements from a table in a certain column (2)
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            //working with each element (moving through siblings)
            const text = $el.text()
            if (text.includes("Python")) {

                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal("25")
                })

            }


        })



  }) 
})