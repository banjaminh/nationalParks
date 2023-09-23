describe('Homepage Interactions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.intercept(
        'GET',
        'https://developer.nps.gov/api/v1/parks?limit=1000&api_key=uHEd1FO0v1bWCYucJw8e7sFAk8XIFUYOGKvatMr4',
        { statusCode: 200, fixture: 'testData.json' }
      ).as('parkData');
  
    
      cy.intercept('Get', 'https://developer.nps.gov/api/v1/parks?&stateCode=AL&stateCode=&api_key=uHEd1FO0v1bWCYucJw8e7sFAk8XIFUYOGKvatMr4',
        {statusCode: 200, fixture: 'testData.json' }
      ).as('stateData')

      cy.intercept('GET', 'http://localhost:3000/states/AL/park/alag',
      {statusCode: 200, fixture : 'singlePark.json'}
      ).as('singlePark')
    })
  
  
    it.skip('Should select a state and view map and add to wish list and remove', () => {
      cy.get('#dropdown').select('AL')
      cy.url().should('eq', 'http://localhost:3000/states/AL')
      cy.get('.leaflet-container').should('exist')
      cy.get('.leaflet-marker-icon').first().click()
      cy.get('.leaflet-popup').should('be.visible').click()
      cy.url().should('eq', 'http://localhost:3000/states/AL/park/alag')
      cy.get('h2').should('contain', 'Alagnak')
      cy.get('.wish-list-button').click()
      cy.get('.park-card').should('exist').should('contain', 'Alagnak')
      cy.get('.wish-list-button').click()
      cy.get('.park-card').should('not.exist')
    })

    it.skip('Should be able to navigate to park page then back to home', () => {
        cy.get('#dropdown').select('AL')
        cy.url().should('eq', 'http://localhost:3000/states/AL')
        cy.get('.leaflet-container').should('exist')
        cy.get('.leaflet-marker-icon').first().click()
        cy.get('.leaflet-popup').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/states/AL/park/alag')
        cy.get('.back-to-map').click()
        cy.url().should('eq', 'http://localhost:3000/states/AL')
        cy.get('.back-to-search').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it.skip('Allows user to add park to wish list, then navigate to park page through wish list card', () => {
        cy.get('#dropdown').select('AL')
        cy.url().should('eq', 'http://localhost:3000/states/AL')
        cy.get('.leaflet-container').should('exist')
        cy.get('.leaflet-marker-icon').last().click()
        cy.get('.leaflet-popup').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/states/AL/park/aleu')
        cy.get('.wish-list-button').click()
        cy.get('.park-card').should('exist').should('contain', 'Aleutian')
        cy.get('.back-to-map').click()
        cy.url().should('eq', 'http://localhost:3000/states/AL')
        cy.get('.park-card').click()
        cy.url().should('eq', 'http://localhost:3000/states/AK/park/aleu')
    })

    it.skip("Should direct user to Error page if wrong url and be able to return home", () => {
        cy.visit('http://localhost:3000/rubbish')
        cy.get('h2').should('contain', 'Whoops sorry')
        cy.get('button').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })

    


})