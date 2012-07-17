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
		url : url,
		templateScriptId : templateScriptId,
		init : init
	};
})();
