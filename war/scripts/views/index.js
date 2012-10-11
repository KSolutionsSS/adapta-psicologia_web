/**
 * La asignación así es para que si ya existe no lo sobreescriba, y entonces use
 * ese. Si no existe, lo crea.
 */
var views = views || {};
var site = site || {};

site.language = "ca";

$(document).ready(function() {
	site.load(0);
});

site.render = function(customView, parentSelector, sectionId) {

	$(parentSelector).empty();

	var loadTemplateData = function() {
		customView.info(function(json) {
			var html = $.mustache($(customView.templateScriptId).html(), json);

			$(parentSelector).append(html);

			customView.init(sectionId);
		});
	};

	if ($(customView.templateScriptId).length > 0) {
		loadTemplateData();
	} else {
		$.get("partialViews/" + customView.url, function(template) {
			$("body").append(template);
			loadTemplateData();
		});
	}

};// Fín site.render

site.load = function(sectionId) {
	site.render(views.header(), "body header");

	sectionId = sectionId || 0;
	views.index.showSection(sectionId);

	site.render(views.footer(), "body footer");
};

views.index = (function() {

	// Acá defino todas las funciones que va a tener el objeto views.index

	/**
	 * Muestra la sección de la página que corresponde.
	 * 
	 * @param sectionId
	 */
	var showSection = function(sectionId) {

		var parentSelector = "#main";

		switch (sectionId) {
		case 0:
			site.render(views.home(), parentSelector);
			break;
		case 2:
			site.render(views.about(), parentSelector);
			break;
		case 3:
			site.render(views.contact(), parentSelector);
			break;
		}

		if (sectionId > 10) {
			site.render(views.whatWeDo(), parentSelector, sectionId);
		}

	};// Fín views.index.showSection

	// Defino el objeto que va a valer index, con sus atributos y funciones.
	return {
		showSection : showSection
	};

})();
