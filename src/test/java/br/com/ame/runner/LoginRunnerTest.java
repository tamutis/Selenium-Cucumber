package br.com.ame.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\NOTE ASIS-724\\Downloads\\java\\Ame\\src\\test\\resources\\Feature\\Login.Feature",
		glue = "br.com.ame",
		tags = {"@login"},
		plugin = {"pretty","json:target/login/cucumber.json", "html:target/json/login/cucumber-pretty"},
		monochrome = true, 
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)

public class LoginRunnerTest {
	

}
