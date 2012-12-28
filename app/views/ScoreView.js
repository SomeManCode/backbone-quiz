/* Score View */
define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/ScoreModel',
        'text!templates/ScoreViewTemplate.html'
    ],
    function ($, _, Backbone, ScoreModel, ScoreViewTemplate) {

        'use strict';

        var ScoreView = Backbone.View.extend({
            id : "score_view",
            className : "section",
            template : _.template(ScoreViewTemplate),
            initialize : function (options) {
                this.model = new ScoreModel({
                    "responses" : options.responses,
                    "questions": options.questionModels
                });
            },
            render : function () {
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            },
            events : {
                "click .play_again" : "playAgainClicked",
                "click .new_game" : "newGameClicked"
            },
            playAgainClicked : function () {
                this.goTo("quiz/q1");
            },
            newGameClicked : function () {
                this.goTo("home");
            }
        });

        return ScoreView;
    }
);