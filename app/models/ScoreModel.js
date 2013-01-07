/* Score Model */
define(
    [
        'backbone',
        'underscore'
    ],
    function (Backbone, _) {

        'use strict';

        var ScoreModel = Backbone.Model.extend({
            defaults : {
                "score" : 0,
                "total_questions" : 0,
                "correct_questions" : 0,
                "total_score" : 0,
                "questions" : [],
                "responses" : []
            },
            update: function () {
                var self = this,
                    questions = this.get('questions'),
                    responses = this.get('responses'),
                    question_weight,
                    correct_answer_string;
                self.set('total_questions', questions.length);
                _.each(responses, function (value, index) {
                    question_weight = questions[index].get('weight');
                    if (value.response !== undefined) {
                        correct_answer_string = questions[index].get('correct_answer').toString().toLowerCase();
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