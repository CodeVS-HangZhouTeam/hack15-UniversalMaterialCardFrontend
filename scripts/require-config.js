require.config({
    baseUrl: 'scripts',
    paths: {
        require: "require",
        jquery: "jquery",
        highcharts: "highcharts",
        mustache: "helper/mustache",
        material: "material/material",
        cardloader: "cardloader"
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
        },
        cardloader: {
            exports: "cardloader",
            deps: ["jquery", "helper/mustache", "highcharts"]
        }
    }
});

//requirejs(["jquery", "helper/mustache", "highcharts"], function(jquery, mustache, Highcharts) {});