import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {

    userDetails;

    @api
    get details() {
        return this.userDetails;
    }

    set details(data) {
        let newAge = data.age;

        this.userDetails = { ...data, age: newAge, address: 'BLR' }
    }
}