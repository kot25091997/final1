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


public class Case4 {
	WebDriver driver;
	int g;
	@Given("user opensthe testme app")
	
	public void user_opensthe_testme_app() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_c2a.04.29\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		
	}

	@When("user entersthe username as {string} And password as {string}")
	public void user_entersthe_username_as_And_password_as(String un, String pwd) {
        driver.findElement(By.linkText("SignIn")).click();
		driver.findElement(By.id("userName")).sendKeys(un);
		driver.findElement(By.id("password")).sendKeys(pwd);
		
	}

	@When("click submit buttonlogin")
	public void click_submit_buttonlogin() {
		driver.findElement(By.name("Login")).click();
		
	}

	@When("user searches the product ashead and select headphone")
	public void user_searches_the_product_ashead_and_select_headphone() {
		Actions actions=new Actions(driver);
		WebElement fin=driver.findElement(By.id("myInput"));
		fin.sendKeys("head");
		actions.sendKeys(fin,Keys.ARROW_DOWN).sendKeys(Keys.ENTER).build().perform();
	
	}

	@When("click Find button")
	public void click_Find_button() {
		String b=driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div/div/div/div[1]/center[1]/h4")).getText();
		Assert.assertEquals("Headphone", b);
	
	}

	@When("user check for size of cart")
	public void user_check_for_size_of_cart() {
	g=driver.findElements(By.partialLinkText("Cart")).size();
	System.out.println(g);
	}
	
	@Then("verify add to cart success")
	public void verify_add_to_cart_success() {
	if(g>0)
	{
		Assert.assertTrue(false);
		
	}else
	{
		Assert.assertTrue(true);
		driver.close();

	}
	}
}
