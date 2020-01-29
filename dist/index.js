"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
var cluster = require("cluster");
exports.default = (function (no_of_threads, cb) {
    if (cluster.isMaster) {
        //Master Process
        var n_cpus = no_of_threads ? no_of_threads : os.cpus().length; // os.cpus().length
        console.log("Forking " + n_cpus + " CPUs");
        for (var i = 0; i < n_cpus; i++) {
            cluster.fork();
        }
    }
    else {
        //Worker Process
        cb();
    }
});
