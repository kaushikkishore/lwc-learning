import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 20;
    onChangeHandler(event) {
        this.val = event.target.value;
    }

    @api resetSlider(value) {
        this.val = value;
    }
}