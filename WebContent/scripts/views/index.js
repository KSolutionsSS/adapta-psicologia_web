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

		var render = function(customView) {

			$('#main').empty();

			$.get("partialViews/" + customView.url, function(template) {
				$("body").append(template);

				$('#main').append(
						$.mustache($(customView.templateScriptId).html(),
								customView.info()));

				customView.init();
			});

		};

		switch (sectionId) {
		case 1:
			render(views.whatWeDo);
			break;
		case 2:
			render(views.about);
			break;
		case 3:
			render(views.contact);
			break;
		default:
			render(views.home);
			break;
		}
	};// Fín views.index.showSection

	// Defino el objeto que va a valer index, con sus atributos y funciones.
	return {
		showSection : showSection
	};

})();
