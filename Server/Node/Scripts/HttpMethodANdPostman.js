import express from  'express'
import {People} from "./Scripts/Data.js"

const app=express();

app.use(express.static("./index.html"));//applying inbuid middleware

app.use(express.urlencoded({extended:false}))///when we working with we need parser to parse form data
app.use(express.json());//json parser

app.get("/api/People",(req,res)=>{
  const {name}=req.body;
  if(name){
    console.log(name);
    return res.json({success:true,data:{person:name}});

  }
  res.status(404).json({success:false,msg:"Provide your name"});
 
})
app.post("/api/people/:id",(req,res)=>{
  const {name}=req.body;
  const myperson=People.find((person)=>person.id===Number(req.params.id))
  if(myperson){
    myperson.name=name;
   return res.status(201).json({success:true,data:[...People
    ]})
  }
  

res.status(404).send("Person id does not exist")
});
app.delete("/api/people/:id",(req,res)=>{
  const {name}=req.body;
  const myperson=People.filter((person)=>person.id!==Number(req.params.id))
  if(myperson){
    myperson.name=name;
   return res.status(201).json({success:true,data:[...myperson
    ]})
  }
  

res.status(404).send("Person id does not exist")
});

app.post("/login",(req,res)=>{
  const {name}=req.body;
  if(name){
  return  res.status(201).send(`Welcomr ${name}`)
  }
res.status(404).send("Enter the name")
});

app.listen(3000,()=>{

  console.log("server started");
});
