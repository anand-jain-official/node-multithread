# node-multithread
Simplest way to enable multi-threading in Nodejs. No configuration needed. Just plug and play. 

Install with `npm install --save node-multithread`

## How does it work ?
It uses the node cluster module under the hood. No fancy tricks.
Node v8.x and above recommended.

## Example: 
    
    const nodeMultithread = require('node-multithread');

    nodeMultithread(() => {

        // Your code goes here
        //...

    }, 4); // Optional parameter after callback to limit threads.

