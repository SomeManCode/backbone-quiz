//Router
define(
    [
        'jquery',
        'backbone',
        'views/ScoreView',
		'views/HomeView',
		'views/QuizView'
    ],
    function ($, Backbone, ScoreView, HomeView, QuizView) {
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
						var homeView = new HomeView();
						$("#wrapper").html(homeView.render().el);
                    },

                    quiz: function (qno) {
						var quizView = new QuizView();
						$("#wrapper").html(quizView.render().el);
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