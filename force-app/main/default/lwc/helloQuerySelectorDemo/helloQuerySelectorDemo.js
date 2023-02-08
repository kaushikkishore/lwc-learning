import { LightningElement } from "lwc";

export default class HelloQuerySelectorDemo extends LightningElement {
  users = ["john", "mike", "nik", "Tom"];

  handleClick(event) {
    const ele = this.template.querySelector("h1");
    ele.style.border = "1px solid #d5d5d5";
    console.log(ele.innerText);

    const namesElement = this.template.querySelectorAll(".name");

    Array.from(namesElement).forEach((item) => {
      item.setAttribute("title", item.innerText);
      console.log(`User name is ${item.innerText}`);
    });

    const childElement = this.template.querySelector(".child");
    childElement.innerHTML = "<p> This is random tag from JS </p>";
  }
}