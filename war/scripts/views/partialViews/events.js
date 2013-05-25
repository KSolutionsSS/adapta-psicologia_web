var views = views || {};

views.events = function() {

	var info = function(callback) {
		$.getJSON("data/events-" + site.language + ".json", function(json) {
			callback(json);
		});
	};

	return {
		info : info,
		url : "events.html",
		templateScriptId : "#eventsTemplate",
		init : function(param) {
		}
	};
};
