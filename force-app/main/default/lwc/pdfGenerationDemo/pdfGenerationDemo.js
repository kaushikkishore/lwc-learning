import { LightningElement, api } from 'lwc';
import generatePdf from '@salesforce/apex/pdfController.generatePdf';

export default class PdfGenerationDemo extends LightningElement {
    @api recordId;

    imageURL = 'https://picsum.photos/id/237/200/300';
    invoiceData = {
        invoiceNumber: '1234',
        invoiceCreated: 'Jan 12, 2023',
        invoiceDue: 'Feb 28, 2023',
        companyName: 'Bluestage consulting',
        address1: 'CPH',
        address: 'DNM'
    };
    clientData = {
        client: 'Pliright brothers',
        username: 'John',
        email: 'john.doe@example.com'
    };
    services = [
        { name: 'Consultant fee', amount: 1000.00 },
        { name: 'Website design', amount: 200.00 },
        { name: 'AWS Cost', amount: 567.00 }
    ];

    get totalCost() {
        return this.services.reduce((total, item) => {
            total = total + item.amount;
            return total;
        }, 0)
    }

    downloadPdf() {
        const content = this.template.querySelector('.pdfDocument');
        // eslint-disable-next-line @lwc/lwc/no-inner-html
        console.log(`Whole HTML ${content.outerHTML}`);

        // eslint-disable-next-line @lwc/lwc/no-inner-html
        generatePdf({ recordId: this.recordId, html: content.outerHTML })
            .then(res => console.log('Attachment response ', res))
            .catch(e => console.error('Attachment error', e))
    }
}