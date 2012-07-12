var views = views || {};

var url = "home.html";
var templateScriptId = "#homeTemplate";

views.home = (function() {

	var info = function(param) {
		// Returns an object.
		return {

		};
	};

	var init = function(param) {
		$('.slideshow').cycle({
			fx : 'fade'
		});
	};

	return {
		info : info,
		url : url,
		templateScriptId : templateScriptId,
		init : init
	};
})();
