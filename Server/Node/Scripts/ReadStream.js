import { createReadStream } from "fs";
import {readFile} from "fs/promises"
import {createServer} from "http"
const server=createServer();


    ///reeading file using readStream in form of chunk///
         //  size-64bits//

// const stream=createReadStream("./Text-Files/file5.txt");
// stream.on('data',(result)=>{
//     console.log(result);
// })


     ////we can provide the encoding and chunk size also//

//  const stream=createReadStream("./Text-Files/file5.txt",{highWaterMark:90000,encoding:"utf8"});
//  stream.on('data',(result)=>{
//      console.log(result);
//  })

     
       ///Streams And buffer in node js///////

server.on("request",(req,res)=>{
    const stream=createReadStream("../Text-Files/file5.txt");
    stream.on('data',(chunkdata)=>{
        res.write(chunkdata);
      })
    stream.on("end",()=>{
        res.end();
    })
    stream.on("error",(err)=>{
        console.log(err);
        res.end("File not found")
    })
})
server.listen(3000,"127.0.0.1")
