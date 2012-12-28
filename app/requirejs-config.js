var requirejsConfig = {
    baseUrl: 'app/',
    paths: {
        underscore: '../static/libs/underscore/underscore-1.4.2.min',
        backbone: '../static/libs/backbone/backbone-0.9.2.min',
        jquery: '../static/libs/jquery/jquery-1.8.3.min',
        raphaeldir: '../static/libs/raphael/',
        raphael: '../static/libs/raphael/raphael.amd',
        dom_ready : '../static/libs/require/domReady-2.0.1',
        text : '../static/libs/require/text-2.0.3',
        i18n : '../static/libs/require/i18n-2.0.1',
        localStorage : '../static/libs/backbone/backbone.localStorage-min'
    },
    shim: {
        'underscore' : {
            exports : '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    locale : localStorage.getItem('language') || 'en-us'
};