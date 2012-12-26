/*Quiz View*/

define(
    [
        'jquery',
        'backbone',
        'fixtures/quiz',
        'collections/QuestionsCollection',
        'views/QuestionsView',
        'models/QuizModel'
    ],
    function ($, Backbone, QuizData, QuestionsCollection, QuestionsView, QuizModel) {

        'use strict';

        var QuizView = Backbone.View.extend({

            id: "quiz_view",
            className: "section",
            model : null,
            questionsCollection : null,
            questionsView : null,

            initialize: function () {
                this.model = new QuizModel({
                    time : QuizData.time,
                    randomized : QuizData.randomized
                });
            },

            render: function () {

                //Create a new QuestionsCollection
                this.questionsCollection = new QuestionsCollection();
                //Create a new questionsView
                this.questionsView = new QuestionsView({collection : this.questionsCollection, model : this.model});
                //Set data in questionsCollection
                this.questionsCollection.reset(QuizData.questions);

                $(this.el).html(this.questionsView.render().el);
                return this;
            },

            showQuestion : function (qno) {
                this.questionsView.showQuestion(qno);
                $(this.el).html(this.questionsView.el);
            }
        });

        return QuizView;
    }
);