var views = views || {};
var site = site || {};

views.header = function() {
	
	var info = function(callback) {
		$.getJSON("data/header-" + site.language + ".json", function(json) {
			callback(json);
		});
	};

	var init = function(param) {
		$("#changeLanguage").bind("click", function() {
			switch (site.language) {
			case "es":
				site.language = "ca";
				break;
			default:
				site.language = "es";
				break;
			}

			site.load(site.currentPage);
		});
	};

	return {
		info : info,
		url : "header.html",
		templateScriptId : "#headerTemplate",
		init : init
	};
};
