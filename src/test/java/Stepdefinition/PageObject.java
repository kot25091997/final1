package Stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageObject {
	static WebDriver driver;
	//public PageObject()
	//{
		//PageFactory.initElements(driver,this );
	//}
	@FindBy(name="userName")public static WebElement un;
	@FindBy(name="password")public static WebElement psd;
	@FindBy(name="login")public static WebElement ok;
	public void login()
	{
		un.sendKeys("mercury");
		psd.sendKeys("mercury");
		ok.click();
	}
	}


