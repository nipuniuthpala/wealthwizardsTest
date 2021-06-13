var reporter = require('cucumber-html-reporter');
var options = {

        theme: "bootstrap",

        jsonFile: "./cypress/cucumber-json",

        output: "./reports-cucumber/cucumber-htmlreport.html",

        reportSuiteAsScenarios: true,

        scenarioTimestamp: true,

        launchReport: true,

        metadata: {

            "App Version":"1.0",

            "Test Environment": "Prod",

            "Browser": "Chrome  90.0.4430.85",

            "Platform": "Mac",

            "Parallel": "Scenarios",

            "Executed": "Remote"

        }

    };

    reporter.generate(options);