//Router
define(
    [
        'jquery',
        'backbone',
        'views/ScoreView',
        'views/HomeView',
        'views/QuizView',
        'views/HelpView'
    ],
    function ($, Backbone, ScoreView, HomeView, QuizView, HelpView) {
        'use strict';

        var Router = Backbone.Router.extend({
            quizView : null,
            routes: {
                ""              :   "home",
                "home"          :   "home",
                "quiz/q:qno"    :   "quiz",
                "score"         :   "score",
                "help"          :   "help",
                "*actions"      :   "error"
            },

            home: function () {
                var homeView = new HomeView();
                $("#wrapper").html(homeView.render().el);
                if (this.quizView !== null) {
                    this.quizView.questionsView.resetClock();
                }
                this.quizView = null;
            },

            quiz : function (qno) {
                if (this.quizView === null) {
                    this.quizView = new QuizView();
                    $("#wrapper").html(this.quizView.render().el);
                }
                this.quizView.showQuestion(qno);
            },

            score : function () {
                var scoreView;
                if (this.quizView !== null) {
                    this.quizView.questionsView.resetClock();
                    scoreView = new ScoreView({
                        "responses" : this.quizView.responses,
                        "questionModels" : this.quizView.questionsCollection.models
                    });
                    $('#wrapper').html(scoreView.render().el);
                } else {
                    scoreView = new ScoreView({
                        "responses" : [],
                        "questionModels" : []
                    });
                    $('#wrapper').html(scoreView.render().el);
                }
                this.quizView = null;
            },
            help : function () {
                var helpView;
                if (this.quizView === null) {
                    this.quizView = new QuizView();
                    helpView = new HelpView({
                        "numberOfQuestions" : this.quizView.questionsCollection.length,
                        "duration" : this.quizView.model.get('time')
                    });
                    $("#wrapper").html(helpView.render().el);
                }
                else {
                    helpView = new HelpView({
                        "numberOfQuestions" : this.quizView.questionsCollection.length,
                        "duration" : this.quizView.model.get('time')
                    });
                    $("#wrapper").html(helpView.render().el);
                    this.quizView.questionsView.resetClock();
                }
                this.quizView = null;
            },

            error : function () {
                $('#wrapper').html("Error");
                this.quizView = null;
            }
        });

        return Router;
    }
);