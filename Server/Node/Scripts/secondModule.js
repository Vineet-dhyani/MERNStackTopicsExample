// const a =require("./firstModule.js");
// console.log(a.a,"missed you guys");

import {a,b} from "./firstModule.js"
console.log(a,"is a software developer from",b.place);


//dev dependies like nodemon  ---which is required at time of developing



// Node.js is an open source server-side Javascript run-time environment built on Chrome’s JavaScript Engine(V8).
//  Node.js is used for building fast and scalable applications and is an event driven, non-blocking I/O model.

// REPL (READ, EVAL, PRINT, LOOP)=> is a computer environment similar to Shell (Unix/Linux) and command prompt.
//  Node comes with the REPL environment when it is installed. System interacts with the user through outputs
//   of commands/expressions used. It is useful in writing and debugging the codes. The work of REPL can be 
//   understood from its full form:

// Read : It reads the inputs from users and parses it into JavaScript data structure. It is then stored to 
// memory.
// Eval : The parsed JavaScript data structure is evaluated for the results.
// Print : The result is printed after the evaluation.
// Loop : Loops the input command. To come out of NODE REPL, press ctrl+c twice