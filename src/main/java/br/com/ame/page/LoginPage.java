package br.com.ame.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPage {
	
	private WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void visita() {
		driver.get(new URLBase().getUrlBase());
		
	}
	
	public void clicLogin() {
		driver.findElement(By.className("login")).click();
	}
	
	public void loginAcesso(String email) {
		WebElement txtEmail = driver.findElement(By.id("email"));
		txtEmail.sendKeys(email);
	}
	
	public void loginSenha(String senha) {
		WebElement txtSenha =  driver.findElement(By.id("passwd"));
		txtSenha.sendKeys(senha);
		WebElement btnLogin = driver.findElement(By.id("SubmitLogin"));
		btnLogin.click();
	}
	
	public String alertHome(String alert) {
		driver.findElement(By.xpath("/html/body/div/div[2]/div/div[1]/span[2]")).getText();
		return alert;
	}
	
	
	public String alert(String alert) {
		driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[1]/ol/li")).getText();
		return alert;
	}
	
	

}
