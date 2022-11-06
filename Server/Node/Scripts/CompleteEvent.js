import {EventEmitter} from "events"

const customEvent=new EventEmitter();

customEvent.on("DataReceived",()=>{
    console.log("Data received Successfully");
   
})
customEvent.on("DataReceived",()=>{
    console.log("Data received Successfully multiple callback");
})
customEvent.on("DataReceived",(fname,lname)=>{

    console.log(`web developer name is ${fname} ${lname}`);
})
customEvent.emit("DataReceived","vineet","dhyani");