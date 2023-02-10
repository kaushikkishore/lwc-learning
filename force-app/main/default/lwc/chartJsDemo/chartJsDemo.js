import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';

export default class ChartJsDemo extends LightningElement {
    opportunities;

    @wire(getOpportunities)
    opportunityHandler({ data, error }) {
        if (data) {
            console.log(data);

            // const result = data.reduce((json, val) => ({ ...json, [val.StageName]: (json[val.StageName] | 0) + 1 }), {})

            const reduceResult = data.reduce((acc, val) => {
                console.log(`typeof acc`, acc[val.StageName]);
                console.log(`val`, val.StageName);
                return {
                    ...acc,
                    [val.StageName]: (acc[val.StageName] | 0) + 1
                };
            }, {});
            console.log(reduceResult);
            // // this.opportunities = data;
            // console.log(`Logging results`);
            // console.log(result);

        }
        if (error) {
            console.error('Error while getting opportunities', error)
        }
    }
}   