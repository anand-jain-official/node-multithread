# node-multithread
Simplest way to enable multi-threading in Nodejs. No configuration needed. Just plug and play. 

Install with `npm install --save node-multithread`

## Updates:

v1.0.2 : 
1) Breaking change for import syntax.
2) Added runOnce function for code that only needs to run once.

## How does it work ?
It uses the node cluster module under the hood. No fancy tricks.
It starts multiple server instances with a load balancer.
Node v8.x and above recommended.

## Example: 
    
    const {multithread, runOnce} = require('node-multithread');

	runOnce(() => console.log("this will print only once"));

    multithread(() => {

        // Your code goes here
        //...
	eg :

	const express = require('express');
	const app = express();
	const port = 3000;
	console.log("This will print as many times as threads");

	app.get('/', (req, res) => res.send('Hello World!'))

	app.listen(port, () => console.log(`Example app listening on port ${port}!`))

    }, 4); // Optional parameter after callback to limit threads.

