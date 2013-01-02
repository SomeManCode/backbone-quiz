/*Quiz View*/

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'fixtures/quiz',
        'collections/QuestionsCollection',
        'views/QuestionsView',
        'models/QuizModel'
    ],
    function ($, _, Backbone, QuizData, QuestionsCollection, QuestionsView, QuizModel) {

        'use strict';

        var QuizView = Backbone.View.extend({

            id: "quiz_view",
            className: "section",
            model : null,
            questionsCollection : null,
            questionsView : null,
            responses : [],

            initialize: function () {
                this.responses = [];
                this.model = new QuizModel({
                    time : QuizData.time,
                    randomized : QuizData.randomized
                });
                //Create a new QuestionsCollection
                this.questionsCollection = new QuestionsCollection();
                //Create a new questionsView
                this.questionsView = new QuestionsView({collection : this.questionsCollection, model : this.model});
                //Set data in questionsCollection
                if (this.model.get('randomized')) {
                    this.questionsCollection.reset(_.shuffle(QuizData.questions));
                } else {
                    this.questionsCollection.reset(QuizData.questions);
                }
            },

            render: function () {
                $(this.el).html(this.questionsView.render().el);
                return this;
            },

            events : {
                'click li.answer' : "answerSelected",
                'keyup input.answer' : "answerSelected",
                'click a.footerQuitAnc' : "quit",
                'click a.footerNextAnc' : "next"
            },

            answerSelected : function (event) {
                var responseEle = $(event.target);
                if (responseEle.get(0).tagName === "LI") {
                    if (!responseEle.hasClass('active')) {
                        responseEle.addClass('active');
                        responseEle.siblings().removeClass('active');
                        this.activateNext();
                    }
                } else if (responseEle.get(0).tagName === "INPUT") {
                    if (responseEle.val().length > 0) {
                        this.activateNext();
                    } else {
                        this.deactivateNext();
                    }
                }
            },
            showQuestion : function (qno) {
                if (this.responses[qno - 1] === undefined) {
                    if (qno > 1 && qno  <= this.questionsCollection.length + 1) {
                        var response;
                        if (this.questionsCollection.at(qno - 2).get('type') === "radio") {
                            response = this.questionsView.$el.find('#question_view li.active').text().trim();
                        } else {
                            response = this.questionsView.$el.find('#question_view input').val();
                        }
                        if (response === "") {
                            response = undefined;
                        }
                        this.responses.push({"id": this.questionsCollection.at(qno - 2).get('id'), "response" : response});
                    }
                    if (qno > 0 && qno <= this.questionsCollection.length) {
                        this.currentIndex = qno;
                        this.questionsView.showQuestion(qno);
                        $(this.el).html(this.questionsView.el);
                    } else {
                        this.goTo('score');
                    }
                }
            },
            activateNext: function () {
                this.questionsView.$el.find('.footerNextAnc:first').removeClass('disabled');
            },
            deactivateNext: function () {
                this.questionsView.$el.find('.footerNextAnc:first').addClass('disabled');
            },
            next: function (event) {
                if (this.questionsView.$el.find('.footerNextAnc:first').hasClass('disabled')) {
                    event.preventDefault();
                }
            },
            quit: function (event) {
                this.questionsView.resetClock();
                this.goTo('home');
            }
        });

        return QuizView;
    }
);