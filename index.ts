import * as os from 'os';
import * as cluster from 'cluster';

export default (no_of_threads: number, cb: Function) => {
    if (cluster.isMaster) {
      //Master Process
      const n_cpus =  no_of_threads ? no_of_threads : os.cpus().length; // os.cpus().length
      console.log(`Forking ${n_cpus} CPUs`);
      for(let i=0;i < n_cpus; i++) {
        cluster.fork();
      }
    }
    else {
        //Worker Process
        cb();
    }
}