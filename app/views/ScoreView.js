/* Score View */
define(
    [
        'jquery',
        'underscore',
		'backbone',
		'State',
		'fixtures/score',
		'text!templates/ScoreViewTemplate.html'
	],
    function ($, _, Backbone, State, ScoreData, ScoreViewTemplate) {

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
                State.router.navigate("quiz/q1", {trigger: true});
            },
            newGameClicked : function () {
                State.router.navigate("home", {trigger: true});
            }
        });

        return ScoreView;
    }
);