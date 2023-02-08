import { LightningElement } from "lwc";
import LOCALE from "@salesforce/i18n/locale";
import CURRENCY from "@salesforce/i18n/currency";
import DIR from "@salesforce/i18n/dir"; // direction

export default class Internationalisation extends LightningElement {
  number = 748349745.4637;
  dir = DIR;
  formattedNumber = new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: CURRENCY,
    currencyDisplay: "symbol"
  }).format(this.number);
}