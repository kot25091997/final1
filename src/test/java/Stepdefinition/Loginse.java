package Stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Loginse {
	WebDriver driver;
	@Given("user opens newtours application")
	public void user_opens_newtours_application() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\training_c2a.04.29\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://newtours.demoaut.com/");
	   
	}

	@When("user enter username as {string} and password as {string}")
	public void user_enter_username_as_and_password_as(String un, String pwd) {
		PageObject loginpage=PageFactory.initElements(driver,PageObject.class );
		loginpage.login();
		//driver.findElement(By.name("userName")).sendKeys(un);
		//driver.findElement(By.name("password")).sendKeys(pwd);
		//driver.findElement(By.name("login")).click();
	   
	}
	@Then("valid successful login")
	public void valid_successful_login() {
		driver.close();
	   
	}


}
