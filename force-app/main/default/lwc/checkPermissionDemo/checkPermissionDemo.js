import { LightningElement } from "lwc";

import hadViewAllData from "@salesforce/userPermission/ViewAllData";

import myCustomPermission from "@salesforce/customPermission/Custom_Permission_LWC"; // Pick the names from the custom permission

export default class CheckPermissionDemo extends LightningElement {
  get hadViewAllDataAvailable() {
    return hadViewAllData;
  }

  get hasCustomDetailsPermissions() {
    return myCustomPermission;
  }
}