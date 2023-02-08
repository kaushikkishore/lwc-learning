import { LightningElement } from "lwc";

export default class LifecycleParent extends LightningElement {
  constructor() {
    super();
    console.log(`Parent constructor called`);
  }
  connectedCallback() {
    // This is method for service callback similar to componentDidMount or useEffect hook
    console.log(`Load your data for the parent component`);
  }

  renderedCallback() {
    // Not recommend to use
    // use when you badly need a component need to update. Make sure you call this only onces.
    // This get invoked multiple times when component renders. Avoid using this.
    // This is redered for the child first and then for the parent.
    console.log("This is render callback coming from the parent method");
  }

  errorCallback(error, stack) {
    console.log(error.message);
    console.log("Stack", stack);
  }

  showChild = false;
  handleClick() {
    this.showChild = !this.showChild;
  }
}