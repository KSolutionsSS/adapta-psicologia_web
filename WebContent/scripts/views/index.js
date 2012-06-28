var views = views || {};

$(document).ready(function() {
	showSection(0);
});

function showSection(sectionId) {

	var render = function(view) {

		$('#content').empty();

		$.get("partialViews/" + view.url, function(template) {
			$("body").append(template);

			$('#content').append(
					$.mustache($(view.templateScriptId).html(), view.info()));
		});
	};

	switch (sectionId) {
	case 1:
		render(views.about);
		break;
	case 5:
		render(views.contact);
		break;
	default:
		render(views.home);
		break;
	}

}

/**
 * Muestra la sección de la página que corresponde.
 * 
 * @param sectionId
 */
function showSection2(sectionId) {

	$('#content').empty();

	var json;
	var url;
	var templateScriptId;
	var htmlSectionId;

	if (sectionId == 2) {
		json = {
			name : "Un valor del template para el tratamiento"
		};
		url = "treatment.html";
		templateScriptId = "#treatmentTemplate";
	} else if (sectionId == 3) {
		json = {
			name : "Un valor del template para las metodologias"
		};
		url = "metodologies.html";
		templateScriptId = "#metodologiesTemplate";
	} else if (sectionId > 40) {

		$.getJSON('data/related.json', function(data) {
			json = data;
		});

		if (sectionId == 41) {
			htmlSectionId = "related-sites";
		} else if (sectionId == 42) {
			htmlSectionId = "related-treatment-1";
		} else if (sectionId == 43) {
			htmlSectionId = "related-treatment-2";
		} else if (sectionId == 44) {
			htmlSectionId = "related-metodology-1";
		} else if (sectionId == 45) {
			htmlSectionId = "related-metodology-1";
		} else if (sectionId == 46) {
			htmlSectionId = "related-articles";
		} else if (sectionId == 47) {
			htmlSectionId = "related-twitter";
		}

		url = "related.html";
		/* Descomentar la línea de abajo para related2.html */
		// url = "related2.html";
		templateScriptId = "#relatedTemplate";
	}

	$.get("partialViews/" + url, function(template) {
		$("body").append(template);

		var items = $.mustache($(templateScriptId).html(), json);

		$('#content').append(items);

		if (sectionId > 40) {
			// .stop(true) es para que si el usuario invoca esto mas de una vez
			// consecutiva, no se encolen y los haga N veces.
			// El -40 es para que no suba al top porque sino el título me lo
			// oculta la barra superior que esta puesta como flotante.
			$('html, body').stop(true).animate({
				scrollTop : $("#" + htmlSectionId).offset().top - 40
			}, 1000);
		}

	});

}