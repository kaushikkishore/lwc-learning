import { LightningElement, wire } from "lwc";
import SAMPLEMSGCNL from "@salesforce/messageChannel/SampleMessageChannel__c";
import { MessageContext, publish } from "lightning/messageService";

export default class LmsComponentA extends LightningElement {
  @wire(MessageContext)
  context;

  value;
  inputHandler(event) {
    this.value = event.target.value;
  }

  publishMessage() {
    // This lms data is coming from xml config file.
    const message = {
      lmsData: { value: this.value }
    };
    publish(this.context, SAMPLEMSGCNL, message);
  }
}