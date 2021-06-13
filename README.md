# wealthwizardsTest

# Q1)Create a JS npm project with cypress.io

How to  Execute

- Download the git repo 
- If you havent install npm use command ->brew install npm
- Install cypress -> npm install cypress --save-dev
- Install dependencies in package.json  Here important ones are  I have used cucumber preprocessor to write BDD feature files

   install npm 
   
   install —save-dev cypress-cucumber-preprocessor
   
   install cucumber reporting ->
   
   npm  install —save-dev cucumber-html-reporter
   
   install mocha reporting -> 
   
   npm install mocha --save-dev
   
   npm install cypress-multi-reporters --save-dev
   
   npm install mochawesome --save-dev
   
   npm install mochawesome-merge --save-dev.
   
   npm install mochawesome-report-generator --save-dev.
   
   install percy-> 
   
   npm install @percy/script and npm install @percy/cypress
   
   install puppetter-> 
   
   npm install puppetter which used by the snapshot.js
   
   Then go to cypress folder and execute -> npm run test
   
   I have setup all the commands in the package.json inorder to auto create the reports in the wealthwizardsTest/reports-cucumber/ folder you can find the cucumber-htmlreport.html created using cucumber reporting
   
   In wealthwizardsTest/cypress/reports/mocha/ you can get mochawsome.html files for reporting.
   
   
# Q2) Part 2: Test Reporting

Mochawsome Report

![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-06-13%20at%2017.33.44.png)

Cucumber Report

![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-06-13%20at%2017.33.11.png)

# Q3) Part 3: Visual test

I have created percy account craeted a project and get the token.

you need to export the token

Created cypress/snapshot.js file to get the QA Lead role snapshots in differnt resolutions and sizes for 3 browsers.chrome/firefox and microsoft edge.

Go to cypress folder and executed npx percy exec -- node snapshot.js. which will upload the snapshots to percy and then compare.

Chrome 1280px

![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-06-13%20at%2013.18.54.png)

Chrome 375px

![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-06-13%20at%2013.18.31.png)

Firefox 1280px

![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-06-13%20at%2013.17.40.png)

Firefox 375px

![title](https://github.com/nipuniuthpala/images/blob/master/Screenshot%202021-06-13%20at%2013.17.22.png)


# Part 4: CI Integration

pipeline {
    agent any   // you can have docker or jenkons it self to run 

    tools {nodejs "node"}

    environment {
        git url 'https://github.com/nipuniuthpala/wealthwizardsTest.git'
    }
   //install all dependencies in package.json
    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        //build the project
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
             //Run the tests
        stage('Tests') {
            steps {
                sh 'npm run test'
            }
        }
       
        
       
}



# Part 5: Cucumber

I can create GovTx.feature file in the same folder but I didnt put the feature file in the same location as its not impelemented. Please find the scenarios. Can create all teh sacenarios as a scenario outline and give examples.

 Scenario Outline: Validate the Taxes are correctly calculated for each band for the normal individual who is single and no disability
 
       Given the user has "income"
       
        When user has following "Tax" bands
        
        And user has "Personal allowance"
        
        Then user has to pay "Tax Paid"
        
    Examples:
        |income| Tax|Personal allowance|Tax Paid |
        
        | 0  | 0 |£0.00|£0.00|
        
        |12570|0|£12,570.00|£0|
        
        |12571|0,20|£12,570.00|£0.20|
        
        |50270|0,20|£12,570.00|£7540|
        
        |50271|0,20,40|£12,570.00|£7,540.40|
        
        |100000|0,20,40|£12,570.00|£27,432.00|
        
        |100001|0,20,40|£12,569.50|£27,432.60|
        
        |150000|0,20,40|£0.00|£52,460.00|
        
        |150001|0,20,40,45|£0.00|£52,460.45|
        	


   
   
    
