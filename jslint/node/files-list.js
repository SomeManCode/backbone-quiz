/*global __dirname, require, console*/

var fs = require('fs'),
    node_config = require('../node_config'),
    jspaths = node_config.js_paths,
    curpath = __dirname.replace(/\\/g, '/'),
    str = "",
    i = 0,
    j;
    
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
                    if (file.match(/\.js$/)) {
                        results.push(file);
                    }
                    next();
                }
            });
        }());
    });
};


var walkFunction = function (err, results) {
    'use strict';
    if (err) {
        throw err;
    }
    for (j = 0; j < results.length; j = j + 1) {
        if (str.length > 0) {
            str += ",\n";
        }
        str += "    '" + results[j].replace(curpath, "").substr(1) + "'";
    }

    //If there are any pending paths walk in those directories.
    if (i < jspaths.length - 1) {

        i = i + 1;
        walk(curpath + "/../" + jspaths[i], walkFunction);

    } else {

        //Walking completed in all directories. Now save file.
        str = "var files_list = [\n" + str + "\n];";

        fs.writeFile("../js/files.js", str, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        });
    }
};

//Start walking
walk(curpath + "/../" + jspaths[i], walkFunction);