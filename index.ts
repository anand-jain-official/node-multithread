import * as os from 'os';
import * as cluster from 'cluster';

function nodeMultithread(cb: Function, no_of_threads?: number) {
    if (cluster.isMaster) {
      //Master Process
      const n_cpus =  no_of_threads ? no_of_threads : os.cpus().length;
      for(let i=0;i < n_cpus; i++) {
        cluster.fork();
      }
    }
    else {
        //Worker Process
        cb();
    }
}

export = nodeMultithread;