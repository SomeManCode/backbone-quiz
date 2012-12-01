/* Score View */
define(
    ['backbone'],
    function (Backbone) {
    
        var ScoreView = Backbone.View.extend({
            id : "score_view",
            className : "section",
            initialize : function() {
                
            },
            render : function() {
                $(this.el).html("Score");
                return this;
            }
        });
        
        return ScoreView;
    }
);