import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    accountName = '';
    handleChange(event) {
        this.accountName = event.target.value;
    }
    handleSubmit(event) {
        event.preventDefault();
        const inputCmp = this.template.querySelector('lightning-input');
        const value = inputCmp.value;
        if (!value.includes('india')) {
            inputCmp.setCustomValidity('Account name must contain "india"');
        } else {
            inputCmp.setCustomValidity('');
            const fields = event.detail.fields;

            // fields.Phoen = '98967436332';
            // fields.AnnualRevenue = 2000;
            fields.Name = value;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }

        // Show error message 
        inputCmp.reportValidity();


    }

    successHandler(evt) {
        const toastEvent = new ShowToastEvent({
            title: 'Record created',
            message: `Record ID: ${evt.detail.id}`,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }

    handleError(event) {
        const toastEvent = new ShowToastEvent({
            title: 'Error creating account',
            message: `Error: ${JSON.stringify(event.detail.message)}`,
            variant: 'error'
        });
        this.dispatchEvent(toastEvent);
    }
}