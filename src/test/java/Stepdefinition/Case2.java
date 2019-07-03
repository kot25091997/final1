package Stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Case2 {
	WebDriver driver;
	@Given("user opens SignIn page")
	public void user_opens_SignIn_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_c2a.04.29\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		driver.findElement(By.linkText("SignIn")).click();
				
		
	}

	@When("user enter username as {string}")
	public void user_enter_username_as(String un) {
		driver.findElement(By.id("userName")).sendKeys(un);
		
	
	}

	@When("password as {string}")
	public void password_as(String pwd) {
		driver.findElement(By.name("password")).sendKeys(pwd);
		
	}

	@When("click submit button as login")
	public void click_submit_button_as_login() {
	    driver.findElement(By.name("Login")).click();
	}


	@Then("verify login success")
	public void verify_login_success() {
		String a="Hi, shwesam    SignOut";
		String actual=driver.getTitle();	
		Assert.assertEquals(actual, a);
		
	driver.close();
	}



}
