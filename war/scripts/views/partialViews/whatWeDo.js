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
            sectionToShow = $('#sectionsTab li:eq(2) a');
            break;
        case 14:
            sectionToShow = $('#sectionsTab a:last');
            break;
        default:
            sectionToShow = $('#sectionsTab a:first');
            break;
        }

        sectionToShow.tab("show");

        // Setteo el site.currentPage para cuando el usuario cambia de pestaña
        // por si luego quiere cambiar de idioma.
        $("#sectionsTab li a").bind("click", function() {
            var href = this.href;
            var tabId = href.substring(href.indexOf('#') + 1);

            switch (tabId) {
            case "adults":
                site.currentPage = 11;
                break;
            case "psico":
                site.currentPage = 12;
                break;
            case "training":
                site.currentPage = 13;
                break;
            case "mindfulness":
                site.currentPage = 14;
                break;
            default:
                site.currentPage = 11;
                break;
            }
        });
    };

    return {
        info : info,
        url : "whatWeDo.html",
        templateScriptId : "#whatWeDoTemplate",
        init : init
    };
};
