// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands'

import {ROUTES} from '../e2e/constant'

declare global {
  namespace Cypress {
    // noinspection JSUnusedGlobalSymbols
    interface Chainable {
      login(): void

      logout(): void

      login1(): void

      login0(): void

      isLogged(): void
    }
  }
}

Cypress.Commands.add('login', (username = 'plumrx') => {
  cy.fixture('user.json').then(authResponse => {
    authResponse.user.username = username
    cy.intercept('POST', /users\/login$/, {statusCode: 200, body: authResponse})
  })

  // click sign in button in home page
  cy.visit(ROUTES.LOGIN)

  cy.get('[type="email"]').type('foo@example.com')
  cy.get('[type="password"]').type('12345678')
  cy.get('[type="submit"]').contains('Sign in').click()

  cy.url().should('match', /#\/$/)
})
Cypress.Commands.add('login0', () => {

  // click sign in button in home page
  cy.visit(ROUTES.LOGIN)

  cy.get('[type="email"]').type('test0@mail.com')
  cy.get('[type="password"]').type('test123456')
  cy.get('[type="submit"]').contains('Sign in').click()

  cy.url().should('match', /#\/$/)
})
Cypress.Commands.add('login1', () => {

  // click sign in button in home page
  cy.visit(ROUTES.LOGIN)

  cy.get('[type="email"]').type('test@mail.com')
  cy.get('[type="password"]').type('test123456')
  cy.get('[type="submit"]').contains('Sign in').click()

  cy.url().should('match', /#\/$/)
})
Cypress.Commands.add('logout', () => {
  cy.get(`[href="${ROUTES.SETTINGS}"]`).click()

  cy.get('button.btn-outline-danger')
    .contains('logout')
    .click()

})


Cypress.Commands.add('isLogged', () => {
    cy.get('a[href="#/settings"').should('contain.text', 'Settings')
  }
)
