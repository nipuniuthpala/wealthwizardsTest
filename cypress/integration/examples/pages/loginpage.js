

export class LoginPage {

    performLogin(){
        cy.visit('https://www.wealthwizards.com/')
    }

    validateDropDown(){
        cy.get('#w-dropdown-toggle-1').click()
        cy.get('[href="/team"]').contains('Who we are')
        cy.get('[href="/careers"]').contains('Careers')
        cy.get('[href="#"]').contains('Contact')
    }

    clickOnCareers(){
        cy.get('#w-dropdown-list-1').click()
        cy.url().should('eq', 'https://www.wealthwizards.com/careers')

    }

   
}

export const loginPage = new LoginPage();