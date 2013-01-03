define(
    [
        //Models
        '/test/models/QuestionModel.spec.js'
    ],
    function (
        QuestionModelSpec
    ) {
        'use strict';
        describe('Quiz', function () {
            describe('Models', function () {
                //QuestionModel
                QuestionModelSpec.test();
            });
        });
    }
);