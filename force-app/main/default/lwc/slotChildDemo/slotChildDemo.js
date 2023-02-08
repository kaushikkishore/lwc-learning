import { LightningElement } from "lwc";

export default class SlotChildDemo extends LightningElement {
  handleSlotChange() {
    const footer = this.template.querySelector(".slds-card_footer");
    if (footer) {
      footer.classList.remove("slds-hide");
    }
  }
}