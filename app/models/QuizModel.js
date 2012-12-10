/* Quiz Model*/
define(
	['backbone'],
	function (Backbone) {

        'use strict';

		var QuizModel = Backbone.Model.extend({
            defaults : {
				time: 60,
				randomized: true
		    }

		});
		return QuizModel;
	}
);
