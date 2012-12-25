requirejs.config(requirejsConfig);

requirejs(
    ['dom_ready', 'routers/Router', 'backbone'],
    function (domReady, Router, Backbone) {
        'use strict';
        domReady(function () {
            var router = new Router();
            // Extend the View class to include a navigation method goTo
            Backbone.View.prototype.goTo = function (loc) {
                router.navigate(loc, true);
            };

            Backbone.history.start();
		});
    }
);