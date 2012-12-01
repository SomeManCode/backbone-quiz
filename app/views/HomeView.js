/*Home View*/

define(
	['backbone'],
	function(Backbone){
		var HomeView = Backbone.View.extend({
			id:"home_view",
			
			className:"section",
			
			initialize:function(){
				
			},
			
			render:function(){
				$(this.el).html("Home View");
				return this;
			}
		})
		
		return HomeView;
	}
);