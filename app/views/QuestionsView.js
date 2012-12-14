/*Questions View*/

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'views/QuestionView',
        'text!templates/QuestionsViewTemplate.html'
    ],
    function ($, _, Backbone, QuestionView, QuestionsViewTemplate) {

        'use strict';

        var QuestionsView = Backbone.View.extend({
			id : "questions_view",
            className : "section",
            totalQuestions : null,
            template : _.template(QuestionsViewTemplate),

            initialize: function () {
                _.bindAll(this, 'render');

                this.collection.on('reset', this.render);
            },

            render: function () {
                this.totalQuestions = this.collection.length;
                $(this.el).html(this.template({
                    "current" : 0,
                    "total" : this.totalQuestions,
                    "next" : 0,
                    "prev" : 0,
                    "weight" : 0
                }));
                return this;
            },

            showQuestion : function (qno) {
                qno = parseInt(qno, 10);
                if (qno <= this.totalQuestions) {
                        //Get question model
                    var qModel = this.collection.at(qno - 1),
                        //Create new QuestionView with the question model
                        questionView = new QuestionView({model : qModel});

                    $(this.el).html(this.template({
                        "current" : qno,
                        "total" : this.totalQuestions,
                        "weight" : qModel.get('weight')
                    }));
                    $(this.el).find('.content').html(questionView.render().el);
                }
            }

        });

        return QuestionsView;
    }
);