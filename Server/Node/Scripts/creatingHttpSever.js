import http from "http";
import httpStatus from "http-status-codes"
import fs from "fs"

const port=process.env.PORT||4000;

const server=http.createServer((req,res)=>{
    httpStatus.OK;
    if(req.url==="/"){
        res.setHeader("content-Type","text/html");
        res.end(`<h1>Hello from server</h1>`);
    }
    else  if(req.url==="/Home"){
        res.setHeader("content-Type","text/html");
        const data=fs.readFileSync("./index.html","utf-8")
        res.end(data);
    }
  else  if(req.url==="/About"){
        res.setHeader("content-Type","text/html");
        res.end(`<h1>About page</h1>`);
    }
   else{
        httpStatus.NOT_FOUND
        res.setHeader("content-Type","text/html");
        res.end(`<h1>Not found</h1>`);
    }

})

server.listen(port,()=>{
    console.log(`server isrunning on ${port}`);
})
