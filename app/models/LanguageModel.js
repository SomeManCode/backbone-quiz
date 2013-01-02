/* Quiz Model*/
define(
    ['backbone'],
    function (Backbone) {

        'use strict';

        var LanguageModel = Backbone.Model.extend({
            defaults : {
                name: "en-us"
            },
			initialize: function(options) {
				this.set('name', options.name);
			}

        });
        return LanguageModel;
    }
);
