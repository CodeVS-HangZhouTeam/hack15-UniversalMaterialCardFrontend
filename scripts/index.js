requirejs(["material/material"], function(material) {});
requirejs(["jquery", "helper/mustache"], function(jquery, mustache) {
    var loadCard = function(destination, template_name, data) {
        jquery.get('templates/' + template_name + '.html', function(template, textStatus, jqXhr) {
            $(destination).append(mustache.render(template, data));
        });
    };

    loadCard(".page-content", "card", {});
});