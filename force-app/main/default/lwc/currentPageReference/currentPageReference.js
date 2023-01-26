import { LightningElement, wire } from 'lwc';
import { CurrentPageReference as cpReference } from 'lightning/navigation';
export default class CurrentPageReference extends LightningElement {
    @wire(cpReference)
    pageRef;

    get getPageRefJSON() {
        return this.pageRef ? JSON.stringify(this.pageRef, null, 4) : ''
    }
}