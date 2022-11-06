import express from  'express'
import products from "./Scripts/Data.js"

const app=express();

/////////defining Middleware//////////
/////user defined ,inbuilt,external////////
const logIt=(req,res,next)=>{
  const method=req.method;
  const url=req.url;
  const time=new Date().getTime();
  console.log(method,url,time);
  next();
}

const Authorixer=(req,res,next)=>{
  const {name}=req.query;
  if(!name){
    return res.status(401).send("not authorised");
  }
  req.name=name; // it will create the property explicitly in req object
  next();
}
//use function it apply middleware to all the url////
// app.use([logIt,Authorixer]);
app.use('/About',Authorixer);//here we applying the middleware to all url starting with /About

app.get('/',(req,res)=>{
 res.send("HomePage");
})
app.get("/About",(req,res)=>{
  console.log(req.name)
  res.send("About Page");
})
app.get("/About/People",(req,res)=>{
  console.log(req.name)
  res.send("People Page");
})

app.listen(3000,()=>{
  console.log("server started");
});
