define(
    [
        'jquery',
        'underscore',
        'views/QuestionsView',
        'collections/QuestionsCollection',
        'models/QuizModel'
    ],
    function ($, _, QuestionsView, QuestionsCollection, QuizModel) {
        'use strict';
        var QuestionsViewSpec = {
            test : function () {
                describe('QuestionsView', function () {

                    beforeEach(function () {
                        expect(QuestionsView).toBeDefined();
                    });

                    describe("create", function () {

                        beforeEach(function () {

                            this.view = new QuestionsView({collection : new QuestionsCollection(), model : new QuizModel()});
                            this.view.render();
                        });

                        it("should create a div element", function () {

                            expect(this.view.el.nodeName).toEqual('DIV');
                        });

                        it("should create a div element with 'section' class", function () {

                            expect($(this.view.el)).toHaveClass('section');
                        });

                        it("should create a div element with 'questions_view' id", function () {

                            expect($(this.view.el)).toHaveId('questions_view');
                        });

                    });

                });
            }
        };

        return QuestionsViewSpec;
    }
);