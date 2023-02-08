import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class Notifications extends LightningElement {
  toastSuccess(event) {
    console.log(event.target.toasttype);

    this.showToast(
      "Success title",
      "{0} This is success message. {1}",
      event.target.toasttype
    );
  }

  toastError(event) {
    console.log(event.target.toasttype);

    this.showToast(
      "Error title",
      "This is error message",
      event.target.toasttype
    );
  }

  toastWarning(event) {
    console.log(event.target.toasttype);

    this.showToast(
      "Warning title",
      "This is warning message",
      event.target.toasttype
    );
  }

  toastInfo(event) {
    console.log(event.target.toasttype);

    this.showToast(
      "Info title",
      "This is info message",
      event.target.toasttype
    );
  }

  showToast(title, message, variant) {
    const evt = new ShowToastEvent({
      title,
      message,
      variant,
      messageData: [
        "Salesforce",
        {
          url: "https://google.com/maps",
          label: "Click here"
        }
      ],
      mode: "pester"
      // mode: sticky - remains visible untill user cancels
      // pester visible for 3 seconds no option to close.
      // dissmissable(default) - 3 seconds with option to close.
    });

    this.dispatchEvent(evt);
  }
}