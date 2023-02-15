public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        try {
            return [SELECT Id, Name, Title, Email FROM Contact];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}