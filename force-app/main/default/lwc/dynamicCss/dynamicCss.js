import { LightningElement } from "lwc";

export default class DynamicCss extends LightningElement {
  percent = 10;
  handleText(event) {
    this.percent = event.target.value;
  }

  get getPercentage() {
    return `width: ${this.percent}%`;
  }
}