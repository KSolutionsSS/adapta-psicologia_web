$(document).ready(function() {
	showSection(0);
});

/**
 * Muestra la sección de la página que corresponde.
 * 
 * @param sectionId
 */
function showSection(sectionId) {

	$('#content').empty();

	var json;
	var url;
	var templateScriptId;
	var htmlSectionId;

	if (sectionId == 0) {
		json = {
			name : "Nahuel"
		};
		url = "home.html";
		templateScriptId = "#homeTemplate";
	} else if (sectionId == 1) {
		json = {
			name : "Un valor del template"
		};
		url = "about.html";
		templateScriptId = "#aboutTemplate";
	} else if (sectionId == 2) {
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
	} else if (sectionId == 5) {
//		json = {
//			name : "Nahuel",
//			email : "prueba@gmail.com",
//			phone : "1234567789"
//		};
		
		$.getJSON('data/contact.json', function(data) {
			json = data;
		});
		
		url = "contact.html";
		templateScriptId = "#contactTemplate";
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