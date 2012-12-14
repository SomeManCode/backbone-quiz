requirejs.config(requirejsConfig);

requirejs(
    [
        'dom_ready',
        'Main.spec'
    ],
    function (domReady, Debug) {
        'use strict';
        var jasmineEnv = jasmine.getEnv(),
            htmlReporter = new jasmine.HtmlReporter(),
            currentWindowOnload = window.onload;
        jasmineEnv.updateInterval = 1000;
        jasmineEnv.addReporter(htmlReporter);
        jasmineEnv.specFilter = function (spec) {
            return htmlReporter.specFilter(spec);
        };
        domReady(function () {
            if (currentWindowOnload) {
                currentWindowOnload();
            }
            jasmineEnv.execute();
        });
    }
);