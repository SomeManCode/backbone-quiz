define(
    [
        'underscore',
        'models/ScoreModel'
    ],
    function (_, ScoreModel) {
        'use strict';
        var ScoreModelSpec = {
            test : function () {
                describe('ScoreModel', function () {

                    beforeEach(function () {
                        //Make sure that QuestionModel is available
                        expect(ScoreModel).toBeDefined();
                    });

                    describe("defaults", function () {

                        var data = {},
                            m = new ScoreModel(data);

                        it('should add default score property', function () {

                            expect(m.get('score')).toBeDefined();
                        });

                        it('should add default score property with value as 0', function () {

                            expect(m.get('score')).toBe(0);
                        });

                        it('should add default total_questions property', function () {

                            expect(m.get('total_questions')).toBeDefined();
                        });

                        it('should add default total_questions property with value as 0', function () {

                            expect(m.get('total_questions')).toBe(0);
                        });

                        it('should add default correct_questions property', function () {

                            expect(m.get('correct_questions')).toBeDefined();
                        });

                        it('should add default correct_questions property with value as 0', function () {

                            expect(m.get('correct_questions')).toBe(0);
                        });

                        it('should add default total_score property', function () {

                            expect(m.get('total_score')).toBeDefined();
                        });

                        it('should add default total_score property with value as 0', function () {

                            expect(m.get('total_score')).toBe(0);
                        });

                        it('should add default questions property', function () {

                            expect(m.get('questions')).toBeDefined();
                        });

                        it('should add default questions property with an empty array', function () {

                            expect(m.get('questions').length).toBe(0);
                        });

                        it('should add default responses property', function () {

                            expect(m.get('responses')).toBeDefined();
                        });

                        it('should add default responses property with an empty array', function () {

                            expect(m.get('responses').length).toBe(0);
                        });

                    });

                    describe("attributes", function () {

                        var data = {
                                "questions" : [],
                                "responses" : []
                            },
                            m = new ScoreModel(data);
                        m.update();

                        it('should expose score attribute', function () {
                            expect(m.get('score')).toEqual(0);
                        });

                        it('should expose total_questions attribute', function () {
                            expect(m.get('total_questions')).toEqual(0);
                        });

                        it('should expose correct_questions attribute', function () {
                            expect(m.get('correct_questions')).toEqual(0);
                        });

                        it('should expose total_score attribute', function () {
                            expect(m.get('total_score')).toEqual(0);
                        });

                        it('should expose questions attribute', function () {
                            expect(m.get('questions').length).toEqual(0);
                        });

                        it('should expose responses attribute', function () {
                            expect(m.get('responses').length).toEqual(0);
                        });
                    });
                });
            }
        };

        return ScoreModelSpec;
    }
);