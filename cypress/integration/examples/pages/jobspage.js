export class JobsPage {
    validateQARole(){
        cy.get(':nth-child(5) > .div-block-198 > .job-title-heading').contains('Lead Quality Engineer')
    }

    clickFindOutMore(){
        cy.get(':nth-child(5) > .div-block-200 > .button').click()
    }

    validateRole(){
        cy.url().should('eq', 'https://www.wealthwizards.com/jobs/lead-quality-engineer')
        cy.get('.heading-27').contains('Lead Quality Engineer')
      
    }
}
export const jobsPage = new JobsPage();