import express from  'express'
import session from 'express-session';
import path from 'path';
import mongoose from 'mongoose';
import User from './model/userSchema.js';
import cookieParser from 'cookie-parser';


//connecting to db
const url="mongodb+srv://vineetdhyani:123%40Manurana@cluster0.ip9geit.mongodb.net/MyTourDb?retryWrites=true&w=majority"
mongoose.connect(url,()=>{
    console.log("connected to db");
},
(e)=>{
    console.log(e.message);
})


const app=express();


app.use(express.static("./public"))
const __dirname = path.resolve();

//using form parser
app.use(express.urlencoded({extended:false}));

app.use(cookieParser());

//using express-session middleware for creating session and cookie
app.use(session({
  key:"user_sid",
  secret: 'Testing',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false,maxAge:6000000 ,httpOnly:true}
}))


//middleware func for checking cookie is present or not
//like if we clear the cookie of github page then we have
//to login again
app.use((req,res,next)=>{
if(req.cookies.user_sid&& !req.session.user){
res.clearCookie("user_sid");
}
next();
})


//checking session 
//to check that the session is same session
//then no need to login go to dashboard
const sessionChecker=(req,res,next)=>{
  if(req.cookies.user_sid&& req.session.user){
    res.redirect("/Dashboard")
    }
   
   next();
}



app.get('/login',sessionChecker,(req,res)=>{
  res.sendFile((path.join(__dirname,"./index.html")))
})

app.get('/signup',sessionChecker,(req,res)=>{
  res.sendFile((path.join(__dirname,"./index.html")))
})

app.get('/logout',(req,res)=>{
req.clearCookie("user_sid");
})

app.post('/login',async(req,res)=>{
  const userName=req.body.username;
  const password=req.body.password;
  const user=await User.findOne({userName,password});
  
  if(user){
    req.session.user=user;
    return res.redirect('/Dashboard');
  }
  res.redirect('/login');
})

app.post('/signup',async(req,res,next)=>{
  const user=await User.create({
  userName:req.body.username,
  email:req.body.email,
  password:req.body.password
 })

 user.then((data)=>{
  if(data)
  {
  return  res.redirect("./Dashboard");
  }
 })
 .catch(next);
  res.redirect('./signup');
 })

app.get("/Dashboard",(req,res)=>{
  if(req.cookies.user_sid&& req.session.user){
    return  res.sendFile((path.join(__dirname,"./about.html")))
    } 
 else{
  res.redirect('/login');
 }
})

//eeror handling middleware
app.use((err,req,res,next)=>{
  if(err){
    console.log("there is some error");
    res.redirect(req.url)
  }
  next();
})


app.all("*",(req,res)=>{
    res.sendFile((path.join(__dirname,"./errorPage.html")))
})
app.listen(3000,()=>{

  console.log("server started");
});
