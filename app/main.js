requirejs.config({
    baseUrl: 'app/',
    paths: {
        underscore: '../static/libs/underscore/underscore-1.4.2.min',
        backbone: '../static/libs/backbone/backbone-0.9.2.min',
        jquery: '../static/libs/jquery/jquery-1.8.3.min',

        //requirejs
        dom_ready : '../static/libs/require/domReady-2.0.1',
        text : '../static/libs/require/text-2.0.3'
    },
    shim: {
        'underscore' : {
            exports : '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

requirejs(
    ['dom_ready', 'routers/Router', 'State'],
    function (domReady, Router, State) {
        'use strict';
        domReady(function () {
            var router = new Router();
            router.init();
            State.router = router.router;
        });
    }
);