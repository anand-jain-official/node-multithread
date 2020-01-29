"use strict";
var os = require("os");
var cluster = require("cluster");
function nodeMultithread(cb, no_of_threads) {
    if (cluster.isMaster) {
        //Master Process
        var n_cpus = no_of_threads ? no_of_threads : os.cpus().length;
        for (var i = 0; i < n_cpus; i++) {
            cluster.fork();
        }
    }
    else {
        //Worker Process
        cb();
    }
}
module.exports = nodeMultithread;
