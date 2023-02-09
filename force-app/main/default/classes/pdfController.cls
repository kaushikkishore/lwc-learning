public with sharing class pdfController {
    @AuraEnabled
    public static Attachment generatePdf(Id recordId, string html){
        Pagereference page  = Page.renderAsPdf;
        page.getParameters().put('pdfText', html);

        Contact con = new Contact(Id = recordId);
        Attachment attach = new Attachment();
        attach.Name = 'invoice.pdf';
        attach.ParentId = recordId;
        attach.Body = page.getContentAsPdf();
        attach.IsPrivate = false;   

        insert attach;
        return attach;
    }
}