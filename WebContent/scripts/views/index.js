/**
 * La asignación así es para que si ya existe no lo sobreescriba, y entonces use
 * ese. Si no existe, lo crea.
 */
var views = views || {};

$(document).ready(function() {
	views.index.showSection(0);
});

views.index = (function() {

	// Acá defino todas las funciones que va a tener el objeto views.index

	/**
	 * Muestra la sección de la página que corresponde.
	 * 
	 * @param sectionId
	 */
	var showSection = function(sectionId) {

		var render = function(customView, sectionId) {

			$('#main').empty();

			$.get("partialViews/" + customView.url, function(template) {
				$("body").append(template);

				$('#main').append(
						$.mustache($(customView.templateScriptId).html(),
								customView.info()));

				customView.init(sectionId);
			});

		};

		switch (sectionId) {
		case 0:
			render(views.home);
			break;
		case 2:
			render(views.about);
			break;
		case 3:
			render(views.contact);
			break;
		}
		
		if(sectionId>10){
			render(views.whatWeDo, sectionId);
		}
		
	};// Fín views.index.showSection

	// Defino el objeto que va a valer index, con sus atributos y funciones.
	return {
		showSection : showSection
	};

})();
