import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_OWNER_NAME from '@salesforce/schema/Account.Owner.Name';
import ACCOUNT_ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';

const fields = [ACCOUNT_NAME, ACCOUNT_OWNER_NAME, ACCOUNT_ANNUAL_REVENUE];

export default class GetRecordDemo extends LightningElement {
    // @wire(getRecord, { recordId: '', fields: [], optionalFields });
    // recordId is object defaultRecordTypeId ID 
    // fiedls is - which all fields you want to pull. 
    // optionalFields - add those fiedls where you have doubts if the user have acccess or not. 
    // 


    //  @wire(getRecord, { recordId: '', layoutType: 'Compact|Full' modes: 'Create|Edit|View', optionalFields? });
    // optionalFields - add those fiedls where you have doubts if the user have acccess or not. 


    // This means you are in record page. 
    @api recordId;

    name;
    owner;
    annualRevenue;

    @wire(getRecord, { recordId: '$recordId', fields, })
    getAccountDetails({ data }) {
        if (data) {
            console.log(data);
            /*
            const { Name, Owner, AnnualRevenue } = data.fields;
            this.name = Name.displayValue || Name.value;
            this.annualRevenue = AnnualRevenue.displayValue || AnnualRevenue.value;
            this.owner = Owner.displayValue || Owner.value.fields.value;
            */

            // Get the field values. 
            this.name = getFieldValue(data, ACCOUNT_NAME);
            this.annualRevenue = getFieldDisplayValue(data, ACCOUNT_ANNUAL_REVENUE);
            this.owner = getFieldValue(data, ACCOUNT_OWNER_NAME);

            // Get the display values. 
        }
    }

    /*
    @wire(getRecord, { recordId: '$recordId', layoutTypes: ['Full'], modes: ['View'] })
    getFullAccountDetails({ data }) {
        if (data) {
            console.log('FULL account details', data);
            const { Name, Owner, AnnualRevenue } = data.fields;
            this.name = Name.displayValue || Name.value;
            this.annualRevenue = AnnualRevenue.displayValue || AnnualRevenue.value;
            this.owner = Owner.displayValue || Owner.value.fields.value;
        }
    }
    */
}