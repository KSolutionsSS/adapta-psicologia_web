var views = views || {};

views.home = function() {

	var info = function(callback) {
		$.getJSON("data/home-" + site.language + ".json", function(json) {
			callback(json);
		});
	};

	var init = function(param) {
		$('.slideshow').cycle({
			fx : 'fade'
		});
	};

	return {
		info : info,
		url : "home.html",
		templateScriptId : "#homeTemplate",
		init : init
	};
};
