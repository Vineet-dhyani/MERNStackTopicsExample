import express from "express";
import path from 'path';


const app=express();

//this use get all the  files and create a get method
//this public folder bcz the files in this are static will never changed
app.use(express.static("./public"))

const __dirname = path.resolve();
app.get("/",(req,res)=>{
    //it resolve the path of that file like index.html
    //console.log(path.resolve(__dirname,"./index.html"));
    res.sendFile((path.join(__dirname,"./index.html")))
})
app.get('/about',(req,res)=>{
    res.sendFile((path.join(__dirname,"./about.html")))
})

app.all("*",(req,res)=>{
    res.sendFile((path.join(__dirname,"./errorPage.html")))
})
app.listen(3000,()=>{
    console.log("serving at port 3000");
})