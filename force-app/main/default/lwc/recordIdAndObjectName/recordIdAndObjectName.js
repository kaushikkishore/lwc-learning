import { LightningElement, api } from 'lwc';

export default class RecordIdAndObjectName extends LightningElement {
    // CAUTION: = DONOT change the variable names.
    @api recordId; // the variable name is keyword to get the ID
    @api objectApiName; // the variable name is keyword to get the API name. 
}