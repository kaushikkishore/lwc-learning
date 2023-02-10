import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapControllerLwc.getAccounts';

export default class MapInLwc extends LightningElement {
    mapMarkers = [];
    selectedMarkerValue;
    markerTitle = 'Account Location';

    @wire(getAccounts)
    accountHandler({ data, error }) {
        if (data) {
            console.log(data);
            this.formatMarkups(data);
        }

        if (error) {
            console.error(error);
        }
    }

    formatMarkups(data) {
        this.mapMarkers = data.map(acc => {
            return {
                location: {
                    Street: acc.BillingStreet || '',
                    City: acc.BillingCity || '',
                    State: acc.BillingState || '',
                    Country: acc.BillingCountry || '',
                    PostalCode: acc.BillingPostalCode || ''

                },
                icon: 'utility:salesforce1',
                title: acc.Name,
                value: acc.Name,
                description: acc.Description
            }
        });

        this.selectedMarkerValue = this.mapMarkers.length && this.mapMarkers[0].value;
    }

    callMarkerHandle(event) {
        this.selectedMarkerValue = event.detail.selectedMarkerValue;
    }
}