import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubComponentA extends LightningElement {
    msg = 'Testing the';
    inputHandlerChange(event) {
        this.msg = event.taget.value;
        console.log(`Message set ${this.message}`);
    }

    publishHandler() {
        console.log(`Publishing a message ${this.msg}`);
        pubsub.publish('componentA', this.msg);
        console.log(`Finished publish`);
    }

    test(e) {
        this.msg = e.taget.value;
        console.log('Here invoked onkeyUp' + e.target.value);
    }
}