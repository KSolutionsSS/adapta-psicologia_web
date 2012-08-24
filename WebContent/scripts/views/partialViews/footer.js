var views = views || {};

views.footer = function() {
	var info = function(callback) {
		$.getJSON("data/footer-" + site.language + ".json", function(json) {
			callback(json);
		});
	};

	return {
		info : info,
		url : "footer.html",
		templateScriptId : "#footerTemplate",
		init : function(param) {
		}
	};
};
