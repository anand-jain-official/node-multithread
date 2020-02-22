"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("os");
var cluster = require("cluster");
var runOnceCbArr = [];
function runOnce(cb) {
    runOnceCbArr.push(cb);
}
exports.runOnce = runOnce;
function multithread(cb, no_of_threads) {
    if (cluster.isMaster) {
        //Master Process
        var n_cpus = no_of_threads ? no_of_threads : os.cpus().length;
        for (var i = 0; i < n_cpus; i++) {
            cluster.fork();
        }
        for (var j = 0; j < runOnceCbArr.length; j++) {
            runOnceCbArr[j]();
        }
    }
    else {
        //Worker Process
        cb();
    }
}
exports.multithread = multithread;
