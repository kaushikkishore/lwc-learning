import { LightningElement } from "lwc";
import MOMENT from "@salesforce/resourceUrl/moment";
import ANIMATE from "@salesforce/resourceUrl/animate";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";

export default class ThirdPartyJavascript extends LightningElement {
  isMomentLoaded = false;
  // As this will called multiple times when the comp will change.
  // so no re redner the moment.
  renderedCallback() {
    if (!this.isMomentLoaded) {
      Promise.all([
        loadScript(this, MOMENT + "/moment/moment.js"),
        loadStyle(this, ANIMATE + "/animate/animate.min.css")
      ])
        .then(() => {
          this.isMomentLoaded = true;
          this.showDateOnScreen();
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }
  currentDate;

  showDateOnScreen() {
    this.currentDate = moment().format("LLLL");
  }
}