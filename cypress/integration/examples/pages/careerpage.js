export class CareerPage {
    validate5WWValues(){
        cy.get('[data-w-id="5ca5d1a2-0a66-d68d-d823-3e43f9933965"] > h4').contains('Pioneering')
        cy.get('[data-w-id="da11720d-db14-9322-1b95-ec2c5a0630a5"] > h4').contains('Expert')
        cy.get('[data-w-id="5ca5d1a2-0a66-d68d-d823-3e43f993397a"] > h4').contains('Accessible')
        cy.get('[data-w-id="5ca5d1a2-0a66-d68d-d823-3e43f993398f"] > h4').contains('Reliable')
        cy.get('[data-w-id="b4dee6d6-b65c-5a4b-04ae-97d0c3b9b822"] > h4').contains('Hungry')
    }

   clickViewJobs(){
    cy.get('.button-2').click()
    cy.url().should('eq', 'https://www.wealthwizards.com/job-vacancies')
   }
}

export const careerPage = new CareerPage();