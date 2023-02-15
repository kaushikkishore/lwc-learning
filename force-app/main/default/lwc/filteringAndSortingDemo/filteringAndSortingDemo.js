import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class FilteringAndSortingDemo extends LightningElement {

    headings = ['Id', 'Name', 'Title', 'Email'];
    contacts = [];
    filteredContacts = [];
    timer;

    search;

    @wire(getContactList)
    handleContactList({ data, error }) {
        if (data) {
            console.log(`Data`, data);
            this.contacts = data;
            this.filteredContacts = data;
        }

        if (error) {
            console.log(`Error`, error);
        }
    }

    handleSearch(event) {
        const { value } = event.target;
        // console.log(`Searchted text ${value}`);
        window.clearTimeout(this.timer);
        if (value && value.trim() !== '') {



            // eslint-disable-next-line @lwc/lwc/no-async-operation
            this.timer = window.setTimeout(() => {
                console.log(`Searched ${value}`);
                this.filteredContacts = this.contacts.filter(c => Object.keys(c).some(val => {
                    return c[val].toLowerCase().includes(value);
                }));
            }, 500);


        } else {
            this.filteredContacts = [...this.contacts];
        }

    }
}