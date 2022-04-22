describe('Task A', () => {
  it('1.	Navigate to https://www.amcsgroup.com/', function() {
    cy.visit('https://www.amcsgroup.com/')
  })
 
  it('2.	Click on English (or any predefined language)', function() {
    cy.get('.language-selector').click()
  })

  it('3.	Verify that in drop down are options:Netherlands, Deutch, Espanol, Dansk, Francais, English (United Kingdom)', () => {
    //Netherlands
    cy.get('[lang="nl"]').should('be.visible')

    //Deutch
    cy.get('[lang="de"]').should('be.visible')

    //Espanol
    cy.get('[lang="es"]').should('be.visible')

    //Dansk
    cy.get('[lang="da"]').should('be.visible')

    //Francais
    cy.get('[lang="fr"]').should('be.visible')

    //English(GB)
    cy.get('[lang="en-GB"]').should('be.visible')
  })

})

describe('Task B', () => {
  it('1.	Navigate to https://www.amcsgroup.com/', function() {
    cy.visit('https://www.amcsgroup.com/')
  })
 
  it('2.	Click on English (or any predefined language)', function() {
    cy.get('.language-selector').click()
  })

  it('3.	Verify that in drop down are not options: Slovak, Irish, undefined', () => {
    //Slovak
    cy.get('[lang="sk"]').should('not.exist')

    //Irish
    cy.get('[lang="ie"]').should('not.exist')

    //undefined
    cy.get('[lang="undefined"]').should('not.exist')
  })

})

describe('Task C', () => {
  it('1.	Navigate to https://www.amcsgroup.com/', function() {
    cy.visit('https://www.amcsgroup.com/')
  })
 
  it('2.	Click on English (or any predefined language)', function() {
    cy.get('[href="/careers/#"]').scrollIntoView()
    cy.get('[href="/careers/#"]').click()
  })

  it('3.	Verify that you are redirected to https://www.amcsgroup.com/careers/#', function() {
    cy.url().should('eq','https://www.amcsgroup.com/careers/#')
  })

})

describe('Task D', () => {
  it('1.	Navigate to https://www.amcsgroup.com/careers/#', function() {
    cy.visit('https://www.amcsgroup.com/careers/#')
  })
 
  it('2.	Verify that filters contain Countries United States, United Kingdom, Australia and Ireland but not Slovakia, Poland and Papua New Guinea', function() {
    cy.get('.filter-title').scrollIntoView()

    //United States
    cy.get('[value=unitedstates]').should('be.visible')

    //United Kingdom
    cy.get('[value=unitedkingdom]').should('be.visible')

    //Australia
    cy.get('[value=australia]').should('be.visible')

    //Ireland
    cy.get('[value=ireland]').should('be.visible')


    //Slovakia
    cy.get('[value=slovakia]').should('not.exist')

    //Poland
    cy.get('[value=poland]').should('not.exist')

    //Papua New Guinea
    cy.get('[value=papuanewguinea]').should('not.exist')
    
  })
})

describe('Task E', () => {
  it('1.	Navigate to https://www.amcsgroup.com/careers/#', function() {
    cy.visit('https://www.amcsgroup.com/careers/#')
  })
 
  it('2.	Verify that filters categories contain Professional Services and Sales Marketing but does not contain Fishing, Hunting and Driving', function() {
    cy.get(':nth-child(3) > .group-name').scrollIntoView()

    //Professional Services
    cy.get('[value=professionalservices]').should('be.visible')

    //Sales Marketing
    cy.get(':nth-child(3) > ul > :nth-child(1) > .checkbox > span').should('be.visible')


    //Fishing
    cy.get('[value=fishing]').should('not.exist')

    //Hunting
    cy.get('[value=hunting]').should('not.exist')

    //Driving
    cy.get('[value=driving]').should('not.exist')
    
  })
})

describe('Task F', () => {
  it('1.	Navigate to https://www.amcsgroup.com/careers/#', function() {
    cy.visit('https://www.amcsgroup.com/careers/#')
  })
 
  it('2.	Click on Filters -> Countries ->Ireland', function() {
          //Ireland
          cy.get(':nth-child(2) > ul > :nth-child(5) > .checkbox > span').click()
  })

  it('3.	Verify that URL is changes to https://www.amcsgroup.com/careers/?countries=ireland', function() {
    cy.url().should('eq','https://www.amcsgroup.com/careers/?countries=ireland')
})
})
