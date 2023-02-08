import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_TITLE from '@salesforce/schema/Contact.Title';

export default class GetListUiDemo extends LightningElement {

    contacts = [];

    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName: 'AllContacts',
        pageSize: 10,
        sortBy: CONTACT_TITLE
    })
    getContactDetails({ data }) {
        if (data) {
            console.log('GET CONtact list page data ', data);
            this.contacts = data.records.records;
        }

    }
}