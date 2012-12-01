/*Home View*/

define(
	[
        'backbone',
        'text!templates/HomeViewTemplate.html'
    ],
	function(Backbone, HomeViewTemplate){
		var HomeView = Backbone.View.extend({
			id:"home_view",
			className:"section",
			template : HomeViewTemplate,
			
			initialize:function(){
				
			},
			
			render:function(){
				$(this.el).html(_.template(this.template, {}));
				return this;
			}
		})
		
		return HomeView;
	}
);