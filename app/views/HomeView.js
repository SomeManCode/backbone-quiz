/*Home View*/

define(
	[
        'backbone',
        'State',
        'text!templates/HomeViewTemplate.html'
    ],
	function(Backbone, State, HomeViewTemplate){
		var HomeView = Backbone.View.extend({
			id:"home_view",
			className:"section",
			template : HomeViewTemplate,
			
			initialize:function(){
				
			},
			
			render:function(){
				$(this.el).html(_.template(this.template, {}));
				return this;
			},
            
            events : {
                'click #start_game' : "startGameClicked"
            },
            
            startGameClicked : function() {
                
                State.router.navigate("quiz", {trigger: true});
            }
		})
		
		return HomeView;
	}
);