import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";
export default class NavigateToHome extends NavigationMixin(LightningElement) {
  navigateToHome() {
    this[NavigationMixin.Navigate]({
      type: "standard__namedPage",
      attributes: {
        pageName: "home"
      }
    });
  }

  // navigateToChatter

  navigateToChatter() {
    this[NavigationMixin.Navigate]({
      type: "standard__namedPage",
      attributes: {
        pageName: "chatter"
      }
    });
  }

  navigateToNewRecord() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact",
        actionName: "new"
      }
    });
  }

  navigateToNewRecordWithDefaultValues() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact",
        actionName: "new"
      },
      state: {
        defaultFieldValues: encodeDefaultFieldValues({
          FirstName: "Zero",
          LastName: "Hero",
          LeadSource: "Udemy"
        })
      }
    });
  }

  // navigateToListView
  navigateToListView() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact",
        actionName: "list"
      },
      state: {
        filterName: "Recent"
      }
    });
  }

  navigateToFiles() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "ContentDocument",
        actionName: "home"
      }
    });
  }

  navigateToRecordPage() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: "0036D00000hqZ7BQAU",
        objectApiName: "Contact",
        actionName: "view"
      }
    });
  }

  navigateToRecordPageEditMode() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: "0036D00000hqZ7BQAU",
        objectApiName: "Contact",
        actionName: "edit"
      }
    });
  }

  navigateToTab() {
    this[NavigationMixin.Navigate]({
      type: "standard__navItemPage",
      attributes: {
        apiName: "Notifications"
      }
    });
  }

  navigateToRelatedRelationship() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordRelationshipPage",
      attributes: {
        objectApiName: "Account",
        recordId: "0016D00000vR8pQQAS",
        relationshipApiName: "Contacts",
        actionName: "view"
      }
    });
  }

  navigateToExternalWebpage() {
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: "https://www.google.com/maps"
      }
    });
  }

  navigateToLwcPage() {
    const definition = {
      componentDef: "c:naviagteToTargetComponent",
      attributes: {
        recordId: "some-random-record-id-from-source",
        firstName: "Kaushik",
        lastName: "Kishore"
      }
    };
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: `/one/one.app#${btoa(JSON.stringify(definition))}`
      }
    });
  }

  navigateToAuraPage() {
    this[NavigationMixin.Navigate]({
      type: "standard__component",
      attributes: {
        componentName: "c__NavigateTotargetAuraComponent"
      },
      state: {
        c__id: "some-random-id",
        c__username: "Kaushik Kishore"
      }
    });
  }

  navigateToVisualForcePage() {
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: `/apex/naviagetToTargetVFPage`
      }
    }).then((finalResourceURL) => {
      console.log(`Generated URL ${finalResourceURL}`);
      window.open(finalResourceURL);
    });
  }
}