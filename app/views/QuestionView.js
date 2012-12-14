/*Question View*/

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!templates/QuestionViewTemplate.html'
    ],
    function ($, _, Backbone, QuestionViewTemplate) {

        'use strict';

        var QuestionView = Backbone.View.extend({
			id : "question_view",
            template : _.template(QuestionViewTemplate),

            initialize: function () {
				_.bindAll(this, "answerSelected");
            },

            render: function () {
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            },
			
			events : {
                'click .answer' : "answerSelected"
            },
			
			answerSelected:function(){
				//$(this).css("background-color","#8F8F8F");
				console.log("Done");
			}

        });

        return QuestionView;
    }
);