require.config({
    baseUrl: 'scripts',
    paths: {
        require: "require",
        jquery: "jquery",
        highcharts: "highcharts/highcharts",
        mustache: "helper/mustache",
        material: "material/material",
        cardloader: "helper/cardloader",
        pageloader: "helper/pageloader",
        //ace: "ace/ace"
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
        },
        pageloader: {
            exports: "pageloader",
            deps: ["jquery", "helper/mustache"]
        },
        //ace: {
        //    exports: "ace"
        //}
    }
});

requirejs(["pageloader"], function(pageloader) {
    pageloader.load();
});


