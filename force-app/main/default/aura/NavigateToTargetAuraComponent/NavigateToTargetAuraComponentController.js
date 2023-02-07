({
    onload: function (component) {
        var pageReference = component.get('v.pageReference');
        var id = pageReference.state.c__id;
        var username = pageReference.state.c__username;
        component.set('v.id', id);
        component.set('v.username', username);

    }
})
