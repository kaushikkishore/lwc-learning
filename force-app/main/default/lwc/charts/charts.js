import { LightningElement } from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartJs';
import { loadScript } from 'lightning/platformResourceLoader';

export default class Charts extends LightningElement {
    isChartJsLoaded = false;
    chart;

    renderedCallback() {
        if (this.isChartJsLoaded === true) {
            return;
        }

        // Load the chartjs 
        console.log(`Chartjs path ${chartJs}`);
        loadScript(this, chartJs + '/chartJs/Chart.js')
            .then(() => {
                console.log('Chartjs loaded success');
                this.isChartJsLoaded = true;
                this.loadChart();
            })
            .catch(e => {
                console.error('Error in loading chart js', e)
            });
    }

    loadChart() {

        // This is specific to chartjs 
        window.Chart.platform.disableCssInjection = true;
        const canvas = document.createElement('canvas');
        this.template.querySelector('.chart').appendChild(canvas);

        const ctx = canvas.getContext('2d');
        this.chart = new window.Chart(ctx, this.config());
    }

    config() {
        return {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };
    }
}