define(
    [
        'underscore',
        'models/LanguageModel'
    ],
    function (_, LanguageModel) {
        'use strict';
        var LanguageModelSpec = {
            test : function () {
                describe('LanguageModel', function () {

                    beforeEach(function () {
                        //Make sure that QuestionModel is available
                        expect(LanguageModel).toBeDefined();
                    });

                    describe("defaults", function () {

                        var data = {},
                            m = new LanguageModel(data);

                        it('should add default name property', function () {

                            expect(m.get('name')).toBeDefined();
                        });

                        it('should add default name property with value as "en-us"', function () {

                            expect(m.get('name')).toBe("en-us");
                        });

                    });

                    describe("attributes", function () {

                        var data = {
                                name: "fr-fr"
                            },
                            m = new LanguageModel(data);

                        it('should expose name attribute', function () {
                            expect(m.get('name')).toBe("fr-fr");
                        });

                    });
                });
            }
        };

        return LanguageModelSpec;
    }
);