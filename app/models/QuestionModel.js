/* Question Model */
define(
    ['backbone'],
    function (Backbone) {

        'use strict';

        var QuestionModel = Backbone.Model.extend({
            defaults : {
                weight : 1
            }
        });

        return QuestionModel;
    }
);