import { LightningElement } from "lwc";
import signin from "./sigin.html";
import signup from "./signup.html";
import renderMethod from "./renderMethod.html";
export default class RenderMethod extends LightningElement {
  render() {
    if (this.selectedButton === "Signup") {
      return signup;
    } else if (this.selectedButton === "Signin") {
      return signin;
    } else {
      return renderMethod;
    }
  }

  selectedButton = "";
  handleClick(event) {
    this.selectedButton = event.target.label;
  }
}