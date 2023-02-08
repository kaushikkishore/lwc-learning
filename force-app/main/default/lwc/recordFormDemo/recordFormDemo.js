import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordFormDemo extends LightningElement {

    // Note this will be available only when the component is places in the account page. 
    @api recordId;
    @api objectApiName;

    objectName = ACCOUNT_OBJECT;
    fieldList = [ ACCOUNT_NAME, ACCOUNT_TYPE, ANNUAL_REVENUE, ACCOUNT_INDUSTRY ];

    successHandler(e) {
        console.log(e.detail.id);
        const toastEvent = new ShowToastEvent({
            title : "Account created",
            message: "Record ID "+ e.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent); 

    }
}