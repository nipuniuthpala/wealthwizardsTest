Feature: SiteTestFeature
    Test Site Main features

   Background: User logs in to the site 
        Given user is on the website
       

    Scenario: User should be see the Lead Quality Engineer Role 
        When the user see the About Us has 3 values
        And user click on Careers
        Then user will see 5 WW Values
        And user select the View Jobs button
        Then user will see Lead Quality Engineer role Vacancy
        And user select the Find out more button
        Then user validate the page