var views = views || {};

views.contact = function() {
	var info = function(callback) {
		$.getJSON("data/contact-" + site.language + ".json", function(json) {
			callback(json);
		});
	};

	return {
		info : info,
		url : "contact.html",
		templateScriptId : "#contactTemplate",
		init : function(param) {
		}
	};
};
