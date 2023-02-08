import { LightningElement } from "lwc";

export default class LifecycleChild extends LightningElement {
  constructor() {
    super();
    console.log(`Child constructor called`);
  }
  connectedCallback() {
    // This is method for service callback similar to componentDidMount or useEffect hook
    console.log(`Load your data for the child component`);
    throw new Error("Loading of this data failed here!");
  }

  renderedCallback() {
    // Not recommend to use
    // use when you badly need a component need to update. Make sure you call this only onces.
    // This get invoked multiple times when component renders. Avoid using this.
    // This is redered for the child first and then for the parent.
    console.log("This is render callback coming from the child method");
  }

  name;
  handleChange(event) {
    this.name = event.target.value;
  }

  disconnectedCallback() {
    // as console will not work!!
    // alert('This is called when this comp is removed!')
    console.log("Will not log!!");
    // useful in case of setTimeout and global event listners set on window object.
  }
}