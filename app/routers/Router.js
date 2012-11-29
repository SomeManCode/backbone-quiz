//Router
define(
['backbone'],
function(Backbone) {

    var Router = Backbone.Router.extend({
        routes: {
            "home"          :   "home",
            "quiz"          :   "quiz",
            "quiz/q:qno"    :   "quiz",
            "result"        :   "result",
            "*actions"             :   "home"
        },

        home: function() {
            console.log("Home View");
        },

        quiz: function(qno) {
            console.log("Quiz. QNO : " + qno);
        },
        
        result : function() {
            console.log("Result");
        }
    });
    
    return Router;    
});