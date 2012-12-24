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
                'click .start_game' : "startGameClicked",
                'keyup .user_name'  : "validateUserName"
            },

            startGameClicked : function () {
                if (!$(this.el).find('.start_game').hasClass('disabled'))
                  State.router.navigate("quiz/q1", {trigger: true});
            },

            validateUserName : function() {
                if ($(this.el).find('input#user_name').val() !== "") {
                    this.enableGame();
                }
                else {
                    this.disableGame();
                }
            },

            enableGame: function() {
                $(this.el).find('.start_game').removeClass('disabled');
            },

            disableGame: function() {
                $(this.el).find('.start_game').addClass('disabled');  
            }


        });

        return HomeView;
    }
);