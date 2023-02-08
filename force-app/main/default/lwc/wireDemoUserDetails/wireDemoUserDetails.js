import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import USER_NAME from '@salesforce/schema/User.Name';
import USER_Email from '@salesforce/schema/User.Email';

const fields = [USER_NAME, USER_Email];

export default class WireDemoUserDetails extends LightningElement {
    // current user iD - 0056D000006J4yZQAS
    userId = Id;
    userDetails;

    // first is adaptor 
    // 2 - record ID 
    @wire(getRecord, { recordId: '$userId', fields })
    userDetailHandler({ data, error }) {
        // console.log(data);
        // // const { data, error } = res;
        if (data) {
            this.userDetails = data.fields;
        } else if (error) {
            console.error(error);
        }
    }

    @wire(getRecord, { recordId: '$userId', fields })
    userDetailsProperty
}