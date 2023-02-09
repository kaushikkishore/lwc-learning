public with sharing class pdfControlController {
    public String pdfText{ get; set; }
    public pdfControlController() {
        pdfText = String.escapeSingleQuotes(
            ApexPages.currentPage().getParameters().get('pdfText')
        );
    }
}