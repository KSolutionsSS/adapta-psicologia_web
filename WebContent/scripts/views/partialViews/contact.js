var views = views || {};

var url = "contact.html";
var templateScriptId = "#contactTemplate";

views.contact = (function() {
	var json;

	$.getJSON('data/contact.json', function(data) {
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
