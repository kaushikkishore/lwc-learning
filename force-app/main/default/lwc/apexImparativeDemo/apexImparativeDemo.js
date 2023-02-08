import { LightningElement } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';

export default class ApexImparativeDemo extends LightningElement {
    // On click of the button we are going to fetch the data.
    accounts;
    accountsAwait;

    fetchAccounts() {
        console.log(`fetch accounts invoked.`);
        getAllAccounts()
            .then(result => {
                console.log(`Account from imparative one is `, result);
                this.accounts = result
            })
            .catch(error => console.error(error));
    }

    async fetchWithAsyncAwait() {
        this.accountsAwait = await getAllAccounts();
        console.log(`Await data`, this.accountsAwait);
    }
}