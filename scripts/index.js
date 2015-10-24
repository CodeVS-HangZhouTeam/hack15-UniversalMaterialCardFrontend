require.config({
    paths: {
        require: "require",
        jquery: "jquery",
        highcharts: "highcharts",
        mustache: "helper/mustache",
        material: "material/material"
    },
    shim: {
        highcharts: {
            exports: "Highcharts",
            deps: ["jquery"]
        },
        jquery: {
            exports: "$"
        },
        material: {
        }
    }
});

requirejs(["jquery", "helper/mustache", "highcharts"], function(jquery, mustache, Highcharts) {
    var loadCard = function(destination, template_name, data) {
        jquery.get('templates/' + template_name + '.html', function(template, textStatus, jqXhr) {
            $(destination).append(mustache.render(template, data));
        });
    };

    loadCard(".page-content", "demo-card-with-highcharts", {});
});