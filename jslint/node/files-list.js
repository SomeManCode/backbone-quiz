/*global __dirname*/

var fs = require('fs');
var walk = function (dir, done) {
    'use strict';
    var results = [];

    fs.readdir(dir, function (err, list) {
        if (err) {
            return done(err);
        }
        var i = 0;
        (function next() {
            var file = list[i];
            i = i + 1;
            if (!file) {
                return done(null, results);
            }
            file = dir + '/' + file;
            fs.stat(file, function (err, stat) {
                if (err) {
                    throw err;
                }
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        if (err) {
                            throw err;
                        }
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        }());
    });
};

var curpath = __dirname.replace(/\\/g, '/');
var jspath = curpath + "/../../app";

walk(jspath, function (err, results) {
    'use strict';
    if (err) {
        throw err;
    }
    var str = "var files_list =\n    [\n",
        i;
    for (i = 0; i < results.length; i = i + 1) {
        if (i > 0) {
            str += ",\n";
        }
        str += "        '" + results[i].replace(curpath, "").substr(1) + "'";
    }
    str += "\n    ];";

    fs.writeFile("../js/files.js", str, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
});