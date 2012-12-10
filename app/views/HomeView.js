/*Home View Modified*/

define(
	[
        'jquery',
        'underscore',
        'backbone',
        'State',
        'text!templates/HomeViewTemplate.html'
    ],
	function ($, _, Backbone, State, HomeViewTemplate) {

        'use strict';

		var HomeView = Backbone.View.extend({
			id: "home_view",
			className: "section",
			template : HomeViewTemplate,

			initialize: function () {

			},

			render: function () {
				$(this.el).html(_.template(this.template, {}));
				return this;
			},

            events : {
                'click .start_game' : "startGameClicked"
            },

            startGameClicked : function () {

                State.router.navigate("quiz/q1", {trigger: true});
            }
		});

		return HomeView;
	}
);