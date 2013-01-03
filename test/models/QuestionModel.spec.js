define(
    [
        'underscore',
        'models/QuestionModel'
    ],
    function (_, QuestionModel) {
        'use strict';
        var QuestionModelSpec = {
            test : function () {
                describe('QuestionModel', function () {

                    beforeEach(function () {
                        //Make sure that QuestionModel is available
                        expect(QuestionModel).toBeDefined();
                    });

                    describe("defaults", function () {

                        var data = {},
                            m = new QuestionModel(data);

                        it('should add default weight property', function () {

                            expect(m.get('weight')).toBeDefined();
                        });

                        it('should add default weight property value as 1', function () {

                            expect(m.get('weight')).toBe(1);
                        });

                    });

                    describe("attributes", function () {

                        var data = {
                                question: "Two ducks and two dogs have a total of fourteen legs.",
                                answers: [
                                    "true",
                                    "false"
                                ],
                                weight: 2,
                                type: "radio"
                            },
                            m = new QuestionModel(data);

                        it('should expose question attribute', function () {
                            expect(m.get('question')).toBe("Two ducks and two dogs have a total of fourteen legs.");
                        });

                        it('should expose answers attribute', function () {
                            expect(_.difference(m.get('answers'), data.answers)).toEqual([]);
                        });

                        it('should expose weight attribute', function () {
                            expect(m.get('weight')).toBe(2);
                        });

                        it('should expose type attribute', function () {
                            expect(m.get('type')).toBe("radio");
                        });
                    });
                });
            }
        };

        return QuestionModelSpec;
    }
);