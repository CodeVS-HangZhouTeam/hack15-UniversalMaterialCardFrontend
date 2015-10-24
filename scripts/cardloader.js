define(["jquery", "helper/mustache", "highcharts"], function (jquery, mustache, Highcharts) {

    var cardloader = {
        loadCard: function(destination, template_name, data) {
            jquery.get('templates/' + template_name + '.html', function(template, textStatus, jqXhr) {
                $(destination).append(mustache.render(template, data));
            });
        },

    }

    return cardloader;
});