//Router
define(
    [
        'jquery',
        'backbone',
        'views/ScoreView'
    ],
    function ($, Backbone, ScoreView) {

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
                        "score"         :   "score",
                        "*actions"             :   "home"
                    },

                    home: function () {

                    },

                    quiz: function (qno) {

                    },

                    score : function () {
                        var scoreView = new ScoreView();
                        $('#wrapper').html(scoreView.render().el);
                    }
                });

                this.router = new Router();
                Backbone.history.start();
            }
        };

        return Router;
    }
);