var views = views || {};

views.about = function() {

	var info = function(callback) {
		$.getJSON("data/about-" + site.language + ".json", function(json) {
			callback(json);
		});
	};

	return {
		info : info,
		url : "about.html",
		templateScriptId : "#aboutTemplate",
		init : function(param) {
		}
	};
};
