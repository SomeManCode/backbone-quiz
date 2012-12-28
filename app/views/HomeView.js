/*Home View Modified*/

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/LanguageModel',
        'text!templates/HomeViewTemplate.html',
        "i18n!i18nBundles/nls/homePage_module"
    ],
    function ($, _, Backbone, LanguageModel, HomeViewTemplate, HomePageModule) {

        'use strict';

        var HomeView = Backbone.View.extend({
            id: "home_view",
            className: "section",
            template : HomeViewTemplate,
            LanguageModel : null,
            initialize: function () {
                this.LanguageModel = new LanguageModel({"name": window.localStorage.getItem('language') || "en-us"});
            },

            render: function () {
                var selectedStr = 'selected="selected"';
                $(this.el).html(_.template(this.template, {"locale" : HomePageModule, "language" : this.LanguageModel.get("name"), "selectedStr": selectedStr}));
                return this;
            },

            events : {
                'click .start_game' : "startGameClicked",
                'keyup .user_name'  : "validateUserName",
                'click .templateDiv' : "templateDivClicked",
                'change .languagesSelect' : 'languageChange',
                'click .help'       : "helpClicked"
            },

            startGameClicked : function () {
                if (!$(this.el).find('.start_game').hasClass('disabled')) {
                    this.goTo("quiz/q1");
                }
            },
            templateDivClicked : function (evt) {
                var targetElmt = $(evt.target);
                $("head").find("link#template_link").attr("href", "static/css/" + targetElmt.attr("id") + ".css");
            },
            languageChange : function (evt) {
                var targetElmt = $(evt.target);
                this.LanguageModel.set("name", targetElmt.val());
                window.localStorage.clear();
                window.localStorage.setItem("language", this.LanguageModel.get("name"));
                window.location.reload();
            },

            validateUserName : function () {
                var name = $(this.el).find('input#user_name').val();
                if (name !== "" && name.length > 3) {
                    this.enableGame();
                } else {
                    this.disableGame();
                }
            },

            enableGame : function () {
                $(this.el).find('.start_game').removeClass('disabled');
            },

            disableGame : function () {
                $(this.el).find('.start_game').addClass('disabled');
            },
            helpClicked: function () {
                this.goTo("help");
            }


        });

        return HomeView;
    }
);