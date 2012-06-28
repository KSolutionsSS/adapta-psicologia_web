var views = views || {};

var url = "about.html";
var templateScriptId = "#aboutTemplate";

views.about = (function() {

	var json;

	$.getJSON('data/about.json', function(data) {
		json = data;
	});

	var info = function(param) {
		return json;
	};

	return {
		info : info,
		url : url,
		templateScriptId : templateScriptId
	};
})();
