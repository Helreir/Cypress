describe('My first test', function(){
  it('Does not do much', function(){
    cy.visit('http://automationpractice.com')
    .url('/index.php')

    var shopCart = 'Your shopping cart';
    //cy.scrollTo('bottom')

    cy.contains('Printed Summer Dress').click()
    cy.contains('View larger').click()
    cy.get('.fancybox-next').click()
    cy.get('.fancybox-item').click()
    cy.get('.icon-plus').click()
    cy.contains('Add to cart').click()
    cy.contains('Product successfully added to your shopping cart').should('contain', 'Product successfully added to your shopping cart')
    cy.contains('Continue shopping').click()

    cy.get('[name="search_query"]').type('dress')
    cy.get('#searchbox > .btn').click()
    cy.contains('Printed Chiffon Dress').click()
    cy.get('[id="view_scroll_right"]').click()
    cy.get('.exclusive > span').click()
    cy.get('[title="Close window"]').click()

    cy.contains('Cart').trigger('mouseover')
    cy.contains('Check out').click()
    cy.contains(shopCart).should('contain', shopCart)

    cy.get('.cart_navigation > .button > span').click()

  })
})
