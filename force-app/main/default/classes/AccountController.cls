public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        try {
            return [SELECT Id, Name, Type, Industry FROM Account LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountByType(String accountType){
        try {
            return [SELECT Id, Name, Type, Industry FROM Account WHERE Type=:accountType LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static void getAccountList() {
        try {
            return [SELECT Id, Name, Type, Industry FROM Account WHERE Type=:accountType LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }



}