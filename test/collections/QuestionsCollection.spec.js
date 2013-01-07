define(
    [
        'underscore',
        'collections/QuestionsCollection'
    ],
    function (_, QuestionsCollection) {
        'use strict';
        var QuestionsCollectionSpec = {
            test : function () {
                describe('QuestionsCollection', function () {

                    beforeEach(function () {
                        //Make sure that QuestionsCollection is available
                        expect(QuestionsCollection).toBeDefined();
                        //Create Questions Collection
                        this.c = new QuestionsCollection();
                    });

                    describe("create", function () {

                        it('can be instantiated', function () {
                            expect(this.c.length).toEqual(0);
                        });
                    });

                    describe("add", function () {

                        it('should accept new model instance as an object', function () {

                            this.c.add({
                                id: "1",
                                question: "Two ducks and two dogs have a total of fourteen legs.",
                                answers: [
                                    "true",
                                    "false"
                                ],
                                "correct_answer": "false",
                                weight: 2,
                                type: "radio"
                            });

                            expect(this.c.length).toEqual(1);
                        });

                        it('should accept new model instances as an array', function () {

                            this.c.add([
                                {
                                    id: "3",
                                    question: "Which one of the five is least like the other four?",
                                    answers: [
                                        "dog", "mouse", "lion", "snake", "elephant"
                                    ],
                                    "correct_answer": "snake",
                                    weight: 4,
                                    type: "radio"
                                },
                                {
                                    id: "4",
                                    question: "Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
                                    answers: [
                                        20, 24, 25, 26, 28
                                    ],
                                    weight: 4,
                                    "correct_answer": 24,
                                    type: "radio"
                                }
                            ]);

                            expect(this.c.length).toBe(2);
                        });
                    });

                    describe('reset', function () {

                        it("should reset itself with an empy array", function () {
                            expect(this.c.length).toBe(0);
                            this.c.reset([]);
                            expect(this.c.length).toBe(0);
                        });

                        it("should reset itself with an array of items", function () {
                            expect(this.c.length).toBe(0);
                            this.c.reset([
                                {
                                    id: "3",
                                    question: "Which one of the five is least like the other four?",
                                    answers: [
                                        "dog", "mouse", "lion", "snake", "elephant"
                                    ],
                                    "correct_answer": "snake",
                                    weight: 4,
                                    type: "radio"
                                },
                                {
                                    id: "4",
                                    question: "Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
                                    answers: [
                                        20, 24, 25, 26, 28
                                    ],
                                    weight: 4,
                                    "correct_answer": 24,
                                    type: "radio"
                                }
                            ]);
                            expect(this.c.length).toBe(2);
                        });
                    });

                    describe("find", function () {

                        it("should find a model by id", function () {
                            this.c.reset([
                                {
                                    id: "3",
                                    question: "Which one of the five is least like the other four?",
                                    answers: [
                                        "dog", "mouse", "lion", "snake", "elephant"
                                    ],
                                    "correct_answer": "snake",
                                    weight: 4,
                                    type: "radio"
                                },
                                {
                                    id: "4",
                                    question: "Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
                                    answers: [
                                        20, 24, 25, 26, 28
                                    ],
                                    weight: 4,
                                    "correct_answer": 24,
                                    type: "radio"
                                }
                            ]);

                            expect(this.c.length).toBe(2);
                            expect(this.c.get("4").get('weight')).toEqual(4);
                            expect(this.c.get("3").get('correct_answer')).toBe("snake");
                        });

                    });

                });
            }
        };

        return QuestionsCollectionSpec;
    }
);