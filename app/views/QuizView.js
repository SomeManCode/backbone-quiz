/*Quiz View*/

define(
	[
        'underscore',
        'backbone',
        'State',
        'fixtures/quiz',
        'collections/QuestionsCollection',
        'views/QuestionsView'
    ],
	function(_, Backbone, State, QuizData, QuestionsCollection, QuestionsView){
		var QuizView = Backbone.View.extend({
		    
			id:"quiz_view",
			className:"section",
			
            questionsCollection : null,
            questionsView : null,
			
			initialize:function(){
			    
			},
			
			render:function(){
			    
                //Create a new QuestionsCollection
                this.questionsCollection = new QuestionsCollection();
                //Create a new questionsView
                this.questionsView = new QuestionsView({collection : this.questionsCollection});
                //Set data in questionsCollection
                this.questionsCollection.reset(QuizData.questions);
                
                $(this.el).html(this.questionsView.render().el);
				return this;
			},
			
			showQuestion : function(qno) {
			    
			    this.questionsView.showQuestion(qno);
			    $(this.el).html(this.questionsView.el);
			}
		});
		
		return QuizView;
	}
);