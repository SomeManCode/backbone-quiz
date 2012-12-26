/*Quiz View*/

define(
    [
        'jquery',
        'backbone',
        'fixtures/quiz',
        'collections/QuestionsCollection',
        'views/QuestionsView'
    ],
    function ($, Backbone, QuizData, QuestionsCollection, QuestionsView) {

        'use strict';

        var QuizView = Backbone.View.extend({

            id: "quiz_view",
            className: "section",


            questionsCollection : null,
            questionsView : null,

            initialize: function () {

            },

            render: function () {

                //Create a new QuestionsCollection
                this.questionsCollection = new QuestionsCollection();
                //Create a new questionsView
                this.questionsView = new QuestionsView({collection : this.questionsCollection});
                //Set data in questionsCollection
                this.questionsCollection.reset(QuizData.questions);

                $(this.el).html(this.questionsView.render().el);
                return this;
            },

            events : {
                'click li.answer' : "answerSelected",
                'keyup input.answer' : "answerSelected"
            },

            answerSelected : function () {
                var responseEle = $(event.target);
                if (responseEle.get(0).tagName === "LI") {
                    if (!responseEle.hasClass('active')) {
                        responseEle.addClass('active');
                        responseEle.siblings().removeClass('active');
                        this.response = responseEle.text();
                        //this.activateNext();
                    }
                }// else if (responseEle.get(0).tagName === "INPUT") {
                    //if (responseEle.val().length > 0) {
                        //this.activateNext();
                    //} else {
                        //this.deactivateNext();
                    //}
                //}
            },

            showQuestion : function (qno) {
                this.currentIndex = qno;
                this.questionsView.showQuestion(qno);
                $(this.el).html(this.questionsView.el);
            },
            activateNext: function () {

            },
            deactivateNext: function () {

            },
            next: function () {

            }
        });

        return QuizView;
    }
);