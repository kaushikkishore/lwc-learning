import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    variant = 'success'
    handleClick() {
        this.isVisible = !this.isVisible;
        this.variant = this.isVisible ? 'destructive' : 'success'
    }
}