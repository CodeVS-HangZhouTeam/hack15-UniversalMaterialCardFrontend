define(["jquery", "helper/mustache", "loadcss"], function (jquery, mustache, loadcss) {

    var pageLoader = {
        getRoute: function() {
            return location.pathname.split('/').pop().split('.')[0];
        },
        isAbsoluteUrl: function(url) {
            var pat = /^https?:\/\/|^\/\//i;
            return pat.test(url);
        },
        loadTitle: function(title) {
            document.title = title;
        },
        loadcss: function(name) {
            if (pageLoader.isAbsoluteUrl(name)) {
                loadCSS(name);
            } else {
                loadCSS("css/" + name + ".css");
            }
        },
        appendTemplate: function(destination, template, config) {
            dest = $(destination);
            dest.html(mustache.render(template, config) + dest.html());
        },
        load: function() {
            $("body").hide();
            jquery.get('templates/page-skeleton.html', function(template) {
                jquery.get('config/config.json', function(config) {
                    pageLoader.loadTitle(config.title);
                    pageLoader.appendTemplate("body", template, config);
                    config.global.css.forEach(function(value){
                        pageLoader.loadcss(value);
                    });
                    config.pages.forEach(function(value){
                        if (value.url === pageLoader.getRoute() && typeof value.css !== 'undefined') {
                            pageLoader.loadcss(value.css);
                        }
                    });
                    $(window).resize();
                    $("body").show();
                });
            });
        }
    };

    return pageLoader;
});