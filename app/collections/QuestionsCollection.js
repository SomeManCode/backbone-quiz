/* QuestionsCollection */
define(
    [
        'backbone',
        'models/QuestionModel'
    ],
    function (Backbone, QuestionModel) {

        'use strict';

        var QuestionsCollection = Backbone.Collection.extend({
            model : QuestionModel
        });

        return QuestionsCollection;
    }
);