define(["jquery", "helper/mustache"], function (jquery, mustache) {

    var pageLoader = {
        load: function() {
            jquery.get('templates/page-skeleton.html', function(template) {
                jquery.get('config/config.json', function(template) {
                    
                });
            });
        }

    };

    return cardloader;
});