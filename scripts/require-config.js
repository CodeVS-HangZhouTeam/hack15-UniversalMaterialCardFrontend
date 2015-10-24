require.config({
    baseUrl: 'scripts',
    paths: {
        require: "require",
        jquery: "jquery",
        highcharts: "highcharts/highcharts",
        mustache: "helper/mustache",
        material: "material/material",
        cardloader: "helper/cardloader"
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