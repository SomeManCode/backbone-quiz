/* Quiz Model*/
define(
	['backbone'],
	function(Backbone){
		var QuizModel = Backbone.Model.extend({
		   defaults : {
				time:60,
				randomized:true
		   }
		   
		});
		return QuizModel;
	}	
);
