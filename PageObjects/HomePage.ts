import { Selector, t } from "testcafe";

class HomePage {
  subtitleHeader: Selector;
  RegisterLink: Selector;
  LoginLink: Selector;
  CartLink: Selector;
  MyAccountLink: Selector;
  LogoutLink: Selector;
  currenyList: Selector;
  constructor() {
    this.subtitleHeader = Selector("h2").withText("Welcome to our store");
    this.RegisterLink = Selector("a").withText("Register");
    this.LoginLink = Selector("a").withText("Log in");
    this.CartLink = Selector("a").withText("Shopping cart");
    this.MyAccountLink = Selector("a").withText("My account");
    this.LogoutLink = Selector("a").withText("Log out");
    this.currenyList = Selector("select#customerCurrency");
  }
}
export default new HomePage();
