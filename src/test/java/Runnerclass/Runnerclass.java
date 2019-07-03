package Runnerclass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/main/resources/case1.feature","src/main/resources/case2.feature","src/main/resources/case3.feature","src/main/resources/case4.feature"},
		glue = "Stepdefinition",
		plugin="html:target/htmlreport")
       // plugin="json:target/cucumber.json")
       // tags={"@smoke"})
//tags={"~@smoke"})
//tags={"@smoke","@regression"}) 
//tags={"@smoke,@regression"})



public class Runnerclass {

}
