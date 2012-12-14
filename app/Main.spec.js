define(
    [
        //Models
        'models/QuestionModel.spec'
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