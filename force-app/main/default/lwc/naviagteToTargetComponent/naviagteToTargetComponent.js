import { LightningElement, api } from "lwc";

export default class NaviagteToTargetComponent extends LightningElement {
  @api recordId;
  @api firstName;
  @api lastName;
}