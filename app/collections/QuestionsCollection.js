/* QuestionsCollection */
define(
    ['backbone', 'models/QuestionModel'],
    function (Backbone, QuestionModel) {
        var QuestionsCollection = Backbone.Collection.extend({
            model : QuestionModel
        });
        
        return QuestionsCollection;
    }
);