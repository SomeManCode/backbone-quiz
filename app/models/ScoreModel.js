/* Score Model */
define(
    ['backbone'],
    function (Backbone) {

        'use strict';

        var ScoreModel = Backbone.Model.extend({
            defaults : {
            	"score" : 0,
            	"total_questions" : 0,
            	"correct_questions" : 0,
            	"total_score" : 0
            },

            initialize: function(options) {
            	var self = this;
            	var questions = options.questions;
            	var responses = options.responses;
            	this.update(questions, responses);
            },
            update: function(questions, responses) {
            	var self = this;
        		self.set('total_questions', questions.length);
        		_.each(responses, function(value, index) {
        			var question_weight = questions[index].get('weight');
        		 	if (value.response !== undefined) {
        		 		var correct_answer_string = questions[index].get('correct_answer').toString().toLowerCase();
	        		 	if (value.response === correct_answer_string) {
	        		 		self.set('score', self.get('score') + question_weight);
	        		 		self.set('correct_questions', self.get('correct_questions') + 1);
	        		 	}
	       			}
        			self.set('total_score', self.get('total_score') + question_weight);
                });
            }

        });

        return ScoreModel;
    }
);