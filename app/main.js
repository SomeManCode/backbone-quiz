requirejs.config(requirejsConfig);

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