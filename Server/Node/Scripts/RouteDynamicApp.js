import {createServer} from "http"
import  {readFileSync} from "fs"
const Homepage=readFileSync("./index.html","utf8");
const Homejava=readFileSync("./home.js","utf8");
const Homecss=readFileSync("./home.css","utf8");
const server=createServer((req,res)=>{
const url=req.url;
if(url==="/"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write(Homepage)
}
else if(url==="/home.js"){
    res.writeHead(200,{"content-type":"text/script"});
    res.write(Homejava)
}
else if (url==="/home.css"){
    res.writeHead(200,{"content-type":"text/stylesheet"});
    res.write(Homecss)
}
else{
    res.writeHead(404,{"content-type":"text/html"});
    res.write("<h1>Erroepage</h1>")
}
res.end();
})
server.listen(3000,()=>{
    console.log(`server is running on port 3000`);
})