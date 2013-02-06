define(
    [
        'underscore',
        'models/QuizModel'
    ],
    function (_, QuizModel) {
        'use strict';
        var QuizModelSpec = {
            test : function () {
                describe('QuizModel', function () {

                    beforeEach(function () {
                        //Make sure that QuestionModel is available
                        expect(QuizModel).toBeDefined();
                    });

                    describe("defaults", function () {

                        var data = {},
                            m = new QuizModel(data);

                        it('should add default time property', function () {

                            expect(m.get('time')).toBeDefined();
                        });

                        it('should add default time property with value as 60', function () {

                            expect(m.get('time')).toEqual(60);
                        });

                        it('should add default randomized property', function () {

                            expect(m.get('randomized')).toBeDefined();
                        });

                        it('should add default randomized property with value as true', function () {

                            expect(m.get('randomized')).toBeTruthy();
                        });

                    });

                    describe("attributes", function () {

                        var data = {
                                time : 120,
                                randomized : false
                            },
                            m = new QuizModel(data);

                        it('should expose time attribute', function () {
                            expect(m.get('time')).toEqual(120);
                        });

                        it('should expose randomized attribute', function () {
                            expect(m.get('randomized')).toBeFalsy();
                        });

                    });
                });
            }
        };

        return QuizModelSpec;
    }
);