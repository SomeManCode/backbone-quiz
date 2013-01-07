define(
    [
        //Models
        '/test/models/QuestionModel.spec.js',
        '/test/models/QuizModel.spec.js',
        '/test/models/LanguageModel.spec.js',
        '/test/models/ScoreModel.spec.js'
    ],
    function (
        //Models
        QuestionModelSpec,
        QuizModelSpec,
        LanguageModelSpec,
        ScoreModelSpec
    ) {
        'use strict';
        describe('Quiz', function () {
            describe('Models', function () {
                //QuestionModel
                QuestionModelSpec.test();
                QuizModelSpec.test();
                LanguageModelSpec.test();
                ScoreModelSpec.test();
            });
        });
    }
);