import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_TITLE from '@salesforce/schema/Contact.Title';
import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';
import CONTACT_ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';

export default class RecordEditForm extends LightningElement {
    objectName = CONTACT_OBJECT;
    fields = { CONTACT_TITLE, CONTACT_NAME, CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ACCOUNT_ID }

    handleReset() {
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if (inputFields && inputFields.length > 0) {
            Array.from(inputFields).forEach(field => {
                field.reset();

            })
        }
    }
}