import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    okHandler() {
        // Create a custom event now to dispatch 
        const myEvent = new CustomEvent('close', {
            detail: 'This is message from the custom event'
        });
        this.dispatchEvent(myEvent);
    }
}