var <%= upperCaseModuleName %>Router = Backbone.Router.extend({
		routes: {
		}
	});
<%= module_name %>.<%= upperCaseModuleName %>Router = new <%= upperCaseModuleName %>Router();
Backbone.history.start();