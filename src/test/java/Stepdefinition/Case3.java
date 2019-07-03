package Stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Case3 {
	WebDriver driver;
	@Given("user opens the testme app")
	
	public void user_opens_the_testme_app() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_c2a.04.29\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		//driver.findElement(By.linkText("SignIn")).click();
		
		
	}

	@When("user enters the username as {string} And password as {string}")
	public void user_enters_the_username_as_And_password_as(String un, String pwd) {
		driver.findElement(By.linkText("SignIn")).click();
		
		
		driver.findElement(By.id("userName")).sendKeys(un);
		driver.findElement(By.id("password")).sendKeys(pwd);
		
	
	}

	@When("click submit button login")
	public void click_submit_button_login() {
		driver.findElement(By.name("Login")).click();
		
		
	}

	@When("user searches the product as head and select headphone")
	public void user_searches_the_product_as_head_and_select_headphone() {

		Actions actions=new Actions(driver);
		WebElement fin=driver.findElement(By.id("myInput"));
		fin.sendKeys("head");
		actions.sendKeys(fin,Keys.ARROW_DOWN).sendKeys(Keys.ENTER).build().perform();
	//	driver.findElement(By.xpath("//*[@id=\"myInputautocomplete-list\"]/div")).click();
		
	//	driver.findElement(By.xpath("/html/body/div[1]/form/input")).click();
		
		//driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div/div/div/div[2]/center/a")).click();
		//driver.findElement(By.xpath("//*[@id='header']/div[1]/div/div/div[2]/div/a[2]")).click();
		
	}//*[@id="myInputautocomplete-list"]/div

	@When("clickFind button")
	public void clickfind_button() {
	}

	@Then("verify product search success")
	public void verify_product_search_success() {
		String b=driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div/div/div/div[1]/center[1]/h4")).getText();
		Assert.assertEquals("Headphone", b);
	//	driver.findElement(By.xpath("//*[@id='cart']/tfoot/tr[2]/td[5]/a")).click();

		driver.close();
	}






}
