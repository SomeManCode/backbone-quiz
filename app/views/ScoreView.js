/* Score View */
define(
    [
		'backbone',
		'text!templates/ScoreViewTemplate.html'
	],
    function (Backbone, ScoreViewTemplate) {
    
        var ScoreView = Backbone.View.extend({
            id : "score_view",
            className : "section",
			template : ScoreViewTemplate,
            initialize : function() {
                
            },
            render : function() {
                $(this.el).html(_.template(this.template));
                return this;
            }
        });
        
        return ScoreView;
    }
);