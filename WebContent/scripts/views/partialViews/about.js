var views = views || {};

var url = "about.html";
var templateScriptId = "#aboutTemplate";

views.about = (function() {

	var info = function(param) {
		return {
			"json" : {
				name : "Un valor del template"
			}
		};
	};

	return {
		info : info,
		url : url,
		templateScriptId : templateScriptId
	};
})();
