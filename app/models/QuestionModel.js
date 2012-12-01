/* Question Model */
define(
    ['backbone'],
    function(Backbone) {
        var QuestionModel = Backbone.Model.extend({
            defaults : {
                weight : 1
            }
        });
        
        return QuestionModel;
    }
);