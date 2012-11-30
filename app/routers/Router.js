//Router
define(
    ['backbone'],
    function (Backbone) {

        'use strict';

        var Router = function () {

        };

        Router.prototype = {
            router : null,
            init : function () {
                var Router = Backbone.Router.extend({
                    routes: {
                        "home"          :   "home",
                        "quiz"          :   "quiz",
                        "quiz/q:qno"    :   "quiz",
                        "result"        :   "result",
                        "*actions"             :   "home"
                    },

                    home: function () {

                    },

                    quiz: function (qno) {

                    },

                    result : function () {

                    }
                });

                this.router = new Router();
                Backbone.history.start();
            }
        };

        return Router;
    }
);