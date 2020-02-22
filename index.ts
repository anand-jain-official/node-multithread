import * as os from 'os';
import * as cluster from 'cluster';

const runOnceCbArr: Function[] = [];

export function runOnce(cb: Function) {
  runOnceCbArr.push(cb);
}

export function multithread(cb: Function, no_of_threads?: number) {
    if (cluster.isMaster) {
      //Master Process
      const n_cpus =  no_of_threads ? no_of_threads : os.cpus().length;
      for(let i=0;i < n_cpus; i++) {
        cluster.fork();
      }
	for(let j=0;j<runOnceCbArr.length;j++){
		runOnceCbArr[j]();
	}
    }
    else {
        //Worker Process
        cb();
    }
}
