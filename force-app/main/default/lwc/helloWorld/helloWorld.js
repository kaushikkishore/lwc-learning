import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = 'Zero to hero'
    title = 'Aura'

    // Two way binding through function 
    changeHandler(event) {
        this.title = event.target.value;
    }

    // You can use track for the object to do the tracking. 
    // Better way to do is clone the object. 

    address = {
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India',
        pincode: '560067'
    }

    updateCity(event) {
        this.address = { ...this.address, city: event.target.value };
    }

    /** Getter Demo  */
    users = ['John', 'Doe', 'Skeet'];
    num1 = 10;
    num2 = 20;
    get firstUser() {
        return this.users[0].toUpperCase();

    }

    get multiply() {
        return this.num1 * this.num2;
    }

}