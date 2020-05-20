package br.com.ame.steps;

import static org.junit.Assert.assertEquals;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import br.com.ame.page.LoginPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Ent�o;
import cucumber.api.java.pt.Quando;

public class LoginTest {

	private WebDriver driver;
	private LoginPage login;

	@cucumber.api.java.Before(value = "@login")
	public void inicializa() {
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		login = new LoginPage(driver);
	}

	@Dado("^que estou acessando a aplica��o$")
	public void queEstouAcessandoAAplica��o() throws Throwable {
		login.visita();
	}

	@Quando("^informo o usuario \"([^\"]*)\"$")
	public void informoOUsuario(String email) throws Throwable {
		login.loginAcesso(email);
	}

	@Quando("^informo a senha \"([^\"]*)\"$")
	public void informoASenha(String senha) throws Throwable {
		login.loginSenha(senha);
	}

	@Ent�o("^devo ver \"([^\"]*)\" na �rea logada\\.$")
	public void devoVerNa�reaLogada(String alert) throws Throwable {
		assertEquals(login.alertHome(alert), "My account");
	}

	@Ent�o("^recebo a mensagem \"([^\"]*)\"$")
	public void receboAMensagem(String mensagem) throws Throwable {

		assertEquals(login.alert(mensagem), mensagem);
	}

	@After(order = 1, value = { "@login" })
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshot_login/" + cenario.getId() + ".jpg"));
		} catch (Exception e) {

		}

	}

	@After(order = 0, value = "@login")
	public void finaliza() {
		driver.close();
	}

}
