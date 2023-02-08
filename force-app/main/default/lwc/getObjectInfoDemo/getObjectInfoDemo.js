import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LEAD_OBJECT from '@salesforce/schema/Lead';

import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';


export default class GetObjectInfoDemo extends LightningElement {

    accountDetails;
    objectsInfo;
    objectApiNames = [CONTACT_OBJECT, LEAD_OBJECT];
    accountRecordTypeId;
    accountPicklist;
    selectedAccountIndustry = '';
    accountPicklistOptions;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    getAccountInformation({ data, error }) {
        if (data) {
            this.accountDetails = data;
            this.accountRecordTypeId = data.defaultRecordTypeId;
            console.log('Got data from the account object ', data);
        } else if (error) {
            console.error(error);
        }
    }

    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    getMultiAccountInformation({ data, error }) {
        if (data) {
            console.log('MULTI OBJECT RESPONSE ', data);
            this.objectsInfo = data;

        } else if (error) {
            console.log(error);
        }
    }

    @wire(getPicklistValues, { recordTypeId: '$accountRecordTypeId', fieldApiName: ACCOUNT_INDUSTRY })
    getIndustryPickListValues({ data, error }) {
        if (data) {
            console.log('Account INDUSTRY picklist values ', data);
            // this is just to keep the complete object purpose. 
            this.accountPicklist = data;
            this.accountPicklistOptions = [... this.generateIndustryPickList(data)];
        } else if (error) {
            console.error(error);
        }
    }

    generateIndustryPickList(data) {
        return data.values.map(item => ({ label: item.label, value: item.value }));
    }

    handleChange(event) {
        this.selectedAccountIndustry = event.detail.value;
        console.log(`User selected the industry ${this.selectedAccountIndustry}`);
    }

    // To get all the picklist of the object 
    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$accountRecordTypeId' })
    getAccountAllPicklists({ data }) {
        if (data) {
            console.log(`All account picklist values `, data);
            console.log(`Account picklist data ${data.picklistFieldValues}`);
            for (const pickListfor in data.picklistFieldValues) {
                if (Object.prototype.hasOwnProperty.call(data.picklistFieldValues, pickListfor)) {
                    // const values = data.picklistFieldValues[pickListfor];
                    // console.log(`Values for ${pickListfor}`, values);
                }
            }
        }

    }
}