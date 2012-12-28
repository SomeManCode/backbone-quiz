/* QuestionsCollection */
define(
    [
        'backbone',
		'localStorage'
    ],
    function (Backbone, LocalStorage) {

        'use strict';

        var localStorageCollection = Backbone.Collection.extend({
            localStorage: new Backbone.LocalStorage("languageCollection")
        });

        return localStorageCollection;
    }
);