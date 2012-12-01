//Router
define(
    ['jquery','backbone','views/HomeView', 'views/QuizView'],
    function ($, Backbone, HomeView, QuizView) {

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
						var homeView = new HomeView();
						$("#wrapper").html(homeView.render().el);
                    },

                    quiz: function (qno) {
						var quizView = new QuizView();
						$("#wrapper").html(quizView.render().el);
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