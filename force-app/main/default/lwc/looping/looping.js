import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    cars = ['ford', 'bmw', 'audi', 'mahindra', 'hundai', 'vw', 'skoda'];

    ceos = [
        {
            id: 1,
            company: 'Amazon',
            name: 'Jeff'
        },
        {
            id: 2,
            company: 'Alphabet',
            name: 'Sundar'
        },
        {
            id: 3,
            company: 'Meta',
            name: 'Mark'
        },
        {
            id: 4,
            company: 'Microsoft',
            name: 'Satya'
        }
    ]
}