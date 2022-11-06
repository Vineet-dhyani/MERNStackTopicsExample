import express from 'express';

const app=express();

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Homepage</h1>");
})
app.get("/About",(req,res)=>{
    res.status(200).send("<h1>About</h1>")
})
app.get("/Contact",(req,res)=>{
    res.status(200).send("<h1>Contact</h1>")
})
app.all("*",(req,res)=>{
    res.status(404).res.send("<h1>Errorpage</h1>")
})



app.listen(3000,()=>{
    console.log("serving at port 3000");
})