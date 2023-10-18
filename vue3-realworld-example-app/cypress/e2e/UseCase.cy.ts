// A User first time on the Website he begins by creating an account, then check the user page, then post an Article, his article his liked/followed


describe('UseCase', function () {
  // afterEach(()=> {
  //   cy.logout()
  // });
  it('Create a New user', function () {
    cy.visit('/#/register')
    cy.get('form[aria-label="Registration form').within(() => {
      cy.get('input[aria-label="Username"]')
        .type('test')
      cy.get('input[aria-label="Email"]')
        .type('test@mail.com')
      cy.get('input[aria-label="Password"]')
        .type('test123456')
      cy.contains('Sign up').click()
      cy.url().should('match', /\/#\/$/)
    })
  })
  it('Check that the User we just created does not have article nor follows articles', () => {
    cy.login1()
    cy.visit('/#/profile/test')
    cy.get('.article-preview').should('contain.text', 'No articles are here... yet.')
    cy.visit('/#/profile/test/favorites')
    cy.get('.article-preview').should('contain.text', 'No articles are here... yet.')

  })
  it('Post a new article for the User created previously', () => {
    cy.login1()
    cy.visit('/#/article/create')
    cy.get('form').within(() => {
      cy.get('input[aria-label="Title"]').type('Title')
      cy.get('input[aria-label="Description"]').type('Une Description')
      cy.get('textarea[aria-label="Body"]').type('Le corps du text ouwou')
      cy.get('button[type="submit"]').click()
      cy.url().should('match', /\/#\/article\/title/)
    })
  })
  it('login another and like the post the previous user just created', () => {
    cy.login0()
    cy.intercept('POST', /\/api\/articles\/title\/favorite/).as('addFav')
    cy.contains('Title').click()
    cy.url().should('match', /\/#\/article\/title/)
    cy.get('div[class="article-meta"]').first().within(() => {
      cy.get('button[aria-label="Favorite article"]').click()
    })
    cy.wait('@addFav').should('have.deep.nested.property', 'response.statusCode', 200)
    cy.visit('/#/profile/test0/favorites')
    cy.get('div[class="article-preview"]').within(()=>{
      cy.get('h1').should('contain.text', 'Title')
    })

  })
  it('Check if User "test" has an article with one follower', () => {
    cy.login1()
    cy.visit('/#/profile/test')
    cy.get('button[aria-label="Favorite article"]').contains('1')
  })
})
