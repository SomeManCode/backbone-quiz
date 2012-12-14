/*global jasmine, JSLINT, files_list*/

describe('JSLint', function () {
    'use strict';
    var options = {
        predef: ['requirejs', 'define', 'requirejsConfig', 'describe', 'jasmine', 'window', 'beforeEach', 'expect', 'it'],
        nomen : true
    };
    function get(path) {
        path = path + "?" + new Date().getTime();

        var xhr;
        try {
            xhr = new jasmine.XmlHttpRequest();
            xhr.open("GET", path, false);
            xhr.send(null);
        } catch (e) {
            throw new Error("couldn't fetch " + path + ": " + e);
        }
        if (xhr.status < 200 || xhr.status > 299) {
            throw new Error("Could not load '" + path + "'.");
        }

        return xhr.responseText;
    }

    _.each(files_list, function (element) {
        var script = element;

        it(script, function () {

            var self = this,
                source = get(script),
                result = JSLINT(source, options);
            _.each(JSLINT.errors, function (error) {
                self.addMatcherResult(new jasmine.ExpectationResult({
                    passed: false,
                    message: "line " + error.line + ' - ' + error.reason + ' - ' + error.evidence
                }));
            });
            expect(true).toBe(true); // force spec to show up if there are no errors
        });
    });
});