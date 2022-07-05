/// <reference types = "cypress" />


describe('Empty Test', () => {
  // TEST STUDY 1
  // it('test one', () => {
  //   // cy.visit('https://example.cypress.io')
  //   // throw new Error('oops')
  //   cy.visit('https://github.com/')
  //   cy.viewport(1200, 720)

  //   // mocha
  //   // cy.contains('Where the world builds software')
  //   // cy.get('div.application-main').should('exist')
  //   // cy.get('div.no-application-main').should('not.exist')

  //   //way 1
  //   cy.contains('Where the world builds software') // not recommended approach
    
  //   // cy.get methods
  //   // cy.get('.asyncComponent > div > a')

  //   //Way 3
  //   // cy.get('[data-test=learnbtn]')
    
  // })


  it('The page loads, at least', () => {
    cy.visit('https://github.com/')
  })

// TEST STUDY 2

  //LOGIN 
  it.only('Sign In page seems good', () => {
    cy.viewport(1280, 720)
    cy.visit('https://github.com/')

    // 1. Sign in page
    cy.contains('Sign in').click()
    cy.contains('Sign in to GitHub').should('exist')
    cy.contains(' Username or email address').should('exist')
    cy.contains('Sign in', { timeout: 1 * 1000 }).should('exist')
    cy.contains('New to GitHub? Create an account.').should('exist')
    
    // 2. Password reset page
    cy.contains('Forgot password?').click()

    // CYPRESS URL TESTING

    // 3. Verify
    cy.url().should('include','/password_reset')

    // cypress console log on cy tab
//this is the right way
    cy.url().then((value) => { 
      cy.log('The current real URL is: ', value)
    })
// will return empty object (not recommended way)
    // cy.log('The current URL is:', cy.url()) 

    // 4. go back, on the sign in page
    cy.go('back')

  })

  // Cypress HOOKS

  // saying this should run before every single test
  //bootstrapping external things(local storeage, cookies, tokens, etc)
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('https://github.com/')

    // setting up local storage general_syntax

    cy.then((token) => {
      window.localStorage.setItem('__auth__token', token)
    })
  })

})