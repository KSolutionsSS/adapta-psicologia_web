var views = views || {};

var url = "whatWeDo.html";
var templateScriptId = "#whatWeDoTemplate";

views.whatWeDo = (function() {

	var json;

	$.getJSON('data/whatWeDo.json', function(data) {
		json = data;
	});

	var info = function(param) {
		return json;
	};

	var init = function(param) {
	};

	return {
		info : info,
		url : url,
		templateScriptId : templateScriptId,
		init : init
	};
})();
