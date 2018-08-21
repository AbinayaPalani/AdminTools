var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,      
        brandTitle:"Regression Testing",
        columnLayout:[1,2],
        storeScreenshots:true,
        metadata: {
            "App Version":"4.3.0",
            "Test Environment": "STAGING",
            "Browser": "Chrome  68.0.3440.42",
            //"Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote",
            "columnLayout":[1,2]
            
        }
    };
 
    reporter.generate(options);