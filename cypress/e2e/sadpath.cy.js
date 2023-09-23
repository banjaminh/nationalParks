describe('SadPath testing', () => {

    it("Should direct user to error page if API is down", () => {
    cy.visit('http://localhost:3000/')
    cy.intercept(
        'GET',
        'https://developer.nps.gov/api/v1/parks?limit=1000&api_key=uHEd1FO0v1bWCYucJw8e7sFAk8XIFUYOGKvatMr4',
        { statusCode: 500, fixture: 'empty.json' }).as('error-404')
    cy.wait('@error-404')
    cy.get('h2').should('contain', 'Whoops')
    })

    it("Should direct user to error page if API is down", () => {
        cy.visit('http://localhost:3000/')
        cy.intercept(
            'GET',
            'https://developer.nps.gov/api/v1/parks?limit=1000&api_key=uHEd1FO0v1bWCYucJw8e7sFAk8XIFUYOGKvatMr4',
            { statusCode: 400, fixture: 'empty.json' }).as('error-404')
        cy.wait('@error-404')
        cy.get('h2').should('contain', 'Whoops')

        })
    })
