/*Quiz View*/

define(
	[
        'underscore',
        'backbone',
        'State',
        'text!templates/QuizViewTemplate.html'
    ],
	function(_, Backbone, State, QuizViewTemplate){
		var QuizView = Backbone.View.extend({
			id:"quiz_view",
			className:"section",
            template : QuizViewTemplate,
			
			initialize:function(){
				
			},
			
			render:function(){
				$(this.el).html(_.template(QuizViewTemplate));
				return this;
			},
            
            events : {
            
                'click .next' : "nextButtonClicked"
            },
            
            nextButtonClicked : function () {
                
                State.router.navigate("score", {trigger : true});
            }
		})
		
		return QuizView;
	}
);