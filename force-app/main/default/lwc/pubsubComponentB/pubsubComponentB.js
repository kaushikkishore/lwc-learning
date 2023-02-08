import { LightningElement } from "lwc";
import pubsub from "c/pubsub";

export default class PubsubComponentB extends LightningElement {
  connectedCallback() {
    this.callSubscriber();
  }
  message;

  callSubscriber() {
    pubsub.subscribe("componentA", (message) => {
      this.message = message;
    });
  }
}