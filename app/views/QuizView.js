/*Quiz View*/

define(
	['backbone'],
	function(Backbone){
		var QuizView = Backbone.View.extend({
			id:"quiz_view",
			
			className:"section",
			
			initialize:function(){
				
			},
			
			render:function(){
				$(this.el).html("Quiz View");
				return this;
			}
		})
		
		return QuizView;
	}
);