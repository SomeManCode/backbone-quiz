/* Score View */
define(
    [
        'jquery',
        'underscore',
        'backbone',
        'fixtures/score',
        'text!templates/ScoreViewTemplate.html'
    ],
    function ($, _, Backbone, ScoreData, ScoreViewTemplate) {

        'use strict';

        var ScoreView = Backbone.View.extend({
            id : "score_view",
            className : "section",
            template : _.template(ScoreViewTemplate),
            initialize : function () {

            },
            render : function () {
                $(this.el).html(this.template(ScoreData));
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