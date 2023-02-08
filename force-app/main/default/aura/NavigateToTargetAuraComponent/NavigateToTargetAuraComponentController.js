({
  onload: function (component, event, helper) {
    const pageReference = component.get("v.pageReference");
    const id = pageReference.state.c__id;
    const username = pageReference.state.c__username;
    component.set("v.id", id);
    component.set("v.username", username);
  }
});