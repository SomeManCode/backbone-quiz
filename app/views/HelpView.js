/*Home View Modified*/

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!templates/HelpViewTemplate.html',
        "i18n!i18nBundles/nls/helpPage_module"
    ],
    function ($, _, Backbone, HelpViewTemplate, HelpPageModule) {

        'use strict';

        var HelpView = Backbone.View.extend({
            id: "help_view",
            className: "section",
            template : HelpViewTemplate,
            initialize: function (options) {
                this.options = options;
            },

            render: function () {
                $(this.el).html(_.template(this.template,
                    {
                        "locale" : HelpPageModule,
                        "options" : this.options
                    }));
                return this;
            },

            events : {
                'click .back' : "backButtonClicked"
            },

            backButtonClicked : function () {
                this.goTo("home");
            }
        });

        return HelpView;
    }
);