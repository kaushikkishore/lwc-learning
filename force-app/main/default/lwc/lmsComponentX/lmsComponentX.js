import { LightningElement, wire } from "lwc";
import SAMPLEMSGCNL from "@salesforce/messageChannel/SampleMessageChannel__c";
import {
  APPLICATION_SCOPE,
  MessageContext,
  subscribe,
  unsubscribe
} from "lightning/messageService";

export default class LmsComponentX extends LightningElement {
  @wire(MessageContext)
  context;

  receivedMessage;
  channelSubscription;

  connectedCallback() {
    this.subscribeMessage();
  }

  subscribeMessage() {
    this.channelSubscription = subscribe(
      this.context,
      SAMPLEMSGCNL,
      (message) => {
        this.handleIncomingMessage(message);
      },
      { scope: APPLICATION_SCOPE }
    );
  }

  handleIncomingMessage(message) {
    this.receivedMessage = message.lmsData.value
      ? message.lmsData.value
      : "No Message published";
  }

  unsubscribbeMessage() {
    unsubscribe(this.channelSubscription);
    this.channelSubscription = null;
  }
}