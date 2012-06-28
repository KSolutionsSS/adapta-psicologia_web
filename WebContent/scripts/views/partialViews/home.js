var views = views || {};

var url = "home.html";
var templateScriptId = "#homeTemplate";

views.home = (function() {

	var info = function(param) {
		return {
			"json" : {
				name : "Nahuel"
			}
		};
	};

	return {
		info : info,
		url : url,
		templateScriptId : templateScriptId
	};
})();
