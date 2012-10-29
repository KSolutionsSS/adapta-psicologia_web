var views = views || {};

views.whatWeDo = function() {

	var info = function(callback) {
		$.getJSON("data/whatWeDo-" + site.language + ".json", function(json) {
			callback(json);
		});
	};

	var init = function(sectionId) {

		var sectionToShow;

		switch (sectionId) {
		case 11:
			sectionToShow = $('#sectionsTab a:first');
			break;
		case 12:
			sectionToShow = $('#sectionsTab li:eq(1) a');
			break;
		case 13:
		        sectionToShow = $('#sectionsTab li:eq(3) a');
			break;
		case 14:
                        sectionToShow = $('#sectionsTab a:last');
                        break;
		default:
			sectionToShow = $('#sectionsTab a:first');
			break;
		}

		sectionToShow.tab("show");
	};

	return {
		info : info,
		url : "whatWeDo.html",
		templateScriptId : "#whatWeDoTemplate",
		init : init
	};
};
