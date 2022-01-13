import { Selector } from "testcafe";

class LoginPage {
  emailInput: Selector;
  passwordInput: Selector;
  logintButton: Selector;
  accountHeader: Selector;
  
  constructor() {
    this.emailInput = Selector("#Email");
    this.passwordInput = Selector("#Password");
    this.logintButton = Selector(".login-button");
    this.accountHeader = Selector("strong").withText("Returning Customer");
  }
}

export default new LoginPage();