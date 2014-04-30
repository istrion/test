var <%= upperCaseModuleName %> = Backbone.Model.extend({
    defaults: function() {
      return {
        title: "empty <%= upperCaseModuleName %>...",
        done: false
      };
    }
});