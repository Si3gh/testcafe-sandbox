import { fixture } from "testcafe";

import home from "../PageObjects/HomePage";
import loginpage from "../PageObjects/LoginPage";
import registerpage from "../PageObjects/RegisterPage";
import customerPage from "../PageObjects/CustomerPage";

const URL = "https://demo.nopcommerce.com/";
//Sem random number, teste de cadastro funciona apenas uma vez
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'testador'+randomNumber+'@qa.team';
var userPassword = 'batman123';

fixture("Formulário - Registro").page(URL);

test("User Registration ", async (t) => {
  await t
    .click(home.RegisterLink)
    .click(registerpage.GenderOption)
    .typeText(registerpage.FirstName, "Joao Pedro")
    .typeText(registerpage.LastName, "Broietti Pissolito");
  await registerpage.selectDay("8");
  await registerpage.selectMonth("June");
  await registerpage.selectYear("1998");
  await t
    .typeText(registerpage.Email, userEmail)
    .typeText(registerpage.Password, userPassword)
    .typeText(registerpage.ConfirmPassword, userPassword)
    .click(registerpage.RegisterButton)
    .expect(registerpage.SuccessfullMessage.exists)
    .ok()
    .takeScreenshot();
});

test("User Login ", async (t) => {
  await t
    // .click(home.LogoutLink)
    .click(home.LoginLink)
    .expect(loginpage.accountHeader.exists)
    .ok()
    .typeText(loginpage.emailInput, userEmail)
    .typeText(loginpage.passwordInput, userPassword)
    .click(loginpage.logintButton)
    .click(home.MyAccountLink)
    .expect(customerPage.ordersLink.exists)
    .ok()
    .click(customerPage.ordersLink)
    .expect(customerPage.noOrdersLabel.exists)
    .ok()
    .takeScreenshot();
});
