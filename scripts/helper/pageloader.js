define(["jquery", "helper/mustache"], function (jquery, mustache) {

    var pageLoader = {
        load: function() {
            jquery.get('templates/page-skeleton.html', function(template) {
                jquery.get('config/config.json', function(config) {
                    $("body").html(mustache.render(template, config) + $("body").html());
                    document.title = config.title;
                });
            });
        }
    };

    return pageLoader;
});