import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';
import filterAccountByType from '@salesforce/apex/AccountController.filterAccountByType';

export default class ApexWireDemo extends LightningElement {
    accountsData;
    filteredAccounts;
    accountType = 'Customer - Direct';

    @wire(getAllAccounts)
    getAccountDetails({ data, error }) {
        if (data) {
            console.log(`Data for the get account `, data);
            // You can transform the data. 
            this.accountsData = data.map(d => {
                const newAccount = { ...d };
                if (d.Type === 'Customer - Channel') {
                    newAccount.Type = 'C - Channel';
                }
                return newAccount;
            });
        } else if (error) {
            console.error(error);
        }
    }


    @wire(filterAccountByType, { accountType: '$accountType' })
    filterAccounts({ data, error }) {
        if (data) {
            console.log(`Data for the get account `, data);
            // You can transform the data. 
            this.filteredAccounts = data.map(d => {
                const newAccount = { ...d };
                if (d.Type === 'Customer - Channel') {
                    newAccount.Type = 'C - Channel';
                }
                return newAccount;
            });
        } else if (error) {
            console.error(error);
        }
    }



    @wire(getAllAccounts)
    accounts;

    get getComboboxValues() {
        return [
            { label: 'Customer - Direct', value: 'Customer - Direct' },
            { label: 'Customer - Channel', value: 'Customer - Channel' }
        ]
    }

    onTypeSelect(event) {
        this.accountType = event.target.value;
    }

}