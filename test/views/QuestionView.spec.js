define(
    [
        'jquery',
        'underscore',
        'views/QuestionView',
        'models/QuestionModel'
    ],
    function ($, _, QuestionView, QuestionModel) {
        'use strict';
        var QuestionViewSpec = {
            test : function () {
                describe('QuestionView', function () {

                    beforeEach(function () {
                        expect(QuestionView).toBeDefined();
                    });

                    describe("create", function () {

                        beforeEach(function () {

                            var questionModel = new QuestionModel({
                                question: "Two ducks and two dogs have a total of fourteen legs.",
                                answers: [
                                    "true",
                                    "false"
                                ],
                                weight: 2,
                                type: "radio"
                            });
                            this.view = new QuestionView({model : questionModel});
                            this.view.render();
                        });

                        it("should create a div element", function () {

                            expect(this.view.el.nodeName).toEqual('DIV');
                        });

                        it("should create a div element with 'question_view' id", function () {

                            expect($(this.view.el)).toHaveId('question_view');
                        });

                    });

                });
            }
        };

        return QuestionViewSpec;
    }
);