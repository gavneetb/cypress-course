class ProductPage {

    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }


}

export default ProductPage; //makes this file or class avaliable to all the other files