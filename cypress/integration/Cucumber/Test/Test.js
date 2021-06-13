import { Given } from "cypress-cucumber-preprocessor/steps"
import {When } from "cypress-cucumber-preprocessor/steps"
import { And } from "cypress-cucumber-preprocessor/steps"
import { Then } from "cypress-cucumber-preprocessor/steps"
import {LoginPage, loginPage} from "../../examples/pages/loginpage"
import {CareerPage, careerPage} from "../../examples/pages/careerpage"
import {JobsPage, jobsPage} from "../../examples/pages/jobspage"

Given(`user is on the website`, () => {
    //Visit ExecuteAutomation Website
  loginPage.performLogin()   
})


When(`the user see the About Us has 3 values`, () => {
    loginPage.validateDropDown();
})

And(`user click on Careers`, () => {
    loginPage.clickOnCareers();
})

Then(`user will see 5 WW Values`, () => {
    careerPage.validate5WWValues();
})

And(`user select the View Jobs button`, () => {

    careerPage.clickViewJobs()   
})

Then(`user will see Lead Quality Engineer role Vacancy`, () => {
    jobsPage.validateQARole();
})

And(`user select the Find out more button`, () => {
    jobsPage.clickFindOutMore();
})

Then(`user validate the page`, () => {
    jobsPage.validateRole();
})
