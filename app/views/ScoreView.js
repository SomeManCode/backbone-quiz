/* Score View */
define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/LanguageModel',
        'models/ScoreModel',
        'text!templates/ScoreViewTemplate.html',
        'i18n!i18nBundles/nls/scoreView_module'
    ],
    function ($, _, Backbone, LanguageModel, ScoreModel, ScoreViewTemplate, ScoreViewModule) {

        'use strict';

        var ScoreView = Backbone.View.extend({
            id : "score_view",
            className : "section",
            template : _.template(ScoreViewTemplate),
            LanguageModel : null,
            selectedStr : 'selected="selected"',
            localeOptions : null,
            initialize : function (options) {
                this.model = new ScoreModel({
                    "responses" : options.responses,
                    "questions": options.questionModels
                });
                this.LanguageModel = new LanguageModel({"name": window.localStorage.getItem('language') || "en-us"});
                this.localeOptions = {
                    "locale" : ScoreViewModule,
                    "language" : this.LanguageModel.get("name"),
                    "selectedStr": this.selectedStr
                };
            },
            render : function () {
                $(this.el).html(this.template($.extend((this.model.toJSON()), this.localeOptions)));
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