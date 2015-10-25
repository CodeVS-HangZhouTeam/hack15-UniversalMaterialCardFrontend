requirejs(["cardloader"], function(cardloader) {
    $.getJSON("http://h15.swineson.cn:18880/query/all", function(json) {
        json.d.forEach(function(i){
            cardloader.loadCard(".page-content", "ci-card", i);
        })
    });
});
